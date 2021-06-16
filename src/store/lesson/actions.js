import {types} from './actionTypes';

const host ='https://vrar29.xyz/wp/wp-json/wp/v2';

export function fetchLessonList(id) {
   return async function fetchLessonListThunk (dispatch, getState) {
      const route  = `${host}/zanyatie?filter[meta_key]=kurs&filter[meta_value]=${id}&_fields=id,title`;
      let response = await fetch(route);
          response = await response.json();

      return dispatch({ type: types.FETCH, lessonList: response });

  }
}