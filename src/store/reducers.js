import { combineReducers } from 'redux';
import courseReducer from './course/reducer';
import lessonReducer from './lesson/reducer';

let reduce = combineReducers({course: courseReducer, lesson: lessonReducer});
export default reduce;