import Contact from './Contact.js';
import './App.css';
import Footer from './Footer.js';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
        <Contact />  
        <Footer />
    </div>
    </Router>
  );
}

export default App;
