import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer  from './components/ItemDetail/ItemDetailContainer';
import './App.css';
import CartProvider from './contexts/CartProvider'

function App() {
  return (
    <CartProvider >
      <div className="App">
        {/* <Navbar></Navbar>
        <ItemListContainer/> */}
        <ItemDetailContainer/>
      </div>
    </CartProvider>
  );
}

export default App;
