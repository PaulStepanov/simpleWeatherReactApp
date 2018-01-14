import 'babel-polyfill';
import 'isomorphic-fetch';

import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';

import configureStore from 'config/store';

// Load CSS
import 'index.css';
import {WeatherApp} from "./containers/WeatherApp";
import {BrowserRouter} from "react-router-dom";

const store = configureStore().store;

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <BrowserRouter>
        <WeatherApp/>
      </BrowserRouter>
    </Provider>
  </AppContainer>,
  document.getElementById('root')
);
