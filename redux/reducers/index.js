import {combineReducers} from 'redux';
import newsReducer, { detailReducer } from './newsReducer';

const allReducers = combineReducers({
    news: newsReducer,
    detail: detailReducer
});

export default allReducers;
