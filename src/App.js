import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import {useState} from 'react';
import './App.css';

function App() {
 const [itemsInCart, setItemsInCart] = useState(0);
  return (
    <div className="App">
      <Navbar itemsInCart={itemsInCart} setItemsInCart={setItemsInCart}></Navbar>
      <ItemListContainer itemsInCart={itemsInCart} setItemsInCart={setItemsInCart}/>
    </div>
  );
}

export default App;
