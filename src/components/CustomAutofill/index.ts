import { CSSProperties } from 'react';

export const saveBtnStyle: CSSProperties = {
  minWidth: 100,
  height: 45,
  backgroundColor: '#009fbd',
  border: 'none',
  borderRadius: 0,
  fontFamily: '"IBMPlexSans-SemiBold", sans-serif',
  fontSize: 16,
  lineHeight: 1,
  letterSpacing: 1,
  color: 'white',
  textTransform: 'capitalize' as const,
};

export const commentStyle: CSSProperties = {
  width: '100%',
  borderRadius: 0,
  background: '#f3f3f3',
  borderTop: 0,
  borderRight: 0,
  borderLeft: 0,
  fontSize: 20,
  height: 48,
  borderBottom: '1px solid rgba(0, 0, 0, 0.42)',
  maxHeight: 100
};