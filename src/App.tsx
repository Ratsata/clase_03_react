import { Provider } from 'react-redux'
import './App.css'
import Home from './container/home/Home'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div>
        <Home />
      </div>
    </Provider>
  );
}

export default App;
