import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import createSagaMiddleware, { END } from 'redux-saga';
import sagas from '../sagas';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';

function configureStore(initialState) {
  const rootSagas = [
    sagas,
  ];
  const sagaMiddleWare = createSagaMiddleware();
  const routerMiddleWare = routerMiddleware(browserHistory);
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(sagaMiddleWare),
      applyMiddleware(routerMiddleWare),
      window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  store.runSaga = sagaMiddleWare.run(...rootSagas);
  store.close = () => store.dispatch(END);
  return store;
}

export default configureStore;
