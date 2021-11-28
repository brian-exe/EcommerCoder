import Item from '../ItemList/Item'
import {useEffect, useState } from 'react';
import {useMockDataContext} from '../../contexts/MockDataProvider';


export default function ItemList({filtroCategoria}){
    const [items, setItems] = useState([]);

    const {fetchItems} = useMockDataContext();
    
    useEffect(()=> {
        async function getItems(){
            let obtainedItems = await fetchItems();
            if(filtroCategoria && filtroCategoria != 0){
                obtainedItems = obtainedItems.filter(i => i.categoria == filtroCategoria)
            }
            setItems(obtainedItems);
        }
        getItems();
    },[filtroCategoria]);
    

    return(
        <div style={{display: "flex"}}>
            {items.map( item => <Item key={item.id} item={item}/>)}
        </div>
        );
}