//import reducers from '<project-path>/reducers'
import {sample} from '../Sample/reducers';
// Add the reducer to your store on the `routing` key
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
  const rootReducer = combineReducers({
    sample,
    routing: routerReducer
  })


export default rootReducer;


