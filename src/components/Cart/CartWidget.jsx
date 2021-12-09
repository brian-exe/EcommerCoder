import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import {useCartContext} from '../../contexts/CartProvider';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import {useState} from 'react';
import Cart from './CartDetailList'

function CartWidget(){

  function onCartClick(){
    setDrawerState(true);
  }

  const [drawerState, setDrawerState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawerState(open);
  };
  const  {itemsInCart}  = useCartContext();
    return (
      <>
        <IconButton
        onClick={onCartClick}
        size="large"
        aria-label={itemsInCart.length + " items in cart"}
        color="inherit"
      >
        <Badge badgeContent={(itemsInCart.map(item => item.quantity).reduce((prev, curr) => prev + curr, 0)) || 0} color="error">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <Drawer
        anchor='right'
        open={drawerState}
        onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
        >
      <List>
        <Cart/>
      </List>
    </Box>
      </Drawer>
      </>
    )
}

export default CartWidget;