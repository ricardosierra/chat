import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import 'normalize.css/normalize.css';
import '@blueprintjs/core/dist/blueprint.css';
// import { Select } from "@blueprintjs/labs";

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// WEBPACK FOOTER //
// ./src/index.js