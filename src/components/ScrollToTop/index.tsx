import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Button from '@mui/material/Button';
import { styled, ThemeProvider } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import otosenseTheme from '../../shared/theme';

export const FloatingBtn = styled(Button)(({ theme }) => ({
  width: 98,
  paddingRight: 14,
  borderRadius: '1.5rem',
  position: 'fixed',
  right: '2rem',
  bottom: '1rem',
  paddingTop: 12,
  paddingBottom: 12,
  color: theme.palette.secondary.contrastText,
  backgroundColor: '#fff',
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
  },
}));

interface IProps {
  text: string;
}

const ScrollToTopBtn = (props: IProps) => {
  const [scrollHeight, setScrollHeight] = useState<number>(window.innerHeight);
  const { text } = props;
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    const maxHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );

    setScrollHeight(maxHeight);
  }, []);
  return (
    <ThemeProvider theme={otosenseTheme}>
      {scrollHeight > window.innerHeight && (
        <FloatingBtn
          variant="text"
          color="secondary"
          sx={{ boxShadow: 3 }}
          onClick={scrollToTop}
          disableElevation={false}
        >
          <ArrowUpwardIcon sx={{ mr: 0.2 }} />
          {text}
        </FloatingBtn>
      )}
    </ThemeProvider>
  );
};

export default ScrollToTopBtn;
