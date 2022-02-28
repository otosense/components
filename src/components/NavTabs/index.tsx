import Tabs from '@mui/material/Tabs';
import { styled } from '@mui/material/styles';
import React from 'react';
import otosenseTheme2022 from '../../shared/theme2022';

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const NavTabs = styled((props: StyledTabsProps) =>
  (<Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />)
)({
  minHeight: 45,
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: otosenseTheme2022.palette.primary.main,
    height: 4,
  },
  '& .MuiTabs-indicatorSpan': {
    width: '100%',
    backgroundColor: otosenseTheme2022.palette.primary.main,
  },
});

export default NavTabs;