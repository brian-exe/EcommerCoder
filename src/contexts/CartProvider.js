import {useState, createContext, useContext} from 'react'

 const CartContext = createContext();

 export const useCartContext = ()=> useContext(CartContext)

 export default function CartProvider({children}){
    const [itemsInCart, setItemsInCart] = useState(0);

     return (
        <CartContext.Provider value={{itemsInCart, setItemsInCart}}>
            {children}
        </CartContext.Provider>
     );
 };