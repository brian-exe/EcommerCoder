import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from "react-router-dom";
import {useCartContext} from '../../contexts/CartProvider';

function CartWidget(){

  const navigate = useNavigate();
  function onCartClick(){
    navigate('/Cart')
  }
  const  {itemsInCart}  = useCartContext();
    return (
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
    )
}

export default CartWidget;