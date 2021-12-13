import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Divider } from '@material-ui/core';
import { CardMedia } from '@mui/material';
import { useEffect} from 'react';
import ItemCounter from '../ItemList/ItemCounter';
import { useNavigate } from "react-router-dom";
import {useSessionDataContext} from '../../contexts/SessionDataProvider';
import {useCartContext} from '../../contexts/CartProvider';
import {useParams} from 'react-router-dom'
import {getItem} from '../../DataAccess/ItemsService';

export default function ItemDetail(){
    const {currentItem,setCurrentItem} = useSessionDataContext();
    const {addItemToCart, quantityInCartForItem}  = useCartContext();
    const {id, title, price, img, desc, stock} = currentItem;
    const navigate = useNavigate();
    const {itemId} = useParams();
    
    useEffect(()=> {
        getItem(itemId).then((item)=>{
            if(item.exists()){
                setCurrentItem({id: item.id, ...item.data()})
            }
        })
        return () => setCurrentItem({});
    },[itemId]);

    const itemOnAdd = (count)=>{
        addItemToCart(currentItem,count)
    };

    const onBuy = ()=>{
        navigate('/Order')
    }
    return(
        <>
        <Card  sx={{ display:'flex'}}>
            <CardContent >
                <CardMedia
                    component="img"
                    height="500"
                    width="500"
                    image={img || "https://image.shutterstock.com/image-photo/no-photo-600w-403171300.jpg"}
                    alt={title}
                />
            </CardContent >
            <CardContent sx={{ maxWidth: 300}}>
                <Typography gutterBottom variant="h5" component="div">
                {title} (${price})
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    ({stock}) unidades disponibles - {quantityInCartForItem(id)} en carrito
                </Typography>
                <Divider variant="middle" />
                <CardActions>
                    <ItemCounter showBuyButton={true} onBuy={onBuy} stock={stock- quantityInCartForItem(id)} initial="0" onAdd={itemOnAdd}/>
                </CardActions>
            </CardContent>
        </Card>
        <Card>
        <CardContent>
                <Typography paragraph>
                    {desc}
                </Typography>
            </CardContent>
        </Card>
        </>
    );
}