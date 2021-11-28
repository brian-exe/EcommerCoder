import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';
import { Divider } from '@material-ui/core';
import { CardMedia } from '@mui/material';
import { useState } from 'react';
import ItemCounter from '../ItemList/ItemCounter';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function ItemDetail({id, title, price,stock, img, desc}){
    const [myStock, setMyStock] = useState(stock);

    const itemOnAdd = (count)=>{
        //handleAdd(count, id)
        setMyStock(myStock - count);
    };
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
                    ({myStock}) unidades disponibles
                </Typography>
                <Divider variant="middle" />
                <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                        <CardActions>
                            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                                <Button size="medium" >Comprar</Button>
                            </ButtonGroup>
                        </CardActions>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <CardActions>
                            <ItemCounter  stock={myStock} initial="0" onAdd={itemOnAdd}/>
                        </CardActions>
                    </Grid>
                </Grid>
                </Box>
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