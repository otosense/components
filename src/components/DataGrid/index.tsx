/** @jsx jsx */
import { jsx } from '@emotion/react';
// import { ThemeProvider } from '@mui/material/styles';
import { Link } from '@mui/material';
import { DataGrid as MuiDataGrid, GridColDef, GridEnrichedColDef, GridRowsProp, GridSelectionModel } from '@mui/x-data-grid';
import { SetStateAction, useEffect, useState, useRef } from 'react';
import DataGridHeader from './DataGridHeader';
import { DataGridTools } from './DataGridHeader/DataGridToolbar';
import { dataGridContainerStyle, mainContainerStyle, renderCellStyle } from './styles';
// import LocaleStore from '@otosense/locale';
// import otosenseTheme from '../../shared/theme';
import { observable } from 'mobx'
import moment from 'moment';
import DataGridActionCell, { DataGridRowActions } from './DataGridActionCell';

const DEFAULLT_PAGE_SIZE = 100;
const DEFAULT_TIMESTAMP_FORMAT = 'lll';
const DEFAULT_COLUMN_WIDTH = 200;

interface DataGridColDef extends GridColDef {
    format?: 'string';
    onClick?: (data: any) => void;
}
type DataGridEnrichedColDef = GridEnrichedColDef | DataGridColDef;
export type DataGridColumns = DataGridEnrichedColDef[];

type DataSource = { [key: string]: any }[];
interface LazyDataSourceArgs {
    dataLoader: (skip: number, limit: number) => Promise<any[]>
    dataCounter: () => Promise<number>
}
export class LazyDataSource {
    @observable totalItemCount: number = 0;
    dataLoader: (skip: number, limit: number) => Promise<any[]>
    private _cache: object = {};

    constructor(args: LazyDataSourceArgs) {
        this.dataLoader = args.dataLoader
        args.dataCounter().then((count) => this.totalItemCount = count);
    }

    addPageToCache(page: number, rows: GridRowsProp) {
        this._cache[page] = rows;
    }

    getCachedPage(page): Promise<DataSource> {
        // return null
        return new Promise<DataSource>((resolve) => {
            setTimeout(() => {
                resolve(this._cache[page] ?? null);
            })
        })
        return this._cache[page] ?? null;
    }

    clearCache() {
        this._cache = {}
    }
}

interface Props /* extends GridInputComponentProps */ {
    actions?: DataGridRowActions;
    checkboxSelection?: boolean;
    columns: DataGridColumns;
    css?: { [key: string]: string | number };
    dataSource: DataSource | LazyDataSource;
    extraPageSizeOptions?: number[];
    filterable?: boolean;
    onSelectionModelChange?: (selectedItems: any[]) => void;
    sortable?: boolean;
    title?: string;
    tools?: DataGridTools;
    // locale?: LocaleStore;
}

const DataGrid = (props: Props) => {

    const columns = props .columns.map((column: any) => {
        const _column = { ...column };
        _column.sortable = _column.sortable ?? props.sortable ?? true;
        _column.filterable = _column.filterable ?? props.filterable ?? true;
        _column.width = _column.width ?? DEFAULT_COLUMN_WIDTH;
        if (column.type === 'timestamp') {
            _column.type = 'dateTime';
            if (!_column.valueFormatter) {
                const format = _column.format ?? DEFAULT_TIMESTAMP_FORMAT;
                _column.valueFormatter = ({ value }) => value && moment(parseInt(value.toString(), 10)).format(format);
            }
        }
        if (!!column.onClick) {
            _column.renderCell = (params) => (
                <Link
                    component="button"
                    variant="body2"
                    onClick={() => column.onClick(params.row)}
                >
                    {params.value}
                </Link>
            )
        }
        if (!!column.renderCell) {
            _column.renderCell = (params) => (
                <div css={renderCellStyle}>
                    {column.renderCell(params)}
                </div>
            )
        }
        return _column;
    });
    if (!!props.actions?.length) {
        // const apiRef = useGridApiRef();
        // React.useEffect(() => {
        //     return apiRef.current.subscribeEvent(GridEvents.rowMouseEnter, (params) => {
        //         console.log(params);
        //     });
        // }, [apiRef]);
        const actionColumn = {
            field: 'actions',
            type: 'actions',
            sortable: false,
            filterable: false,
            renderCell: ({row}) => (
                <DataGridActionCell
                    actions={props.actions}
                    item={row}
                />
            ),
        };
        columns.push(actionColumn)
    }

    const muiDataGridProps: any = {
        ...props,
        css: null,
        rows: props.dataSource,
        columns,
        getRowId: (row) => row._id,
        rowsPerPageOptions: [DEFAULLT_PAGE_SIZE].concat(props.extraPageSizeOptions ?? []).sort((a, b) => a - b),
        disableSelectionOnClick: true,
        rowMouseEnter: (params, event, details) => console.log(params, event, details),
    };

    if (props.dataSource instanceof LazyDataSource) {
        const lazyDataSource: LazyDataSource = props.dataSource;
        const [page, setPage] = useState(0);
        const [pageSize, setPageSize] = useState(DEFAULLT_PAGE_SIZE);
        const [rows, setRows] = useState<GridRowsProp>([]);
        const [selectionModel, setSelectionModel] = useState<GridSelectionModel>([]);
        const prevSelectionModel = useRef<GridSelectionModel>(selectionModel);
        const [loading, setLoading] = useState<boolean>(false);

        const setSelectedItems = (items: any[]) => {
            setSelectionModel(items);
            if (props.onSelectionModelChange) {
                props.onSelectionModelChange(items)
            }
        }

        useEffect(() => {
            let active = true;
            (async () => {
                setLoading(true);
                let items = await lazyDataSource.getCachedPage(page);
                if (items === null) {
                    const skip = page * pageSize;
                    items = await lazyDataSource.dataLoader(skip, pageSize);
                    lazyDataSource.addPageToCache(page, items)
                }
                if (!active) {
                    return;
                }
                setRows(items);
                setLoading(false);
                setTimeout(() => {
                    setSelectedItems(prevSelectionModel.current);
                });
            })();

            return () => {
                active = false;
            };
        }, [page, pageSize, lazyDataSource.totalItemCount]);

        muiDataGridProps.rowCount = lazyDataSource.totalItemCount;
        muiDataGridProps.rows = rows;
        muiDataGridProps.paginationMode = 'server';
        muiDataGridProps.onPageChange = (newPage: SetStateAction<number>) => {
            prevSelectionModel.current = selectionModel;
            setPage(newPage);
        };
        muiDataGridProps.onPageSizeChange = (newPageSize: SetStateAction<number>) => {
            lazyDataSource.clearCache()
            setPageSize(newPageSize)
        };
        muiDataGridProps.onSelectionModelChange = setSelectedItems
        muiDataGridProps.selectionModel = selectionModel
        muiDataGridProps.loading = loading;
    }

    const mainContainerStyleExt = {
        ...mainContainerStyle,
        ...(props.css)
    };

    return (
        <div css={mainContainerStyleExt}>
            <DataGridHeader title={props.title} tools={props.tools} />
            <div css={dataGridContainerStyle}>
                <MuiDataGrid {...muiDataGridProps} />
            </div>
        </div>
    );
};

export default DataGrid;
