import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import reducer from './reducer';


const rootReducer = combineReducers({
  routing,
  reducer,
});

export default rootReducer;
