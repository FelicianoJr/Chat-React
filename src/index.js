import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './scenes/Home';
import registerServiceWorker from './registerServiceWorker';
import "bootstrap/dist/css/bootstrap.css";
import reducer from "./reducers/messages"
import { createStore, compose } from "redux";
import { Provider } from "react-redux";

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();


const store = createStore(reducer,compose(reduxDevTools))

ReactDOM.render(<Provider store={store}><Home /></Provider>, document.getElementById('root'));
registerServiceWorker();
