
import './App.css';
import Navbar from './components/Navbar';
import Grouptwo from './components/Grouptwo';
import Footer from './components/Footer';
import New from './components/New';

function App() {
  return (
    <div className="App">
     

     <Navbar />
     <Grouptwo />
     <Footer />
     <New name="kofi" age="25" days="monday to friday" />
    </div>
  );
}

export default App;
