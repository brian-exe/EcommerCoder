import {useCartContext} from '../../contexts/CartProvider';

export default function(){
    const  {itemsInCart}  = useCartContext();
    return(
        <div>
            Elementos en el carrito
            <ul>
                {itemsInCart.map(cartItem => <li> {cartItem.title} x {cartItem.quantity}</li>)}
            </ul>
        </div>
    );
}