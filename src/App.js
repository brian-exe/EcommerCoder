import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import './App.css';
import CartProvider from './contexts/CartProvider'

function App() {
  return (
    <CartProvider >
      <div className="App">
        <Navbar></Navbar>
        <ItemListContainer/>
      </div>
    </CartProvider>
  );
}

export default App;
