// 여러개의 reducer를 하나로 합치는 일
import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import isDataReducer from './isDataReducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    isData: isDataReducer,
})

export default rootReducer;