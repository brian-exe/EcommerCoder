import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {useState} from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';


const ItemCounter = ({stock,initial,onAdd, onBuy, showBuyButton}) => {
    const [counter, setCounter] = useState(initial);

    function onIncreaseNumber (){
        setCounter(Math.min(counter + 1, stock))
    }

    function onDecreaseNumber (){
        setCounter(Math.max(counter - 1, 0))
    }

    const AddToCart= ()=>{
        if(counter > 0){
            onAdd(counter);
            setCounter(initial);
        }
    }

    const BuyItem = ()=>{
        AddToCart();
        onBuy();
    }

    const renderBuyButton = ()=>{
        if(showBuyButton){
            return(
                <Box>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button sx={{width:300}} onClick={BuyItem} size="medium" >Comprar</Button>
            </ButtonGroup>
                </Box>)
        }
    }
    return(
        <>
        <Stack
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
        >

            {renderBuyButton()}
            <ButtonGroup variant="outlined" aria-label="outlined primary button group">
                <Button size="small" onClick={onDecreaseNumber}>-</Button>
                <Button size="small" >({counter}) unidad{counter > 1 ? "es" :""}</Button> 
                <Button size="small" onClick={onIncreaseNumber}>+</Button>
                <Button onClick={AddToCart} color="primary" aria-label="add to shopping cart">
                       <AddShoppingCartIcon  />
                </Button>
            </ButtonGroup>
        </Stack>
        </>
    );
}
export default ItemCounter