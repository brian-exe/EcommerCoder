//import React from 'react';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';

function CartWidget(props){
    return (
        <IconButton
        size="large"
        aria-label={props.itemsInCart + " items in cart"}
        color="inherit"
      >
        <Badge badgeContent={props.itemsInCart ? props.itemsInCart : 0} color="error">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    )
}

export default CartWidget;