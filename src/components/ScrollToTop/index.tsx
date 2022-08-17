import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import otosenseTheme2022 from '../../shared/theme2022';

export const FloatingBtn = styled(Button)({
  width: 110,
  borderRadius: 23,
  position: 'fixed',
  right: '2rem',
  bottom: '1rem',
  height: 45,
  fontSize: 18,
  textTransform: 'none',
  '::first-letter': {
    textTransform: 'uppercase'
  },
  color: otosenseTheme2022.palette.secondary.contrastText,
  backgroundColor: '#fff',
  '&:hover': {
    backgroundColor: otosenseTheme2022.palette.secondary.main,
  },
});

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
    <>
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
    </>
  );
};

export default ScrollToTopBtn;
