import Item from '../ItemList/Item'
import {useEffect, useState } from 'react';
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore";
import Box from '@mui/material/Box';
import {useParams} from 'react-router-dom';

export default function ItemList(){
    const {idCategoria} = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        const db = getFirestore();
    
        const itemsCollectionRef = collection(db, "items");
        let q = query(
          itemsCollectionRef,
          where("price", ">", 10)
        );
        if(idCategoria && Number(idCategoria) !== 0){
            q = query(
                itemsCollectionRef,
                where("category", "==", Number(idCategoria))
              );
        }
    
        getDocs(q).then((snapshot) => {
            setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        });
      }, [idCategoria]);

    return(
      <Box Wrap sx={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
            {items.map( item => <Item key={item.id} item={item}/>)}
        </Box>
        );
}