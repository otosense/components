/** @jsx jsx */
import { jsx } from '@emotion/react';
// import { ThemeProvider } from '@mui/material/styles';
import { Link } from '@mui/material';
import { DataGrid as MuiDataGrid, GridColDef, GridEnrichedColDef, GridRowsProp } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import DataGridHeader from './DataGridHeader';
import { DataGridTools } from './DataGridHeader/DataGridToolbar';
import { dataGridContainerStyle, mainContainerStyle } from './styles';
// import LocaleStore from '@otosense/locale';
// import otosenseTheme from '../../shared/theme';
import { observable } from 'mobx'

const DEFAULLT_PAGE_SIZE = 100

interface DataGridColDef extends GridColDef {
    onClick?: (data: any) => void;
}
type DataGridEnrichedColDef = GridEnrichedColDef | DataGridColDef;
export type DataGridColumns = DataGridEnrichedColDef[];

type DataSource = { [key: string]: any }[];
interface LazyDataSourceArgs {
    dataLoader: (skip: number, limit: number) => Promise<any[]>
    dataLoaderThisArg?: any
    dataCounter: () => Promise<number>
    dataCounterThisArg?: any
}
export class LazyDataSource {
    @observable totalItemCount: number = 0;
    dataLoader: (skip: number, limit: number) => Promise<any[]>
    dataLoaderThisArg?: any
    // private _items: DataSource = [];

    constructor(args: LazyDataSourceArgs) {
        this.dataLoader = args.dataLoader
        this.dataLoaderThisArg = args.dataLoaderThisArg
        const promise = args.dataCounterThisArg ? args.dataCounter.call(args.dataCounterThisArg) : args.dataCounter()
        promise.then((count) => this.totalItemCount = count);
    }
}

interface Props /* extends GridInputComponentProps */ {
    css?: { [key: string]: string | number };
    dataSource: DataSource | LazyDataSource;
    columns: DataGridColumns;
    title?: string;
    tools?: DataGridTools;
    extraPageSizeOptions?: number[]
    // locale?: LocaleStore;
}

const DataGrid = (props: Props) => {

    const columns = props .columns.map((column: any) => {
        if (!!column.onClick) {
            return {
                ...column,
                renderCell: (params) => {
                    return (
                        <Link
                            component="button"
                            variant="body2"
                            onClick={() => column.onClick(params.row)}
                        >
                            {params.value}
                        </Link>
                    );
                },
            };
        }
        return column;
    });

    const muiDataGridProps: any = {
        ...props,
        css: null,
        rows: props.dataSource,
        columns,
        getRowId: (row) => row._id,
        rowsPerPageOptions: [DEFAULLT_PAGE_SIZE].concat(props.extraPageSizeOptions ?? []).sort((a, b) => a - b),
        disableSelectionOnClick: true
    };

    if (props.dataSource instanceof LazyDataSource) {
        const lazyDataSource: LazyDataSource = props.dataSource;
        const [page, setPage] = useState(0);
        const [pageSize, setPageSize] = useState(DEFAULLT_PAGE_SIZE);
        const [rows, setRows] = useState<GridRowsProp>([]);
        const [loading, setLoading] = useState<boolean>(false);

        useEffect(() => {
            let active = true;
            (async () => {
                setLoading(true);
                const skip = page * pageSize
                const promise = lazyDataSource.dataLoaderThisArg ? lazyDataSource.dataLoader.call(lazyDataSource.dataLoaderThisArg, skip, pageSize) : lazyDataSource.dataLoader(skip, pageSize);
                const newRows = await promise;
                if (!active) {
                    return;
                }
                setRows(newRows);
                setLoading(false);
            })();

            return () => {
                active = false;
            };
        }, [page, pageSize, lazyDataSource.totalItemCount]);

        muiDataGridProps.rowCount = lazyDataSource.totalItemCount;
        muiDataGridProps.rows = rows;
        muiDataGridProps.paginationMode = 'server';
        muiDataGridProps.onPageChange = (newPage) => setPage(newPage);
        muiDataGridProps.onPageSizeChange = (newPageSize) => setPageSize(newPageSize);
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
                <MuiDataGrid {...muiDataGridProps}/>
            </div>
        </div>
    );
};

export default DataGrid;
