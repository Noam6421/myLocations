import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme: Theme) => ({
    appBar: {
        color: 'white',
        backgroundColor: theme.palette.primary.light,
        top: 0,
        bottom: 'auto',
    },
    title: {
        color: 'white',
        alignSelf: 'center'
    },
    menuItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        textDecoration: 'none',
    },
}));

export default useStyles;