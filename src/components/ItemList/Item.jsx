import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Divider } from '@material-ui/core';
import { CardMedia } from '@mui/material';
import ItemCounter from './ItemCounter.jsx';
import CardActionArea from '@mui/material/CardActionArea';
import { NavLink } from 'react-router-dom';
import {useCartContext} from '../../contexts/CartProvider';

export default function Item({item}){
    const {id, title, price,stock, img} = item;
    const  {addItemToCart, quantityInCartForItem}  = useCartContext();

    const itemOnAdd = function(count){
        addItemToCart(item,count)
    };
    return(
    <Card variant="outlined" sx = {{border:1, margin:1, padding : 1, display:"flex", flexDirection:"column", maxWidth: 300, minWidth: 300, borderRadius:4}}>
      <NavLink to={"/ItemDetail/"+id}>
      <CardActionArea>
      <CardContent>
          <CardMedia
            component="img"
            sx={{maxHeight: 250, maxWidth:250}}
            image={img || "https://image.shutterstock.com/image-photo/no-photo-600w-403171300.jpg"}
            alt={title}/>
          <Typography gutterBottom variant="h5" component="div">{title}</Typography>
          <Typography variant="body2" color="text.secondary">${price} - ({stock} unidad/es disponible/s)</Typography>
          <Typography variant="body3" color="text.secondary">- {quantityInCartForItem(id)} en carrito -</Typography>
        </CardContent>
      </CardActionArea>
      </NavLink>
      <Divider variant="middle" />
      <CardActions>
        <ItemCounter stock={stock - quantityInCartForItem(id)} initial="0" onAdd={itemOnAdd}/>
      </CardActions>
    </Card>
    );
}