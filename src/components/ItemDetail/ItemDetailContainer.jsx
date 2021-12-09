import {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemDetail from './ItemDetail';
import {useMockDataContext} from '../../contexts/MockDataProvider';
import {getDoc, doc, getFirestore} from "firebase/firestore";

    export default function ItemDetailContainer(){
        const {setCurrentItem} = useMockDataContext();
        const {itemId} = useParams();


        useEffect(()=> {
            const db = getFirestore();
            const itemRef = doc(db, "items", itemId);

            getDoc(itemRef).then((snapshot)=>{
                if(snapshot.exists()){
                    setCurrentItem({id: snapshot.id, ...snapshot.data()})
                }
            })
        },[]);
    
    return(
        <ItemDetail/>
    );
}