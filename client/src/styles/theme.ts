import { createMuiTheme } from '@material-ui/core/styles';

export const primaryBackgroundColor = '#F3F6FB';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: 'rgb(134,166,223)',
            main: 'rgb(78, 112, 122)',
            dark: 'rgb(51,80,124)',
            contrastText: '#fff',
        },
        secondary: {
            light: 'rgb(212, 195, 253)',
            main: 'rgb(185, 168, 245)',
            dark: 'rgb(140, 113, 238)',
            contrastText: '#fff',
        },
        error: {
            light: 'rgb(251, 143, 143)',
            main: 'rgb(249, 89, 89)',
            dark: 'rgb(203, 7, 7)',
            contrastText: '#fff',
        },
        success: {
            light: 'rgb(174, 251, 160)',
            main: 'rgb(154, 237, 154)',
            dark: 'rgb(135, 213, 140)',
            contrastText: '#fff',
        },
        warning: {
            light: 'rgb(244, 242, 150)',
            main: 'rgb(238, 235, 85)',
            dark: 'rgb(232, 227, 24)',
            contrastText: '#fff',
        },
        text: {
            primary: 'rgb(74, 74, 74)'
        },
    },
    typography: {
        fontSize: 16,
        fontFamily: 'Assistant',
        fontWeightRegular: 400,
        fontWeightMedium: 500,
    },
    overrides: {
        MuiOutlinedInput: {
            inputMarginDense: {
                paddingTop: 6.5,
                paddingBottom: 6.5
            }
        },
        MuiInputBase: {
            root: {
                fontSize: '16px',
                minHeight: '40px'
            }
        },
        MuiTypography: {
            body1: {
                fontWeight: 500,
                fontSize: '16px',
            },
        },
        MuiGrid: {
            'spacing-xs-2': {
                width: '100%'
            },
          },
    },
    props: {
        MuiTextField: {
            variant: 'outlined',
            size: 'small'
        },
        MuiFormControl: {
            size: 'small',
            variant: 'outlined'
        },
    }
});

export default theme;