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
export const FlexBoxBaseline = styled(Box)({
  display: 'flex',
  alignItems: 'baseline'
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

export const TextLink = styled(Box)(({theme}) => ({
  color: theme.palette.primary.main,
  textDecoration: 'underline',
  cursor: 'pointer'
}));

export const Capital = styled(Box)({
  textTransform: 'capitalize'
});


export const UlNoM = styled('ul')({
  margin: 0,
});

export const Box135 = styled(Box)({
  textTransform: 'capitalize',
  width: 135,
  minWidth: 135,
  fontFamily: '"IBMPlexSans-Regular", sans-serif'
});
export const Box140 = styled(Box)({
  textTransform: 'capitalize',
  width: 140,
  minWidth: 140,
  fontFamily: '"IBMPlexSans-Regular", sans-serif'
});
export const Box125 = styled(Box)({
  textTransform: 'capitalize',
  width: 125,
  minWidth: 125,
  fontFamily: '"IBMPlexSans-Regular", sans-serif'
});
export const TitleBox70 = styled(Box)({
  textTransform: 'capitalize',
  display: 'inline-block',
  width: 70,
});
export const Box150 = styled(Box)({
  width: 150,
  display: 'inline-block',
  textTransform: 'capitalize'
});