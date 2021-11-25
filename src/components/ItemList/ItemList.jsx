import Item from '../ItemList/Item'
import {useEffect, useState } from 'react';
import {useCartContext} from '../../contexts/CartProvider';


export default function ItemList(){
    const [items, setItems] = useState([]);
    const  {itemsInCart, setItemsInCart}  = useCartContext();

    useEffect(()=> {
        const arrayItems = [
            {
                id:1,
                title:"Notebook Asus",
                price:"170.000",
                stock:"5",
                img:"https://media.istockphoto.com/photos/asus-zenbook-duo-14-ux482-picture-id1317708698"
            },
            {
                id:3,
                title:"Mouse Gamer",
                price:"1239,00",
                stock:"4",
                img:"https://image.shutterstock.com/image-photo/blue-light-computer-gaming-mouse-600w-723052858.jpg"
            },
            {
                id:2,
                title:"Monitor",
                price:"15.000",
                stock:"3",
                img:"https://image.shutterstock.com/image-vector/realistic-computer-monitor-screen-isolated-600w-1363396547.jpg"
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
              img={item.img}
              handleAdd={handleAdd}
              />
        )}
      </div>
    );
}