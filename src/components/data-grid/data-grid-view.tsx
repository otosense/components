
import React from 'react';
import { DataGrid as MaterialDataGrid } from '@mui/x-data-grid';

interface IProps {
    rows: { [key: string]: any }[];
    columns: any[],

}

const DataGridView = (props: IProps) => {
    return (
        <div style={{height: 600}}>
            <MaterialDataGrid
                {...props}
                // rows={props.rows}
                // columns={props.columns}
                // getRowId={(row) => row._id}
                // // hideFooterPagination={true}
                // rowsPerPageOptions={[]}
                // disableSelectionOnClick={true}
            />
        </div>
    )
};

export default DataGridView
