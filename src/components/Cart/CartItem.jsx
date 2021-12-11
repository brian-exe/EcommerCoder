import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import * as React from 'react';
import Typography from '@mui/material/Typography';

export default function CartItem({item, onDelete}){
    return(
        <>
        <Divider />
        <ListItem alignItems="flex-start" key={item.id} secondaryAction={
        <IconButton onClick={()=>{onDelete(item)}} edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      }>
            <ListItemAvatar>
                <Avatar alt={item.title} src={item.img} />
            </ListItemAvatar>
            <ListItemText
                primary={item.title + " X (" + item.quantity + ")"}
                secondary={
            <React.Fragment>
                <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                >
                    Total ${item.quantity * item.price}
                </Typography>
            </React.Fragment>}/>
        </ListItem>
        </>
    );
}