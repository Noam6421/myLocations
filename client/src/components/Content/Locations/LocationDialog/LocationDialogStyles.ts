import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme: Theme) => ({
    dialogContent: {
        width: '550px'
    },
    locationMap: {
        height: '40vh', 
        width: '500px',
        marginTop: '15px'
    },
    subTitle: {
        marginTop: '15px'
    }
}));

export default useStyles;