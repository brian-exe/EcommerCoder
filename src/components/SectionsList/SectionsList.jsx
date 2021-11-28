import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from "react-router-dom";


export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const categorias = [
    {id:0, nombre:'Todos los productos'},
    {id:1, nombre:'Laptopts'},
    {id:2, nombre:'Accesorios'},
    {id:3, nombre:'Monitores'},
  ];

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
        {categorias.map(cat => <MenuItem component={Link} to={'/categorias/'+ cat.id} onClick={handleClose}>{cat.nombre}</MenuItem>)}
        {/* <MenuItem component={Link} to='/' onClick={handleClose}>Index</MenuItem>
        <MenuItem component={Link} to='/ItemDetail/' onClick={handleClose}>My account</MenuItem>
        <MenuItem component={Link} to='/' onClick={handleClose}>About</MenuItem> */}
      </Menu>
    </div>
  );
}
