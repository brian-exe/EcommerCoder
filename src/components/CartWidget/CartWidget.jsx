//import React from 'react';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';

function CartWidget({itemsInCart}){
    return (
        <IconButton
        size="large"
        aria-label={itemsInCart + " items in cart"}
        color="inherit"
      >
        <Badge badgeContent={itemsInCart || 0} color="error">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    )
}

export default CartWidget;