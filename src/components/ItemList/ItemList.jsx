import Item from '../ItemList/Item'
import { useEffect, useState } from 'react';

export default function ItemList({itemsInCart, setItemsInCart}){
    const [items, setItems] = useState([]);
    
    useEffect(()=> {
        const arrayItems = [
            {
                id:1,
                title:"Notebook Asus",
                price:"170.000",
                stock:"5"
            },
            {
                id:3,
                title:"Mouse Gamer",
                price:"1239,00",
                stock:"4"
            },
            {
                id:2,
                title:"Monitor",
                price:"15.000",
                stock:"3"
            },
        ];
        async function fetchItems(){
            const getItems = () =>new Promise((resolve, reject) =>{
                setTimeout(()=>{
                    resolve(arrayItems)
                },5000);
            });
    
            setItems( await getItems());
        }
        fetchItems();
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
              handleAdd={handleAdd}
              />
        )}
      </div>
    );
}