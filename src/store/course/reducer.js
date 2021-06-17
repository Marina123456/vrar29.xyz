import {types} from './actionTypes';

export default function reduce(state = {}, action = {}) {
  switch (action.type) {
      case types.FETCH:
        if (action.courseList) {
            return Object.assign({}, state, {
                     courseList: action.courseList
                   });
        }
        return state;
      case types.SELECT:       
        if (action.selectedCourse) {
          return Object.assign({}, state, {
                  selectedCourse: action.selectedCourse
                 });
      }
      return state;
      default:
        return state;
      }
}