import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemDetail from './ItemDetail';
import {useMockDataContext} from '../../contexts/MockDataProvider';


export default function ItemDetailContainer(){
    const [currentItem, setCurrentItem] = useState({id:0,title:"",price:0});
    const {fetchItem} = useMockDataContext();
    const {itemId} = useParams();

    useEffect(()=> {
        async function getItem(){
            console.log(itemId);
            const item = await fetchItem(itemId);
            console.log(fetchItem);
            setCurrentItem(item);
        }
        getItem();
    },[]);
    
    return(
        <ItemDetail
            key={currentItem.id}
            id={currentItem.id}
            title={currentItem.title} 
            price={currentItem.price} 
            stock={currentItem.stock}
            img={currentItem.img}
            desc={currentItem.desc}
        />
    );
}