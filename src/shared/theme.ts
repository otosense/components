// Theme goes here
import { ThemeOptions } from '@mui/material';
import ibmPlexSansMedium from '../assets/IBMPlexSans-Medium.ttf';
import ibmPlexSansRegular from '../assets/IBMPlexSans-Regular.ttf';
import ibmPlexSansSemiBold from '../assets/IBMPlexSans-SemiBold.ttf';
import ibmPlexSansBold from '../assets/IBMPlexSans-Bold.ttf'
import openSansRegular from '../assets/OpenSans-Regular.ttf';
import { createTheme } from '@mui/material/styles';
declare module '@mui/material/Button' {
  // interface ButtonPropsVariantOverrides {
  //   cancel: true;
  //   critical: true;
  //   header: true;
  // }
  interface ButtonPropsColorOverrides {
    cancel: true;
    critical: true;
    // header: true;
  }
}
declare module '@mui/material/styles' {
  interface Palette {
    cancel: Palette['primary'];
    critical: Palette['primary'];
    gray: Palette['primary'];
  }

  interface PaletteOptions {
    cancel: PaletteOptions['primary'];
    critical: PaletteOptions['primary'];
    gray: PaletteOptions['primary'];
  }
}

const otosenseTheme: ThemeOptions = createTheme({
  palette: {
    primary: {
      main: '#009fbd',
      // dark: '#101820',
      contrastText: '#fff',
    },
    secondary: {
      main: '#CBD4EB',
      contrastText: '#003965',
      dark: '#A1B4DC',
      light: '#fff',
    },
    cancel: {
      main: '#C6D6DA',
      light: '#fff',
      dark: '#9CB3B9',
      contrastText: '#146474',
    },
    critical: {
      main: '#CC4734',
      contrastText: '#fff',
      light: '#E9D0D9',
      dark: '#8C2026',
    },
    gray: {
      main: '#767989',
      contrastText: '#fff',
      light: '#E0E1E7',
      dark: '#000',
    },
    error: {
      main: '#CC4734',
      contrastText: '#fff',
      dark: '#CC4734',
    },
    warning: {
      main: '#fff847',
    },
    info: {
      main: '#47afff',
    },
    success: {
      main: '#1db381',
    },
    background: {
      paper: '#fff',
      default: '',
    },
    text: {
      primary: '#101820',
      secondary: '#767989',
      disabled: '#BDBFCA',
    },
  },
  typography: {
    htmlFontSize: 16,
    h1: {
      fontFamily: '"IBMPlexSans-SemiBold", sans-serif',
      fontSize: 32,
      lineHeight: '40px',
      // letterSpacing: '',
    },
    h2: {
      fontFamily: '"IBMPlexSans-Regular", sans-serif',
      fontSize: 24,
      lineHeight: '32px',
      textTransform: 'capitalize',
      // letterSpacing: '',
    },
    h3: {
      'fontFamily': '"IBMPlexSans-Regular", sans-serif',
      'fontSize': 20,
      'lineHeight': '24px',
      '@media (min-width:600px)': {
        fontSize: '1.5rem',
      },
      // letterSpacing: '',
    },
    h4: {
      fontFamily: '"IBMPlexSans-Regular", sans-serif',
      fontSize: 18,
      lineHeight: '24px',
    },
    body1: {
      fontFamily: '"IBMPlexSans-Regular", sans-serif',
      fontSize: 16,
      lineHeight: '',
      letterSpacing: '',
    },
    button: {
      fontFamily: '"IBMPlexSans-SemiBold", sans-serif',
      fontSize: 14,
      // lineHeight: '',
      // letterSpacing: '',
    },
  },
  shape: {
    borderRadius: 0,
  },
  spacing: 24,
  components: {
    MuiCssBaseline: {
      styleOverrides: `
            @font-face {
              font-family: 'IBMPlexSans-Regular';
              font-style: normal;
              font-display: swap;
              font-weight: 400;
              src: local('IBMPlexSans-Regular'), local('IBMPlexSans-Regular'), url(${ibmPlexSansRegular}) format('truetype');
              unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
            },
            @font-face {
              font-family: 'IBMPlexSans-Medium';
              font-style: normal;
              font-display: swap;
              font-weight: 400;
              src: local('IBMPlexSans-Medium'), local('IBMPlexSans-Medium'), url(${ibmPlexSansMedium}) format('truetype');
              unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
            },
            @font-face {
              font-family: 'IBMPlexSans-SemiBold';
              font-style: normal;
              font-display: swap;
              font-weight: 400;
              src: local('IBMPlexSans-SemiBold'), local('IBMPlexSans-SemiBold'), url(${ibmPlexSansSemiBold}) format('truetype');
              unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
            },
            @font-face {
              font-family: 'IBMPlexSans-Bold';
              font-style: normal;
              font-display: swap;
              font-weight: 400;
              src: local('IBMPlexSans-SemiBold'), local('IBMPlexSans-SemiBold'), url(${ibmPlexSansBold}) format('truetype');
              unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
            },
            @font-face {
              font-family: 'OpenSans-Regular';
              font-style: normal;
              font-display: swap;
              font-weight: 400;
              src: local('OpenSans-Regular'), url(${openSansRegular}) format('truetype');
              unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
            }
          `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
          width: 'auto',
        },
      },
      defaultProps: {
        variant: 'contained',
        disableElevation: true,
        // disableRipple: true,
      },
      variants: [
        {
          props: {variant: 'contained', size: 'large'},
          style: {
            fontSize: 20,
            minHeight: 60,
            lineHeight: 1.5,
            letterSpacing: 2,
            minWidth: 140,
          },
        }, {
          props: {variant: 'contained', size: 'medium'},
          style: {
            fontSize: 14,
            minHeight: 40,
            minWidth: 100,
          },
        }, {
          props: {variant: 'outlined', size: 'medium', color: 'primary'},
          style: {
            border: '2px solid #009fbd',
            fontSize: 14,
            minHeight: 40,
            minWidth: 100,
          },
        },
      ],
    },
    MuiFormControl: {
      variants: [
        {
          props: {variant: 'filled', size: 'medium'},
          style: {marginRight: 22, marginBottom: 25, width: 315},
        },
      ],
    },
    MuiTextField: {
      defaultProps: {
        variant: 'standard',
      },
    },
    MuiTypography: {
      variants: [
        {
          props: {variant: 'overline'},
          style: {textTransform: 'capitalize', marginBottom: '7px', lineHeight: 'initial', fontSize: '14px'},
        },
      ],
      defaultProps: {
        variantMapping: {
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          h5: 'h5',
          h6: 'h6',
          subtitle1: 'h2',
          subtitle2: 'span',
          body1: 'span',
          body2: 'p',
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
          fontFamily: '"OpenSans-Regular", sans-serif',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
          fontFamily: '"OpenSans-Regular", sans-serif',
          fontSize: 18,
          color: '#101820',
          paddingLeft: 0,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: 424,
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          'paddingLeft': '1rem',
          'paddingRight': '1rem',
          'textTransform': 'capitalize',
          'backgroundColor': '#f3f3f3',
          '&:hover': {
            backgroundColor: '#fff',
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: '1rem',
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          fontFamily: '"IBMPlexSans-Regular", sans-serif'
        },
      }
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          color: '#767989'
        }
      }
    }
  },
});
export default otosenseTheme;

