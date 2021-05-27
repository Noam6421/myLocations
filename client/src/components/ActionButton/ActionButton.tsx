  
import React from 'react';
import { Button } from '@material-ui/core';

import useStyles from './ActionButtonStyles';

const ActionButton: React.FC<Props> = (props: Props): JSX.Element => {

    const { mode, action, text } = props;

    const classes = useStyles();

    return (
        <Button
            className={classes.actionButton}
            variant='contained'
            color='primary'
            onClick={() => {
                mode && mode();
                action();
            }}
        >
            {text}
        </Button>
    );
};

interface Props {
    mode?: () => void;
    action: () => void;
    text: string;
};

export default ActionButton;