import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Sections from '../SectionsList/SectionsList';
import CartWidget from '../Cart/CartWidget';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography  to='/'
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              <Link style={{color:'white', textDecoration:'none'}}to='/'>EcommerCoder</Link>
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Sections/>
            </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <CartWidget/>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
