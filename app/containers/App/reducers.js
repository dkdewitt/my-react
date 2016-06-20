
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import {sample} from '../Sample/reducers';

const rootReducer = combineReducers({
	sample,
	routing: routerReducer
})


export default rootReducer;


