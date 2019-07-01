import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

export default function Chat() {
    const classes = useStyles();

    return (
        <div>
        <Paper className={classes.root}>
            <Typography variant="h4" component="h4">
                Chat
            </Typography>
            <Typography component="p">
                Conversa
            </Typography>
        </Paper>
        </div>
    );
}