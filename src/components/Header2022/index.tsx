import { ThemeProvider } from '@mui/material/styles';
import otosenseTheme2022 from '../../shared/theme2022';
import React from 'react';
import { HeaderWrapper } from './styles';

interface IProps {
  children?: JSX.Element;
}

const Header = (props: IProps) => {
  return (
    <ThemeProvider theme={otosenseTheme2022}>
      <HeaderWrapper component="header">{props.children}</HeaderWrapper>
    </ThemeProvider>
  );
};

export default Header;
