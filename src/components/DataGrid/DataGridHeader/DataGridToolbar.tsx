/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/delete';
import { toolStyle } from '../styles';


interface Tool {
    kind?: 'add' | 'delete';
    icon?: string;
    label?: string;
    items?: any[];
    onClick?: VoidFunction;
}
export type DataGridTools = Tool[];

interface Props {
    tools?: DataGridTools;
}

const DataGridToolbar = (props: Props) => {
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

    const voidFunc = () => { /* void */ }
    const tools = props.tools?.map((tool: Tool, i: number) => {
        return {
            key: i,
            type: !!tool.items?.length ? 'menu' : 'button',
            icon: tool.icon ?? resolveToolIcon(tool.kind),
            label: tool.label ?? resolveToolLabel(tool.kind),
            onClick: tool.onClick ?? voidFunc,
        };
    });

    const renderToolbar = () => {
        return tools?.map((tool) => {
            return (
                <Button
                    css={toolStyle}
                    key={tool.key}
                    variant="contained"
                    startIcon={tool.icon}
                    onClick={tool.onClick}
                >
                    {tool.label}
                </Button>
            );
        });
    };

    return (
        <div>
            {renderToolbar()}
        </div>
    );
};

export default DataGridToolbar;
