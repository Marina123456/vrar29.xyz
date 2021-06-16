import {types} from './actionTypes';

export default function reduce(state = {}, action = {}) {
  switch (action.type) {
      case types.FETCH:
        if (action.lessonList) {
            return Object.assign({}, state, {
                     lessonList: action.lessonList
                   });
        }
        return state;
      default:
        return state;
      }
}