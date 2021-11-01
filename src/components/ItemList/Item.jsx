import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider } from '@material-ui/core';
import { Box } from '@mui/material';

export default function Item(props){
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
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            ${props.price}
        </Typography>
      </CardContent>
        <Divider variant="middle" />
      <Divider variant="middle" />
      <CardActions>
        <Button size="small">Comprar</Button>
      </CardActions>
    </Card>
    );
}