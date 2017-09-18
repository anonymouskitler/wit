import { createStore, applyMiddleware, combineReducers } from 'redux';
import data from '../reducers/reducer';
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas/rootSaga'
import { reducer as formReducer } from 'redux-form'
const rootReducer = combineReducers({
  // ...your other reducers here
  // you have to pass formReducer under 'form' key,
  // for custom keys look up the docs for 'getFormState'
  data: data,
  form: formReducer
})

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware),
  global.reduxNativeDevTools ? global.reduxNativeDevTools(/*options*/) : noop => noop
)

if (global.reduxNativeDevTools) {
    global.reduxNativeDevTools.updateStore(store);
}
sagaMiddleware.run(rootSaga)

export default store
