import Item from '../ItemList/Item'
import {useEffect, useState } from 'react';
import {useCartContext} from '../../contexts/CartProvider';
import {useMockDataContext} from '../../contexts/MockDataProvider';


export default function ItemList(){
    const [items, setItems] = useState([]);
    const  {itemsInCart, setItemsInCart}  = useCartContext();
    const {fetchItems} = useMockDataContext();
    
    useEffect(()=> {
        async function getItems(){
            setItems( await fetchItems());
        }
        getItems();
    },[]);
    
    const handleAdd = function(itemCount, itemId){
        let item =items.find(i => i.id === itemId);
        if(item)
          setItemsInCart(itemsInCart + itemCount)
      };

    return(
        <div style={{display: "flex"}}>
            {items.map( item => 
                <Item 
                key={item.id}
                id={item.id}
                title={item.title} 
                price={item.price} 
                stock={item.stock}
                img={item.img}
                handleAdd={handleAdd}/>)}
        </div>);
}