import Navbar from './components/Navbar/Navbar';
import {Home} from './components/Home/Home';
import Order from './components/Order/Order';
import ItemDetail  from './components/ItemDetail/ItemDetail';
import './App.css';
import CartProvider from './contexts/CartProvider';
import MockDataProvider from './contexts/MockDataProvider'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemList from './components/ItemList/ItemList';

function App() {
  return (
    <MockDataProvider>
      <CartProvider >
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/categorias/:idCategoria" element={<ItemList/>} />
            <Route exact path="/ItemDetail/:itemId" element={<ItemDetail/>} />
            <Route exact path="/Order" element={<Order/>} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </MockDataProvider>
  );
}

export default App;
