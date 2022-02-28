import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import otosenseTheme2022 from '../../shared/theme2022';


export const MainWrapper = styled(Box)({
  width: '100vw',
  height: '100vh',
  backgroundColor: otosenseTheme2022.palette.background.default,
  maxHeight: '100vh',
  overflowY: 'hidden'
});
export const MainContainer = styled(Box) ({
  margin: 0,
  padding: '0 48px',
  backgroundColor: otosenseTheme2022.palette.background.default,
  height: 'calc(100vh - 80px)',
  [otosenseTheme2022.breakpoints.up('xl')]: {
    height: 'calc(100vh - 100px)',
  },
  [otosenseTheme2022.breakpoints.down('lg')]: {
    height: 'calc(100vh - 60px)',
  },
});

export const MainBody = styled(Box) ({
  paddingRight: 24,
  paddingLeft: 24,
  paddingTop: 24,
  backgroundColor: otosenseTheme2022.palette.background.paper,
  marginTop: 8,
  minHeight: '100%',
  height: 'auto',
  [otosenseTheme2022.breakpoints.up('md')]: {
    marginTop: 16,
  },
});



export const FormControlSelect = styled(Box)({
  height: 45,
  maxHeight: 45,
  textTransform: 'capitalize'
});

