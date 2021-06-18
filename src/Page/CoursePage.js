import LessonList from '../Lesson/LessonList';
import { useDispatch, useSelector } from 'react-redux';
import { selectCourse } from '../store/course/actions';
import Typography  from '@material-ui/core/Typography';
import { useEffect }from 'react';

function CoursePage(props) {
    const id=props.match.params.id;
    const dispatch = useDispatch();
    const selectedCourse = useSelector(state=>state.course.selectedCourse);
    useEffect(() => {
        dispatch(selectCourse(id));    
          
      }, []);
    return (    
        <div>
          <Typography align="center" component="h2" variant="h2">
            { (selectedCourse) ? selectedCourse.title.rendered : null}
          </Typography>
          <Typography  component="p" variant="h4">
            Оглавление
          </Typography>
          <LessonList idCourse={id}/>
          
          
       </div>
    
    );
}

export default CoursePage;