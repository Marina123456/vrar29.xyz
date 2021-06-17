import {types} from './actionTypes';

const host ='https://vrar29.xyz/wp/wp-json/wp/v2';

export function fetchLessonList(idCourse) {
   return async function fetchLessonListThunk (dispatch, getState) {
      const route  = `${host}/zanyatie?filter[meta_key]=kurs&filter[meta_value]=${idCourse}&_fields=id,title&filter[order]=ASC`;
      let response = await fetch(route);
          response = await response.json();

      return dispatch({ type: types.FETCH, lessonList: response });

  }
}

export function fetchSubsectionList(idLesson) {
    return async function fetchSubsectionThunk (dispatch, getState) {
       const route  = `${host}/podrazdeli?filter[meta_key]=zanyatie&filter[meta_value]=${idLesson}&_fields=id,title,content&filter[order]=ASC`;
       let response = await fetch(route);
           response = await response.json();
 
       return dispatch({ 
             type: types.FETCH_SUBSECTION, 
             subsectionList: response,
             idLesson: idLesson 
            });
 
   }
 }

 export function fetchTaskList(idLesson) {
    return async function fetchTaskThunk (dispatch, getState) {
       const route  = `${host}/zadaniya?filter[meta_key]=zanyatie&filter[meta_value]=${idLesson}&_fields=id,title,content&filter[order]=ASC`;
       let response = await fetch(route);
           response = await response.json();
 
       return dispatch({ 
             type: types.FETCH_TASK, 
             taskList: response,
             idLesson: idLesson 
            });
 
   }
 }