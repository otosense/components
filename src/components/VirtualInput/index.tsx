// import { CSSProperties } from 'react';
// import { styled } from '@mui/material/styles';
import React from 'react'
import { Box, Typography } from '@mui/material'
import { virtualInputWrapper, virtualInputContainer, closeIconStyle, helperText } from './styles';
import CloseIcon from '@mui/icons-material/Close';
import otosenseTheme2022 from '../../shared/theme2022'

interface IProps {
  touchScreenMode: boolean;
  moveUpStyle: boolean;
  children: JSX.Element;
  onClose: VoidFunction;
  text?: string;
}

const VirtualInputContainer = (props: IProps) => {
  const { text, touchScreenMode, moveUpStyle, children, onClose } = props;
  closeIconStyle.color = otosenseTheme2022.palette.primary.main;
  return(
    <>
    {touchScreenMode && moveUpStyle ?
    <Box sx={virtualInputWrapper}>
      <Box sx={virtualInputContainer}>
        <Box onClick={onClose} sx={closeIconStyle} >
        <CloseIcon sx={{width: 30, height: 30}} />
          {text &&
          <Typography component="span" sx={helperText}>{text}</Typography>
          }
        </Box>
        {children}
      </Box>
    </Box>
    :
    <Box>{children} </Box>
    }
    </>
    
  )
}

export default VirtualInputContainer


