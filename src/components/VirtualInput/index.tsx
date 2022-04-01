// import { CSSProperties } from 'react';
// import { styled } from '@mui/material/styles';
import React from 'react'
import { Box } from '@mui/material'
import { virtualInputWrapper, virtualInputContainer } from './styles';
import { closeIconStyle } from '../Icons';
import CloseIcon from '@mui/icons-material/Close';

interface IProps {
  touchScreenMode: boolean;
  moveUpStyle: boolean;
  children: JSX.Element;
  onClose: VoidFunction;
}

const VirtualInputContainer = (props: IProps) => {
  const { touchScreenMode, moveUpStyle, children, onClose } = props;
  // const styleWrapper = touchScreenMode && moveUpStyle ? virtualInputWrapper : {};
  // const styleContainer = touchScreenMode && moveUpStyle ? virtualInputContainer : {};
  return(
    <>
    {touchScreenMode && moveUpStyle ?
    <Box sx={virtualInputWrapper}>
      <Box sx={virtualInputContainer}>
      <CloseIcon onClick={onClose} sx={closeIconStyle} />
        {children}
      </Box>
    </Box>
    :
    <Box>{children} </Box>
    }
    </>
    
    // <Box sx={virtualInputWrapper}>
    //   <Box sx={virtualInputContainer}>
    //   <CloseIcon onClick={onClose} sx={closeIconStyle} />
    //     {children}
    //   </Box>
    // </Box>
  )
}

export default VirtualInputContainer


