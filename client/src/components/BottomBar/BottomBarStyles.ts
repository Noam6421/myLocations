import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme: Theme) => ({
    bottomBar: {
        top: 'auto',
        bottom: 0,
        backgroundColor: theme.palette.primary.light,
    },
    item: {
        textAlign: 'center'
    },
    navLink: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '1.7rem'
    }
}));

export default useStyles;