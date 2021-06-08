import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme: Theme) => ({
    categoriesSection: {
        padding: '20px 40px',
        paddingBottom: '60px'
    },
    categoryTitle: {
        paddingBottom: '10px',
        color: theme.palette.primary.dark,
    },
    categoryCard: {
        color: 'white',
        maxWidth: 300,
        margin: 'auto',
        transition: '0.3s',
        padding: '10px',
        boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
    },
    categoryUnSelectedCard:{
        backgroundColor: theme.palette.primary.dark,
    },
    categoryCardSelected: {
        boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)',
        backgroundColor: theme.palette.primary.main,
    },
}));

export default useStyles;