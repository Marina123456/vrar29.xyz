import FirstPage from "./Page/FirstPage";
import CoursePage from "./Page/CoursePage";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {    
   
    return ( 
    
       <Router >
          <Switch>
              <Route exact  path={'/'} component={FirstPage} />
              <Route exact  path={'/:id'} component={CoursePage} />
               
          </Switch>
       </Router>
    
    );
}

export default App;