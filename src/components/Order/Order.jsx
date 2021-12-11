import CartItem from '../Cart/CartItem';
import {useCartContext} from '../../contexts/CartProvider';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Alert from '@mui/material/Alert';
import DialogTitle from '@mui/material/DialogTitle';
import {useState} from 'react';
import {collection,doc, getFirestore, writeBatch, addDoc} from 'firebase/firestore'

export default function Order(){
    const  {itemsInCart, cleanCart,deleteItemFromCart}  = useCartContext();

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [mail, setMail] = useState('');
    const [openDialog, setOpenDialog] = useState(false);
    const [order, setOrder] = useState({});

    const inputsData = [
        { key: "name", label:'Nombre', type:'text', setter: setName },
        { key: "phone", label:'Teléfono', type:'number', setter: setPhone },
        { key: "mail", label:'Mail', type:'email', setter: setMail }
      ];

    function onInputChange(evt, inputName) {
        let element = inputsData.find((i) => i.key === inputName);
        element.setter(evt.target.value);
    }

    function createOrder ()
    {
        return {
            buyer:{
                name,
                phone,
                mail
            },
            items:[{
                items: itemsInCart.map(i=>{ return { id: i.id, price: i.price, quantity: i.quantity}}),
            }],
            total: itemsInCart.map(item => item.quantity * item.price).reduce((prev, curr) => prev + curr, 0)
        }
    };

    const sendOrder = ()=>{
        const db =  getFirestore();
        let orderToCreate = createOrder();
        const ordersCollection = collection(db, 'orders');

        addDoc(ordersCollection, orderToCreate).then(({id}) => {
            setOrder({...orderToCreate, id: id});
            const batch = writeBatch(db);

            itemsInCart.forEach((item) => {
                const ref =  doc(db, 'items', item.id);
                batch.update(ref, {stock: item.stock - item.quantity});
            })

            batch.commit();
            setOpenDialog(true);
        });
    }
    
    const handleClose = () =>{
        setOpenDialog(false);
        cleanCart();
        setOrder({});
    }

    return(
        <Box Wrap sx={{justifyContent:'center', width:'100%'}}>
            <Typography sx={{justifyContent:"center"}} variant="h5" gutterBottom>Detalle de su orden</Typography>
            <Box Wrap sx={{display:"flex", flexWrap:"wrap", maxWidth:'50%'}}>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{backgroundColor:'#1976d2', color:'white'}}>
                    <Typography>Items en carrito</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box Wrap sx={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
                            {itemsInCart.map(item =>  
                                <CartItem key={item.id} item={item} onDelete={deleteItemFromCart}/>
                            )}
                        </Box>
                    </AccordionDetails>
                </Accordion>
            </Box>
             <Box Wrap sx={{display:"flex", flexWrap:"wrap", maxWidth:'50%'}}>
                <Box component="form"
                    noValidate
                    autoComplete="off">
                    {inputsData.map((i) => (
                        <TextField key={i.key} type={i.type} onChange={(evt) => onInputChange(evt, i.key)} sx={{width:'100%'}} id="filled-basic" label={i.label} variant="filled" />
                    ))}
                    <Button disabled={!(phone && mail && name && itemsInCart.length > 0)} onClick={sendOrder} variant='contained' sx={{width:'100%'}} size="medium" >Comprar</Button>
                </Box>
            </Box>
        <Dialog
            open={openDialog}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">
          {"Muchas gracias por su compra!"}
        </DialogTitle>
        <DialogContent>
            <Alert severity="success">Su identificador de orden es {order.id} </Alert>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus> Aceptar! </Button>
        </DialogActions>
            </Dialog>
        </Box>
    );
}