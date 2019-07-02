LIVE CHAT
===================


# About

Chat using socket.io and react hooks

# Install

## Ubuntu

```

nvm use stable && 
npm install && 
cd app && npm install && cd ../
```

## Iniciar

```bash
npm run server
```


# Stack

- Front-end: React (preferencialmente), VueJS ou VanillaJS 

- Back-end: Node.js

    Será desenvolvido uma aplicação web que seja capaz de funcionar como um chat aberto.

    Para participar da sala, o usuário precisa inserir uma identificação (nome ou nickname).

    Ao entrar na sala do chat, exibir a lista de mensagens enviadas. As mensagens deverão ser ordenadas por data de envio e de forma crescente.

    Durante a conversa, o usuário deverá visualizar novas mensagens enviadas e também ser alertado quando um usuário entrar/ou sair da conversa.

    O usuário poderá enviar novas mensagens e também sair da conversa.


Serão vários chats, onde quem tem o link da sala consegue entrar e conversar seguindo as mesmas regras descritas acima. Os vários chats seriam criadas automaticamente quando o primeiro usuário acessar uma url inexistente. Ou seja, cada chat representa uma url na aplicação.

    Exemplo:

        http://localhost:3000/ - chat principal
        http://localhost:3000/nova-sala - Outro chat


