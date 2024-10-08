import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import {store} from "./store";
import {fetchTodosAction} from "./store/api-actions";
import {Provider} from "react-redux";

store.dispatch(fetchTodosAction())

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>
);

