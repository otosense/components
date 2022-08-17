import Tab from '@mui/material/Tab';
import { styled } from '@mui/material/styles';
import React from 'react';
import otosenseTheme2022 from '../../shared/theme2022';

interface StyledTabProps {
  label: string;
  icon?: JSX.Element;
  iconPosition?: any;
  key?: string;
}

const TabForTable = styled((props: StyledTabProps) => <Tab {...props} />)({
    textTransform: 'none',
    '::first-letter': {
      textTransform: 'uppercase',
    },
    minWidth: 100,
    [otosenseTheme2022.breakpoints.up('sm')]: {
      minWidth: 0,
    },
    borderBottom: '4px solid ' + otosenseTheme2022.palette.text.disabled,
    fontSize: 20,
    fontWeight: otosenseTheme2022.typography.fontWeightRegular,
    // marginRight: otosenseTheme2022.spacing(1),
    color: otosenseTheme2022.palette.text.primary,
    paddingRight: 16,
    paddingLeft: 16,
    paddingTop: 12,
    paddingBottom: 6,
    minHeight: 40,
    fontFamily: [
      'IBMPlexSans-Medium',
      'sans-serif',
    ].join(','),
    '&:hover': {
      color: otosenseTheme2022.palette.text.secondary,
      borderColor: otosenseTheme2022.palette.text.secondary,
    },
    '&.Mui-selected': {
      backgroundColor: 'rgba(0, 159, 189, 0.05)',
      color: otosenseTheme2022.palette.text.primary,
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#d1eaff',
    },
  });

export default TabForTable;