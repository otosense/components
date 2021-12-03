/** @jsx jsx */
import { jsx } from '@emotion/react';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/delete';
import { Button, Link } from '@mui/material';
import { DataGrid as MaterialDataGrid, GridColDef, GridEnrichedColDef } from '@mui/x-data-grid';
// import LocaleStore from '@otosense/locale';

interface DataGridColDef extends GridColDef {
    onClick?: (data: any) => void;
}
type DataGridEnrichedColDef = GridEnrichedColDef | DataGridColDef;
export type DataGridColumns = DataGridEnrichedColDef[];

interface DataGridTool {
    kind?: 'add' | 'delete';
    icon?: string;
    label?: string;
    items?: any[];
    onClick?: VoidFunction;
}
export type DataGridToolbar = DataGridTool[];

interface Props {
    dataSource: { [key: string]: any }[];
    columns: DataGridColumns;
    title: string;
    toolbar: DataGridToolbar;
    // locale?: LocaleStore;
}

const DataGrid = (props: Props) => {
    const resolveToolIcon = (kind: string): JSX.Element => {
        switch (kind) {
            case 'add':
                return <AddIcon />;
            case 'delete':
                return <DeleteIcon />;
            default:
                return null;
        }
    };

    const resolveToolLabel = (kind: string): string => {
        // TODO: Translate it with locale.
        switch (kind) {
            case 'add':
                return 'Add';
            case 'delete':
                return 'Delete';
            default:
                return null;
        }
    };

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

    const voidFunc = () => { /* void */ }

    const toolbar = props.toolbar.map((tool: DataGridTool, i: number) => {
        return {
            key: i,
            type: !!tool.items?.length ? 'menu' : 'button',
            icon: tool.icon ?? resolveToolIcon(tool.kind),
            label: tool.label ?? resolveToolLabel(tool.kind),
            onClick: tool.onClick ?? voidFunc,
        };
    });

    const _props: any = {
        ...props,
        rows: props.dataSource,
        columns,
        toolbar,
    };

    const mainContainerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    };

    const dataGridContainerStyle = {
        height: 'calc(100vh - 103px)',
    };

    const renderToolbar = () => {
        return _props.toolbar.map((tool) => {
            const toolStyle = {
                marginLeft: '5px',
            };
            return (
                <Button
                    key={tool.key}
                    variant="contained"
                    startIcon={tool.icon}
                    onClick={tool.onClick}
                    css={toolStyle}
                >
                    {tool.label}
                </Button>
            );
        });
    };

    return (
        <div>
            <div css={mainContainerStyle}>
                <h4>{_props.title}</h4>
                <div>
                    {renderToolbar()}
                </div>
            </div>
            <div css={dataGridContainerStyle}>
                <MaterialDataGrid
                    {..._props}
                    // rows={_props.rows}
                    // columns={_props.columns}
                    getRowId={(row) => row._id}
                    // // hideFooterPagination={true}
                    // rowsPerPageOptions={[]}
                    disableSelectionOnClick={true}
                />
            </div>
        </div>
    );
};

export default DataGrid;
