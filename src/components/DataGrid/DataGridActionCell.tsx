/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Button, IconButton, Tooltip } from '@mui/material';
import { nanoid } from 'nanoid'
import { actionStyle } from './styles';

interface DataGridRowAction {
    icon?: JSX.Element;
    label?: string;
    tooltip?: string;
    onClick: (item: { [key: string]: any }) => void;
}
export type DataGridRowActions = DataGridRowAction[];

interface Props {
    actions: DataGridRowActions
    item: { [key: string]: any }
}

const DataGridActionCell = (props: Props) => {
    const renderActionButton = (action: DataGridRowAction) => {
        const key = `action-cell-button-${nanoid()}`;
        const onClick = () => action.onClick(props.item);
        if (!!action.label) {
            return (
                <Button
                    css={actionStyle}
                    key={key}
                    startIcon={action.icon}
                    onClick={onClick}
                >
                    {action.label}
                </Button>
            );
        }
        else {
            return (
                <IconButton
                    css={actionStyle}
                    key={key}
                    onClick={onClick}
                >
                    {action.icon}
                </IconButton>
            );
        }
    }

    const renderActionCell = () => {
        return props.actions.map((action) => {
            const button = renderActionButton(action);
            if (action.tooltip) {
                return (
                    <Tooltip key={`action-cell-tooltip-${nanoid()}`} title={action.tooltip}>
                        {button}
                    </Tooltip>
                );
            }
            return button;
        });
    };

    return (
        <div>
            {renderActionCell()}
        </div>
    );
};

export default DataGridActionCell;
