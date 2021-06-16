import Header from "../Header";
import LessonList from '../Lesson/LessonList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLessonList } from '../store/lesson/actions';

import { selectCourse, fetchCourseList } from '../store/course/actions';
import { useEffect }from 'react';

function LessonPage(props) {
    const id=props.match.params.id;
    const dispatch = useDispatch();
    const course = useSelector(state=>state.course);//selectedCourse
    useEffect(() => {
        dispatch(fetchCourseList());
        dispatch(selectCourse(id));
        //<Header title={course.title.renderer} img={course.title}/>
   
      }, []);
    return (    
        <div>
          
          <LessonList />
          {console.log(course)}
       </div>
    
    );
}

export default LessonPage;