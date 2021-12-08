import {useState, createContext, useContext} from 'react'

 const CartContext = createContext();

 export const useCartContext = ()=> useContext(CartContext)

 export default function CartProvider({children}){
    const [itemsInCart, setItemsInCart] = useState([]);
    const [totalCart, setTotalCart] = useState(0);

    const addItemToCart = (item, quantity) =>{
        if(itemsInCart.some(i => i.id === item.id))
        {
            const index = itemsInCart.findIndex(i => i.id === item.id);
            let newItemsInCart = [...itemsInCart]
            newItemsInCart[index].quantity = newItemsInCart[index].quantity + quantity;
            setItemsInCart(newItemsInCart);
        }
        else{
            const newItemToCart = {id: item.id, quantity:quantity, title: item.title, img: item.img, price: item.price}
            let newItemsInCart = [...itemsInCart, newItemToCart];
            setItemsInCart(newItemsInCart);
        }
        setTotalCart(totalCart + item.price * quantity);
    }

     return (
        <CartContext.Provider value={{itemsInCart, addItemToCart, totalCart}}>
            {children}
        </CartContext.Provider>
     );
 };