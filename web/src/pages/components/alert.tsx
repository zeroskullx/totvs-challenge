import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            maxWidth: 480,
            margin: 'auto',
            padding: "3rem 1rem",
            '& > * + *': {
                marginTop: theme.spacing(2),
            },
        },
    }),
);

export default function Alerts() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Alert severity="error">
                <AlertTitle>Server Error</AlertTitle>
        Algo deu ruim com o servidor — <strong>Verifique por favor!</strong>
            </Alert>
        </div>
    );
}