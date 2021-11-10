import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Divider } from '@material-ui/core';
import { Box } from '@mui/material';
import ItemCounter from './ItemCounter.jsx';

export default function Item({id, title, price,stock, handleAdd}){
    const [myStock, setMyStock] = useState(stock);

    const itemOnAdd = function(count){
        handleAdd(count, id)
        setMyStock(myStock - count);
    };
    return(
    <Card variant="outlined" sx={{ maxWidth: 345 }}>
      <CardContent>
        <Box
        sx={{
            width: 200,
            height: 200,
            backgroundColor: 'primary.dark',
            '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
            },
        }}
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