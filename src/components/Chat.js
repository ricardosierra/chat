import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Button, List, ListItem, ListItemText, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
    root: {
        margin: '50px',
        padding: theme.spacing(3, 2),
    },
    flex: {
        display: 'flex',
        allignItem: 'center',
    },
    topicsWindow: {
        margin: '30%',
        height: '300px',
        borderRight: '1px solid grey',
    },
    chatWindow: {
        width: '70%',
        height: '300px',
    },
    chatBox: {
        margin: '85%',
    },
    button: {
        margin: '50px'
    },
}));

export default function Chat() {
    const classes = useStyles();

    const [textValue, changeTextValue] = React.useState('');

    return (
        <div>
            <Paper className={classes.root}>
                <Typography variant="h4" component="h4">
                    Chat
                </Typography>
                <Typography component="p">
                    Conversa
                </Typography>
                <div className={classes.topicsWindow}>
                    <List>
                        {
                            ['topic'].map(topic => (
                                <ListItem key={topic}>
                                    <ListItemText ></ListItemText>
                                </ListItem>
                            ))
                        }
                    </List>
                </div>
                <div className={classes.chatWindow}>
                    {
                        [{from: 'user', msg: 'hello'}].map((chat, i) => (
                            <div className={classes.flex} key= >
                                <Chip label={chat.from} className={classes.chip} />
                                <Typography variant='p'>{chat.msg}</Typography>
                            </div>
                        ))
                    }
                </div>
                <div className={classes.flex}>
                    <TextField
                        label="Send Message"
                        className={classes.chatBox}
                        value={textValue}
                        onChange={(e) => changeTextValue(e.target.value)}
                    />
                    <Button variant='contained' color='primary'>
                        Send
                    </Button>
                </div>
            </Paper>
        </div>
    );
}