

import { ThemeProvider } from '@mui/material/styles';
import otosenseTheme from '../../shared/theme';
import * as React from 'react';
import { HeaderWrapper } from './styles';

interface IProps {
  children?: JSX.Element;
}

const Header = (props: IProps) => {

  return (
    <ThemeProvider theme={otosenseTheme}>
      <HeaderWrapper component="header">
        {props.children}
      </HeaderWrapper>
    </ThemeProvider>
  );
};

export default Header;
