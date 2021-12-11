/** @jsx jsx */
import { jsx } from '@emotion/react';
import { headerContainerStyle } from '../styles';
import DataGridToolbar, { DataGridTools } from './DataGridToolbar';

interface Props {
    title?: string;
    tools?: DataGridTools;
}

const DataGridHeader = (props: Props) => {

    return (
        <div css={headerContainerStyle}>
            <h4>{props.title}</h4>
            <DataGridToolbar tools={props.tools} />
        </div>
    );
};

export default DataGridHeader;
