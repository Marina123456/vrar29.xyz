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
        let selectedCourse={};
            selectedCourse = state.courseList.find( elem => elem.id==action.id );
        return Object.assign({}, state, {
            selectedCourse: selectedCourse
          });
      default:
        return state;
      }
}