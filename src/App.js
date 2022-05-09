import './App.css';
import Title from './components/Title.js'
import Body from './components/Body.js'
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <header>
        <Title />
      </header>
      <body>
        <Body />
      </body>
      <footer>
        <Navbar />
      </footer>
    </div>
  );
}

export default App;
