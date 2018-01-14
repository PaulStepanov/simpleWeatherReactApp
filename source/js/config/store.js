import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'sagas';
import rootReducer from 'reducers';

// Creating store
export default () => {
  let store = null;
  let middleware = null;

  const sagaMiddleware = createSagaMiddleware();

  // In production we are adding only sagas middleware
  middleware = applyMiddleware(sagaMiddleware);

  // Enable DevTools if browser extension is installed
  if (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__) { // eslint-disable-line
    middleware = compose(
      middleware,
      window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line
    );

  }

  store = createStore(
    rootReducer,
    undefined,
    middleware
  );

  // Run root saga
  sagaMiddleware.run(rootSaga);

  // Enable Webpack hot module replacement for reducers
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index').default; // eslint-disable-line global-require
      store.replaceReducer(nextRootReducer);
    });
  }

  // Return store only
  // But as an object for consistency
  return {
    store,
  };
};
