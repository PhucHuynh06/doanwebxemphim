import './App.css';
import Contents from './components/Contents/Contents';
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Contents />
    </div>
  );
}

export default App;
