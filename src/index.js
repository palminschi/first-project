import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './state/redux'




 let rerender = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>, document.getElementById('root')
  );
}

rerender(store.getState());
store.subscribe(rerender);


serviceWorker.unregister();