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
  alignItems: 'center',
  justifyContent: 'center',
  width: 'auto',
  maxWidth: 400,
  minWidth: 100,
  margin: 'auto'
}

export const helperText: CSSProperties = {
  position: 'fixed',
  top: 200,
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  color: '#fff'
}

export const closeIconStyle: CSSProperties = {
  position: 'fixed',
  top: 100,
  right: 250,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center'
}