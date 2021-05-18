import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Register from './Registration'
import Login from './Login'

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login}></Route>
      <Route path="/register" component={Register}></Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
