import React from 'react'

const CTX = React.createContext();

function reducer(state, action) {
    switch(action.type) {
        
    }
}

let socket;

function sendChatAction(value) {
    socket.init('chat message', value);
}

export default function Store(props) {

    const [allChats, dispatch] = React.useReducer(reducer, initState);

    if (!socket) {
        socket = io(':3001');
        socket.on('chat message', function(msg) {
            dispatch({type: 'RECEIVE_MESSAGE', payload: msg)})
        })
    }

    const user = 'user' + Math.random(100).toFixed(2);

    const reducerHook = REact.useReducer(reducer, initState);
    return (
        <CTX.Provider value={}>
            {props.children}
        </CTX.Provider>
    )
}