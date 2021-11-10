import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {useState} from 'react';

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
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button onClick={onDecreaseNumber}>-</Button>
            <Button onClick={onAddToCart}>Agregar ({counter}) item/s al carrito</Button> 
            <Button onClick={onIncreaseNumber}>+</Button>
            </ButtonGroup>
        </>
    );
}
export default ItemCounter