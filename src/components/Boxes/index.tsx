import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { CSSProperties } from 'react';

// align text and icon center
export const TextIconBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});

export const FlexBox = styled(Box)({
  display: 'flex',
  alignItems: 'center'
});

export const FormBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});

export const FlexSpaceBet = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
});
export const CenterBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  width: '100%',
  justifyContent: 'center',
});
export const BlockBox = styled(Box)({
  display: 'block'
})

export const semiBoldText: CSSProperties = {
  fontFamily: '"IBMPlexSans-SemiBold", sans-serif',
}
export const mediumText: CSSProperties = {
  fontFamily: '"IBMPlexSans-Medium", sans-serif'
}

