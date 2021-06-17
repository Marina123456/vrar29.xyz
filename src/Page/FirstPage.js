import Header from "../Header";
import CourseList from '../Course/CourseList';
import { useEffect }from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourseList } from '../store/course/actions';

function FirstPage() {
    const dispatch = useDispatch();
    const course_list = useSelector(state=>state.course.courseList);
    useEffect(() => {
        if (course_list.length===0)
           dispatch(fetchCourseList());    
   
      }, []);
    return ( 
   
        <div>
          <Header img="medium-shot-woman-with-vr-glasses.jpg" title="База знаний<br/>VR/AR" />
          <CourseList />
       </div>
    
    );
}

export default FirstPage;