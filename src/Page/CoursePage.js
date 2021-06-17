import Header from "../Header";
import LessonList from '../Lesson/LessonList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLessonList } from '../store/lesson/actions';

import { selectCourse } from '../store/course/actions';
import Typography  from '@material-ui/core/Typography';
import { useEffect }from 'react';

function CoursePage(props) {
    const id=props.match.params.id;
    const dispatch = useDispatch();
    const courseList = useSelector(state=>state.course.courseList);
    const selectedCourse = useSelector(state=>state.course.selectedCourse);
    useEffect(() => {
        dispatch(selectCourse(id));    
          
      }, []);
    return (    
        <div>
          <Typography align="center" component="h2" variant="h2">
            {selectedCourse.title.rendered}
          </Typography>
          <Typography  component="p" variant="h4">
            Оглавление
          </Typography>
          <LessonList idCourse={id}/>
          
          
       </div>
    
    );
}

export default CoursePage;