import FirstPage from "./Page/FirstPage";
import LessonPage from "./Page/LessonPage";
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
    
    return ( 
    <Provider store={store}>
       <Router >
          <Switch>
              <Route exact  path={'/'} component={FirstPage} />
              <Route exact  path={'/:id'} component={LessonPage} />
               
          </Switch>
       </Router>
    </Provider>
    );
}

export default App;