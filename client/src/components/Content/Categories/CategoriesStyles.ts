import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme: Theme) => ({
    categoriesSection: {
        padding: '20px 40px',
    },
    categoryCard: {
        color: 'white',
        backgroundColor: theme.palette.primary.light,
        maxWidth: 300,
        margin: 'auto',
        transition: '0.3s',
        boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
    },
    categoryCardSelected: {
        boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)',
        backgroundColor: theme.palette.primary.main,
    },
    categoryLink: {
        textDecoration: 'none',
    },
}));

export default useStyles;