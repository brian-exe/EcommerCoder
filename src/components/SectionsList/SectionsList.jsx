import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from "react-router-dom";
import {getDocs, collection, getFirestore} from "firebase/firestore";


export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [categorias, setCategorias] = React.useState([]);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  React.useEffect(()=> {
    const db = getFirestore();
    const categoriesCollection = collection(db, "categories");

    getDocs(categoriesCollection).then((snapshot)=>{
        if(snapshot.docs.length > 0){
            setCategorias(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
        }
    })
},[]);
  return (
    <div>
      <Button
        style={{color:'white'}} 
        id="fade-button"
        aria-controls="fade-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        endIcon={<KeyboardArrowDownIcon />}
        onClick={handleClick}
      >
        Categorias
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {categorias.map(cat => <MenuItem key={cat.id} component={Link} to={'/categorias/'+ cat.id} onClick={handleClose}>{cat.description}</MenuItem>)}
      </Menu>
    </div>
  );
}
