import {useCartContext} from '../../contexts/CartProvider';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CartItem from './CartItem'
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';


export default function CartDetailList(){
    const  {itemsInCart, deleteItemFromCart}  = useCartContext();
    const navigate = useNavigate();

    const finishOrder= ()=>{
        navigate('/Order')
    }

    if(itemsInCart.length === 0)
        return(
            <div>
                <Typography variant="h6" component="div" gutterBottom>El carrito está Vacío ☹</Typography>
            </div>
        );
    return(
        <Box sx={{ margin:1, padding : 1}}>
            <Typography variant="h6" component="div" gutterBottom>Elementos en el carrito</Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {itemsInCart.map(item => 
                    <CartItem key={item.id} item={item} onDelete={deleteItemFromCart}/>)}
            <Divider>TOTAL CARRITO: ${itemsInCart.map(item => item.quantity * item.price).reduce((prev, curr) => prev + curr, 0)}</Divider>
            </List>
            <Box sx={{ margin:1, padding : 1}}>
                <Button sx={{width:'100%'}} onClick={finishOrder} key="buttonFinalizarCompra" color="primary" variant="contained"> 
                    Finalizar Compra
                </Button>
            </Box>
        </Box>
    );
}