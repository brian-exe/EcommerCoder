import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {useState} from 'react';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ItemCounter = ({stock,initial,onAdd}) => {
    //console.log(stock, initial, onAdd);
    const [counter, setCounter] = useState(initial);

    function onIncreaseNumber (){
        setCounter(Math.min(counter + 1, stock))
    }

    function onDecreaseNumber (){
        setCounter(Math.max(counter - 1, 0))
    }

    const onAddToCart= ()=>{
        if(counter > 0){
            onAdd(counter);
            setCounter(initial);
        }
    }

    return(
        <>
            <ButtonGroup variant="outlined" aria-label="outlined primary button group">
                <Button size="small" onClick={onDecreaseNumber}>-</Button>
                <Button size="small" >({counter}) unidad{counter > 1 ? "es" :""}</Button> 
                <Button size="small" onClick={onIncreaseNumber}>+</Button>
            </ButtonGroup>
            <ButtonGroup>
                <IconButton color="primary" aria-label="add to shopping cart">
                    <AddShoppingCartIcon onClick={onAddToCart} />
                </IconButton>
                {/* <Button size="small" >Agregar ({counter}) item/s al carrito</Button>  */}
            </ButtonGroup>
        </>
    );
}
export default ItemCounter