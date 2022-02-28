import Tab from '@mui/material/Tab';
import { styled } from '@mui/material/styles';
import React from 'react';
import otosenseTheme2022 from '../../shared/theme2022';

interface StyledTabProps {
  label: string;
}

const NavTabL = styled((props: StyledTabProps) => <Tab {...props} />)({
    textTransform: 'capitalize',
    minWidth: 100,
    maxWidth: 'none',
    [otosenseTheme2022.breakpoints.up('sm')]: {
      minWidth: 0,
    },
    borderBottom: '4px solid ' + otosenseTheme2022.palette.text.disabled,
    fontSize: 32,
    fontWeight: otosenseTheme2022.typography.fontWeightRegular,
    marginRight: otosenseTheme2022.spacing(1),
    color: otosenseTheme2022.palette.text.disabled,
    paddingRight: 16,
    paddingLeft: 0,
    paddingTop: 16,
    paddingBottom: 6,
    fontFamily: [
      'IBMPlexSans-Medium',
      'sans-serif',
    ].join(','),
    '&:hover': {
      color: otosenseTheme2022.palette.text.secondary,
      borderColor: otosenseTheme2022.palette.text.secondary,
    },
    '&.Mui-selected': {
      color: otosenseTheme2022.palette.text.primary,
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#d1eaff',
    },
  });

export default NavTabL;