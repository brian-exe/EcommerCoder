import * as React from 'react';
import ItemList from '../ItemList/ItemList'

export default function ItemListContainer({itemsInCart, setItemsInCart}){

  return (
    <div >
      <ItemList itemsInCart={itemsInCart} setItemsInCart={setItemsInCart}/>
    </div>
  );
};