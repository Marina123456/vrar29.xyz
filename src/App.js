import Site from "./Site";

import { Provider } from 'react-redux';
import store from './store/store';


function App() {
    
    
    return ( 
    <Provider store={store}>
       <Site />
    </Provider>
    );
}

export default App;