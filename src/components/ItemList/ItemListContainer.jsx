import * as React from 'react';
import Item from '../ItemList/Item'

export default function ItemListContainer({itemsInCart, setItemsInCart}){
  const handleAdd = function(itemCount, itemId){
    let item =items.find(i => i.id === itemId);
    if(item)
      setItemsInCart(itemsInCart + itemCount)
  };

  const items = [
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


  return (
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
};