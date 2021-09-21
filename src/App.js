import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title = "TextUtils2"/> 
      <div className="container my-3">
        <TextForm heading = "Enter text to analyse"></TextForm>
        <About></About>
      </div>
    </>
  );
}

export default App;
