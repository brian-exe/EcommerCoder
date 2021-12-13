import Item from '../ItemList/Item'
import {useEffect, useState } from 'react';
import {where} from "firebase/firestore";
import Box from '@mui/material/Box';
import {useParams} from 'react-router-dom';
import {getItems} from '../../DataAccess/ItemsService';

export default function ItemList(){
    const {idCategoria} = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
      let q = undefined;
      if(idCategoria && Number(idCategoria) !== 0){
        q = where("category", "==", Number(idCategoria));
      }
        
      getItems(q).then(items => {
        setItems(items.docs.map((i) => ({ id: i.id, ...i.data() })));
      }).catch(err => console.log(err));

    }, [idCategoria]);

    return(
      <Box Wrap sx={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
            {items.map( item => <Item key={item.id} item={item}/>)}
        </Box>
        );
}