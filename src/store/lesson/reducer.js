import {types} from './actionTypes';

export default function reduce(state = {}, action = {}) {
  switch (action.type) {
      case types.FETCH:
        if (action.lessonList) {
          let newLessonList = [];
          newLessonList= action.lessonList.map(oldLesson=>{ 
            let newLesson = Object.assign({}, oldLesson);
            newLesson.subsectionList = [];
            newLesson.taskList = [];
            return newLesson;
          });
          return Object.assign({}, state, {
                     lessonList: newLessonList

                   });
        }
        return state;
      case types.FETCH_SUBSECTION:
          if (action.subsectionList) {
              console.log(action.idLesson);
              let newLessonList = [];
              newLessonList=state.lessonList.map(oldLesson=>{
                if (oldLesson.id==action.idLesson) {
                  let newLesson = Object.assign({}, oldLesson);
                  newLesson.subsectionList = action.subsectionList;
                  return newLesson;
                } 
                return oldLesson;
              });
              return Object.assign({}, state, {
                      lessonList: newLessonList
                     });
          }
          return state;
          case types.FETCH_TASK:
             if (action.taskList) {
              
              let newLessonList = [];
              newLessonList=state.lessonList.map(oldLesson=>{
                if (oldLesson.id==action.idLesson) {
                  let newLesson = Object.assign({}, oldLesson);
                  newLesson.taskList = action.taskList;
                  return newLesson;
                } 
                return oldLesson;
              });
              return Object.assign({}, state, {
                      lessonList: newLessonList
                     });
          }
          return state;         
      default:
        return state;
      }
}