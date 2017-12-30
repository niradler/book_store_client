import React from 'react';
import ReactDOM from 'react-dom';
import 'material-components-web/dist/material-components-web.css'
import 'flexboxgrid/dist/flexboxgrid.min.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
<BrowserRouter basename="/book_store_client">
    <App />
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
