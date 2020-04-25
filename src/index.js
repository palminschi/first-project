import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store'




 let rerender = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App dispatch={store.dispatch.bind(store)} store={store} state={state}/>
    </React.StrictMode>, document.getElementById('root')
  );
}

rerender(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerender(state);
});


serviceWorker.unregister();