import FirstPage from "./Page/FirstPage";
import CoursePage from "./Page/CoursePage";
import LessonPage from "./Page/LessonPage";
import TaskPage from "./Page/TaskPage";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {    
   
    return ( 
    
       <Router >
          <Switch>
              <Route exact  path={'/'} component={FirstPage} />
              <Route path={'/:idCourse/lesson/:idLesson/:idSubsection'} component={LessonPage} />
              <Route path={'/:idCourse/task/:idLesson/:idTask'} component={TaskPage} />
              <Route path={'/:idCourse/lesson/:idLesson/'} component={LessonPage} />
              <Route path={'/:idCourse/task/:idLesson/'} component={TaskPage} />
              
              <Route path={'/:id'} component={CoursePage} />
           
          </Switch>
       </Router>
    
    );
}

export default App;