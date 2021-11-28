import Navbar from './components/Navbar/Navbar';
import {Home} from './components/Home/Home';
import ItemDetailContainer  from './components/ItemDetail/ItemDetailContainer';
import './App.css';
import CartProvider from './contexts/CartProvider';
import MockDataProvider from './contexts/MockDataProvider'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <MockDataProvider>
      <CartProvider >
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/ItemDetail/:itemId" element={<ItemDetailContainer/>} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </MockDataProvider>
  );
}

export default App;
