import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemDetail from './ItemDetail';
import {useMockDataContext} from '../../contexts/MockDataProvider';


export default function ItemDetailContainer(){
    //const [currentItem, setCurrentItem] = useState({});
    const {fetchItem, currentItem, setCurrentItem} = useMockDataContext();
    const {itemId} = useParams();

    useEffect(()=> {
        async function getItem(){
            const item = await fetchItem(itemId);
            setCurrentItem(item);
        }
        getItem();
    },[]);
    
    return(
        <ItemDetail/>
    );
}