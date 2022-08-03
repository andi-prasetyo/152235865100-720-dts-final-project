import './App.css';

import NavBar from './components/Navbar';
import Profile from './container/Profile';
import Home from './container/Home';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return(
        <div className="App">
            <NavBar/>
            <Profile/>
            <Home/>
            <Footer/>
        </div>
    );
}

export default App;