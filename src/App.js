import logo from './logo.svg';
import './App.css';
import Nav from './components/nav/Nav';
import Login from './components/login/Login';
import Footer from './components/footer/Footer';
import SignUp from './components/signup/Signup';
import RouteHandler from './components/router/RouteHandler';
import RegisterStudent from './components/dataform/RegisterStudent';

function App() {
  return (
    <div className="App">
        <Nav/>
        <RouteHandler/>
        <Footer/>
    </div>
  );
}

export default App;
