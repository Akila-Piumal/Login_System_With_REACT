import logo from './logo.svg';
import './App.css';
import Nav from './components/nav/Nav';
import Login from './components/login/Login';
import Footer from './components/footer/Footer';
import SignUp from './components/signup/Signup';

function App() {
  return (
    <div className="App">
        <Nav/>
        <Login/>
        <Footer/>
        {/* <SignUp/> */}
    </div>
  );
}

export default App;
