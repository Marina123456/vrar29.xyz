import {types} from './actionTypes';

const host ='https://vrar29.xyz/wp/wp-json/wp/v2';

export function fetchCourseList() {
   return async function fetchCourseListThunk (dispatch, getState) {
      const route  = `${host}/kurs?_fields=id,title,acf&filter[order]=ASC&per_page=100`;
      let response = await fetch(route);
          response = await response.json();

      return dispatch({ type: types.FETCH, courseList: response });

  }
}

export function  selectCourse(id) {
    
    return async function fetchselectedCourseThunk (dispatch, getState) {
      const route  = `${host}/kurs/${id}?_fields=id,title,acf`;
      let response = await fetch(route);
          response = await response.json();

      return dispatch({ type: types.SELECT, selectedCourse: response });
  }
}