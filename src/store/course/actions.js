import {types} from './actionTypes';

const host ='https://vrar29.xyz/wp/wp-json/wp/v2';

export function fetchCourseList() {
   return async function fetchCourseListThunk (dispatch, getState) {
      const route  = `${host}/kurs?_fields=id,title,acf&filter[order]=ASC`;
      let response = await fetch(route);
          response = await response.json();

      return dispatch({ type: types.FETCH, courseList: response });

  }
}

export function  selectCourse(id) {
    return dispatch => { dispatch({ type: types.SELECT, id: id }); }
  }