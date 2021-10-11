import {BrowserRouter as Router , Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import News from "./pages/News";
import Login from "./pages/Login";
import Header from "./componets/Header";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {login} from "./redux/actions/userActions";
import PrivatRoute from "./componets/PrivatRoute";

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        if(localStorage.getItem('user')) {
dispatch(login())
        }
    })
  return (
    <Router  >
        <Header/>
<PrivatRoute exact path='/' component={Dashboard}/>
<PrivatRoute exact path='/news' component={News}/>
<Route exact path='/login' component={Login}/>
    </Router>
  );
}

export default App;
