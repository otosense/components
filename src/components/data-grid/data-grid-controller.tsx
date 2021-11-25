import React from 'react';
import DataGridView from './data-grid-view';

interface IProps {
    dataSource: { [key: string]: any }[];
    columns: any[],
}

const DataGridController = (props: IProps) => {
    const _props: any = {...props}
    _props.rows = props.dataSource
    delete _props.dataSource

    return (
        <DataGridView
            {..._props}
        />
    );
};

export default DataGridController