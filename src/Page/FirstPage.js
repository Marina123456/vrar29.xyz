import Header from "../Header";
import CourseList from '../Course/CourseList';


function FirstPage() {
    
    return ( 
   
        <div>
          <Header img="medium-shot-woman-with-vr-glasses.jpg" title="База знаний<br/>VR/AR" />
          <CourseList />
       </div>
    
    );
}

export default FirstPage;