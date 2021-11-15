import {combinedReducers} from 'redux';
import isLogged from './isLogged';
const myReducers = combinedReducers({
     isLogged
})
export default myReducers;