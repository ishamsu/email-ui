
import './App.css';
import "./utils/utility.css"
import { Provider } from 'react-redux'
import store from "./store/store.js";
import Home from './pages/home/home';


function App() {

  return (
    <Provider store={store}>
   <Home/>
    </Provider>

  );
}

export default App;
