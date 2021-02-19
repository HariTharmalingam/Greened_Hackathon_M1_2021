import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home'
import GreenedBot from '../src/components/Chatbot'

function App() {
  return (
    <>
      <Home />
        <GreenedBot className="GreenedBot"/>
      </>
  );
}

export default App;
