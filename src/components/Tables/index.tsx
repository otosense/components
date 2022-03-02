import {TableCell, Table} from '@mui/material';
import { styled } from '@mui/material/styles';
import { CSSProperties } from 'react';

export const TableCellNoBorder = styled(TableCell)({
  borderBottom: 'none',
  fontSize: 18,
});

export const TableInGrid = styled(Table)({
  width: 'calc(100% - 16px)',
  overflow: 'scroll',
  margin: '8px'
});

export const TableCellComment = styled(TableCell)({
  maxWidth: 200,
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  paddingLeft: 0,
  fontSize: 18,
  paddingRight: '8px',
  paddingTop: 0,
  paddingBottom: 0,
})

export const TableCellIcon = styled(TableCell)({
  verticalAlign: 'bottom',
  width: 24,
  fontSize: 18,
})
export const tableCellIcon: CSSProperties = {
  verticalAlign: 'middle',
  width: 24
}