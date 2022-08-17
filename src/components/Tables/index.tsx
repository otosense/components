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
  padding: '6px 16px',
  fontSize: 18,
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
export const tableCellHead: CSSProperties | {[key: string]: CSSProperties} = {
  background: '#fff',
  '::first-letter': {
    textTransform: 'uppercase',
  }
}
export const TableCellHead = styled(TableCell)({
  background: '#fff',
  textTransform: 'none',
  '::first-letter': {
    textTransform: 'uppercase',
  },
})
