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
    if (selectedLessonArr.lenght > 0) selectedLesson = selectedLessonArr[0];
    
    useEffect(() => {
        dispatch(fetchLessonList(idCourse));    
        dispatch(fetchSubsectionList(idLesson)); 
        dispatch(fetchTaskList(idLesson)); 
      }, []);
    return (    
        <div>
            Кнопки: Оглавление/Задания
          <Typography align="center" component="h2" variant="h2">
            {(selectedLesson.title.rendered) ? selectedLesson.title.rendered : null }
          </Typography>
          
          
          
          
       </div>
    
    );
}

export default LessonPage;