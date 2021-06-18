import Lesson from '../Lesson/Lesson';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLessonList, fetchSubsectionList, fetchTaskList } from '../store/lesson/actions';

import Typography  from '@material-ui/core/Typography';
import { useEffect }from 'react';

function LessonPage(props) {
    const idLesson=props.match.params.idLesson;
    const idCourse=props.match.params.idCourse;
    const dispatch = useDispatch();
    const lessonList = useSelector(state=>state.lesson.lessonList);

    let selectedLessonArr = lessonList.filter(item => item.id == idLesson );
    let selectedLesson = {};
    if (selectedLessonArr.length > 0) selectedLesson = selectedLessonArr[0];
    
    useEffect(() => {
        dispatch(fetchLessonList(idCourse));    
        dispatch(fetchSubsectionList(idLesson)); 
        dispatch(fetchTaskList(idLesson)); 
      }, []);
      //(selectedLesson.title.rendered) ? selectedLesson.title.rendered : null <div dangerouslySetInnerHTML={{__html:selectedLesson.title.rendered }} />
    return (    
        <div>
          <a href={"\\"+idCourse}>К оглавлению</a>
          
          {console.log(selectedLesson)}
          {(selectedLesson.title)? (<Lesson selectedLesson={selectedLesson} />) : (<p></p>) }
          
         
            
          
          
          
          
          
       </div>
    
    );
}

export default LessonPage;