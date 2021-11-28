import {useState, createContext, useContext} from 'react'

 const CartContext = createContext();

 export const useCartContext = ()=> useContext(CartContext)

 export default function CartProvider({children}){
    const [itemsInCart, setItemsInCart] = useState([]);

    const addItemToCart = (item, quantity) =>{
        if(itemsInCart.some(i => i.id === item.id))
        {
            const index = itemsInCart.findIndex(i => i.id === item.id);
            let newItemsInCart = [...itemsInCart]
            newItemsInCart[index].quantity = newItemsInCart[index].quantity + quantity;
            setItemsInCart(newItemsInCart);
        }
        else{
            const newItemToCart = {id: item.id, quantity:quantity, title: item.title}
            let newItemsInCart = [...itemsInCart, newItemToCart];
            setItemsInCart(newItemsInCart);
        }
        
    }

     return (
        <CartContext.Provider value={{itemsInCart, addItemToCart}}>
            {children}
        </CartContext.Provider>
     );
 };