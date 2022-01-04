/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Button, IconButton, Tooltip } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import DeleteIcon from '@mui/icons-material/Delete';
// import FilterAltIcon from '@mui/icons-material/FilterAlt';
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { toolStyle } from '../styles';
import { nanoid } from 'nanoid'

interface Tool {
    // kind?: 'add' | 'delete';
    icon?: JSX.Element;
    label?: string;
    tooltip?: string;
    menuItems?: any[];
    onClick?: VoidFunction;
}
export type DataGridTools = Tool[];

interface Props {
    tools?: DataGridTools;
}

const DataGridToolbar = (props: Props) => {
    // const resolveToolIcon = (kind: string): JSX.Element => {
    //     switch (kind) {
    //         case 'add':
    //             return <AddIcon />;
    //         case 'delete':
    //             return <DeleteIcon />;
    //         case 'upload':
    //             return <CloudUploadIcon />;
    //         case 'filter':
    //             return <FilterAltIcon />;
    //         default:
    //             return null;
    //     }
    // };

    // const resolveToolLabel = (kind: string): string => {
    //     // TODO: Translate it with locale.
    //     switch (kind) {
    //         case 'add':
    //             return 'Add';
    //         case 'delete':
    //             return 'Delete';
    //         case 'upload':
    //             return 'Upload';
    //         case 'filter':
    //             return 'Filter';
    //         default:
    //             return null;
    //     }
    // };

    const voidFunc = () => { /* void */ }
    const tools = props.tools?.map((tool: Tool, i: number) => {
        return {
            ...tool,
            type: !!tool.menuItems?.length ? 'menu' : 'button',
            // icon: tool.icon ?? resolveToolIcon(tool.kind),
            // label: tool.label ?? resolveToolLabel(tool.kind),
            onClick: tool.onClick ?? voidFunc,
        };
    });

    const renderToolElement = (tool) => {
        // TODO - Render menu buttons
        const key = `toolbar-button-${nanoid()}`;
        if (!!tool.label) {
            return (
                <Button
                    css={toolStyle}
                    key={key}
                    startIcon={tool.icon}
                    onClick={tool.onClick}
                >
                    {tool.label}
                </Button>
            );
        }
        else {
            return (
                <IconButton
                    css={toolStyle}
                    key={key}
                    onClick={tool.onClick}
                >
                    {tool.icon}
                </IconButton>
            );
        }
    }

    const renderToolbar = () => {
        return tools?.map((tool) => {
            const element = renderToolElement(tool)
            if (tool.tooltip) {
                return (
                    <Tooltip key={`toolbar-tooltip-${nanoid()}`} title={tool.tooltip}>
                        {element}
                    </Tooltip>
                );
            }
            return element;
        });
    };

    return (
        <div>
            {renderToolbar()}
        </div>
    );
};

export default DataGridToolbar;
