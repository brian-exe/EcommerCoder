import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Divider } from '@material-ui/core';
import { CardMedia } from '@mui/material';
import ItemCounter from './ItemCounter.jsx';

export default function Item({id, title, price,stock, img, handleAdd}){
    const [myStock, setMyStock] = useState(stock);

    const itemOnAdd = function(count){
        handleAdd(count, id)
        setMyStock(myStock - count);
    };
    return(
    <Card variant="outlined" sx={{ maxWidth: 345 }}>
      <CardContent>
      <CardMedia
        component="img"
        height="140"
        image={img || "https://image.shutterstock.com/image-photo/no-photo-600w-403171300.jpg"}
        alt={title}
      />
         <Typography gutterBottom variant="h5" component="div">
          {title} (Stock: {myStock})
        </Typography>
        <Typography variant="body2" color="text.secondary">
            ${price}
        </Typography>
      </CardContent>
        <Divider variant="middle" />
      <Divider variant="middle" />
      <CardActions>
        <ItemCounter stock={myStock} initial="0" onAdd={itemOnAdd}/>
      </CardActions>
    </Card>
    );
}