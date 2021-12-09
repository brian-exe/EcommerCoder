import {useCartContext} from '../../contexts/CartProvider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import * as React from 'react';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';


export default function CartDetailList(){
    const  {itemsInCart, deleteItemFromCart}  = useCartContext();

    if(itemsInCart.length === 0)
        return(
            <div>
                <Typography variant="h6" component="div" gutterBottom>El carrito está Vacío ☹</Typography>
            </div>
        );
    return(
        <div>
            <Typography variant="h6" component="div" gutterBottom>Elementos en el carrito</Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {itemsInCart.map(item => 
                    <>
                    <Divider />
                    <ListItem alignItems="flex-start" key={item.id} secondaryAction={
                    <IconButton onClick={()=>{deleteItemFromCart(item)}} edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  }>
                        <ListItemAvatar>
                            <Avatar alt={item.title} src={item.img} />
                        </ListItemAvatar>
                        <ListItemText
                            primary={item.title + " X (" + item.quantity + ")"}
                            secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Total ${item.quantity * item.price}
                            </Typography>
                        </React.Fragment>}/>
                    </ListItem>
                    </>)}
            <Divider>TOTAL CARRITO: {itemsInCart.map(item => item.quantity * item.price).reduce((prev, curr) => prev + curr, 0)}</Divider>
            </List>
            <List>
                <ListItem>
                    <Button key="buttonFinalizarCompra" color="primary" variant="outlined"> 
                        Finalizar Compra
                    </Button>
                </ListItem>
            </List>
        </div>
    );
}