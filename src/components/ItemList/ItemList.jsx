import Item from '../ItemList/Item'
import {useEffect, useState } from 'react';
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore";
import Box from '@mui/material/Box';

export default function ItemList({filtroCategoria}){
    const [items, setItems] = useState([]);

    useEffect(() => {
        const db = getFirestore();
    
        const itemsCollectionRef = collection(db, "items");
        let q = query(
          itemsCollectionRef,
          where("price", ">", 10)
        );
        console.log(filtroCategoria);
        if(filtroCategoria && Number(filtroCategoria) !== 0){
            q = query(
                itemsCollectionRef,
                where("category", "==", Number(filtroCategoria))
              );
        }
    
        getDocs(q).then((snapshot) => {
            console.log(snapshot.docs);
            setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        });
      }, [filtroCategoria]);

    return(
      <Box Wrap sx={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
            {items.map( item => <Item key={item.id} item={item}/>)}
        </Box>
        );
}