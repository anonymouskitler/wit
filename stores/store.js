import { createStore, applyMiddleware } from 'redux';
import data from '../reducers/reducer';
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  data,
  applyMiddleware(sagaMiddleware),
  global.reduxNativeDevTools ? global.reduxNativeDevTools(/*options*/) : noop => noop
)

if (global.reduxNativeDevTools) {
    global.reduxNativeDevTools.updateStore(store);
}
sagaMiddleware.run(rootSaga)

export default store