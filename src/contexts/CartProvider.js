import {useState, createContext, useContext} from 'react'

 const CartContext = createContext();

 export const useCartContext = ()=> useContext(CartContext)

 export default function CartProvider({children}){
    const [itemsInCart, setItemsInCart] = useState([]);

    const addItemToCart = (item, quantity) =>{
        const element = itemsInCart.find(i => i.id === item.id);
        if(!element) return setItemsInCart([...itemsInCart,{...item, quantity}])

        element.quantity = element.quantity + quantity;
        setItemsInCart([...itemsInCart.filter(i => i.id !== item.id),element])
    }

    const deleteItemFromCart = (itemFromCart)=>{
        const element = itemsInCart.find(i => i.id === itemFromCart.id);
        if(element) return setItemsInCart([...itemsInCart.filter(i => i.id !== itemFromCart.id)])
    };

    const cleanCart = ()=>{
        setItemsInCart([]);
    }

     return (
        <CartContext.Provider value={{itemsInCart, cleanCart, addItemToCart, deleteItemFromCart}}>
            {children}
        </CartContext.Provider>
     );
 };