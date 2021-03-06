import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Notfound from './components/Notfound/Notfound';
import Booking from './components/Booking/Booking/Booking';
import Login from './components/Login/Login/Login';
import Header from './components/Shared/Header/Header';
import AuthProvider from './context/AuthProvider';
import Footer from './components/Shared/Footer/Footer';
import About from './components/About/About';
import Facilities from './components/Facilities/Facilities';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Registration from './components/Login/Registration/Registration';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/facilities">
            <Facilities></Facilities>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/registration">
            <Registration></Registration>
          </Route>
          <PrivateRoute path="/booking/:serviceKey">
            <Booking></Booking>
          </PrivateRoute>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
            <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
