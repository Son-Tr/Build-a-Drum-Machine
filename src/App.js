import './App.css';
import ControlDrumMachine from './Components/ControlDrumMachine';
import ListDrumPad from './Components/ListDrumPad';

function App() {
  return (
    <div className='container'>
      <h1>Drum Machine</h1>
      <div id='drum-machine'>
        <ListDrumPad />
        <ControlDrumMachine/>
      </div>
      <footer>by 
        <a href="https://github.com/Son-Tr" target='_blank' rel="noopener noreferrer">Son-Tr</a>
      </footer>
    </div>
  );
}

export default App;
