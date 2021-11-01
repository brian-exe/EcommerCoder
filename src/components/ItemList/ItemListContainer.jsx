import * as React from 'react';
import Item from '../ItemList/Item'

export default function ItemListContainer(props){
    return (
      <div style={{display: "flex"}}>
        <Item title="Notebook Asus" price="170.000"/>
        <Item title="Mouse Gamer" price="1239,00"/>
        <Item title="Monitor" price="15.000"/>
      </div>
    );
};