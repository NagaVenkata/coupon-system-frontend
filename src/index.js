import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider as ReduxProvider } from "react-redux";
import {store} from "./store/store";


// import './index.css';
import * as serviceWorker from './serviceWorker';
//const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

ReactDOM.render(
    <ReduxProvider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ReduxProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//Row 13 -> Above App.js level, we have access to "subscribe"/get the changes + send dispatches/actions to our reducers 
