import { CSSProperties } from 'react';
// import React from 'react'
export const virtualInputWrapper: CSSProperties = {
  width: '100vw',
  backgroundColor: 'rgba(0, 0, 0, 0.9)',
  height: '100vh',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 3900,
};

export const virtualInputContainer: CSSProperties = {
  zIndex: 3950,
  padding: 1,
  background: '#fff',
  display: 'flex',
  position: 'relative',
  top: 100,
  alignItems: 'flex-end',
  justifyContent: 'center',
  width: 'auto',
  maxWidth: 400,
  minWidth: 100,
  margin: 'auto',
  flexDirection: 'column'
}

export const helperText: CSSProperties = {
  fontSize: 24,
  fontWeight: 500,
}

export const closeIconStyle: CSSProperties = {
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  marginBottom: 0.6,
}