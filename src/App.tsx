import { Provider } from 'react-redux'
import './App.css'
import Home from './container/home/Home'
import store from './store'
import {
  BrowserRouter as Router,
} from 'react-router-dom'

function App() {
  return (
    <Provider store={store}>
      <Router>        
        <div>
            <Home />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
