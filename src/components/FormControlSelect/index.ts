import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const OtoFormControlSelect = styled(Box)({
  height: 45,
  maxHeight: 45,
  textTransform: 'none',
  '::first-letter': {
    textTransform: 'uppercase'
  }
});

export default OtoFormControlSelect;