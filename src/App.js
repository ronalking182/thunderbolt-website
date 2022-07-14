import './App.css';
import Nav from './components/Navbar/Nav';
import Footer from './components/Footer/Footer';

import { BrowserRouter as Router,} from "react-router-dom";
import AnimatedRoute from './pages/AnimatedRoute';

function App() {
  return (
    <div className="App">
    <Router>
      <Nav/>
        <AnimatedRoute/>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
