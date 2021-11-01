import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <ItemListContainer/>
    </div>
  );
}

export default App;
