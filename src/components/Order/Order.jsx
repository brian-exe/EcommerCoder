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
    const  {itemsInCart, cleanCart, deleteItemFromCart}  = useCartContext();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [mail, setMail] = useState('');
    const [validMail, setValidMail] = useState(true);
    const [openDialog, setOpenDialog] = useState(false);
    const [order, setOrder] = useState({});

    const inputsData = [
        { key: "name", setter: setName },
        { key: "phone", setter: setPhone },
        { key: "mail", setter: setMail, validityChecker: checkValidMail}
      ];

    function checkValidMail(){
        setValidMail(/^[^@]+@[^@]+\.[^@]+$/.test(mail))
    }
    function onInputChange(evt, inputName) {
        let element = inputsData.find((i) => i.key === inputName);
        if(!element) return;
        element.setter(evt.target.value);
        console.log(evt.target.validity.valid);
        if(element.validityChecker)
            element.validityChecker()
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

    function cleanForm(){
        setName("");
        setMail("");
        setPhone("");
    }

    const sendOrder = ()=>{
        const db =  getFirestore();
        let orderToCreate = createOrder();
        const ordersCollection = collection(db, 'orders');

        addDoc(ordersCollection, orderToCreate).then(({id}) => {
            setOrder({...orderToCreate, id: id});
            console.log(order);
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
        setOrder({});
        cleanForm();
        cleanCart();
    }

    return(
        <Box Wrap sx={{justifyContent:'center', width:'100%'}}>
            <Typography sx={{justifyContent:"center"}} variant="h5" gutterBottom>Detalle de su orden</Typography>
            <Box sx={{display:"flex", maxWidth:'50%'}}>
                <Accordion sx={{width:'100%'}}>
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
                                <CartItem value={item.value} key={item.id} item={item} onDelete={deleteItemFromCart}/>
                            )}
                        </Box>
                    </AccordionDetails>
                </Accordion>
            </Box>
             <Box Wrap sx={{display:"flex", flexWrap:"wrap", maxWidth:'50%'}}>
                <Box component="form"
                    noValidate
                    autoComplete="off">
                    <TextField 
                        value={name} 
                        required 
                        type="text" 
                        onChange={(evt) => onInputChange(evt, "name")} 
                        sx={{width:'100%'}} 
                        id="name" 
                        label="Nombre" 
                        variant="filled" />
                    <TextField 
                        value={phone} 
                        required type="number" 
                        onChange={(evt) => onInputChange(evt, "phone")} 
                        sx={{width:'100%'}} 
                        id="phone" 
                        label="Teléfono" 
                        variant="filled" />
                    <TextField 
                        error={!validMail} 
                        value={mail} 
                        required 
                        type="mail" 
                        onChange={(evt) => onInputChange(evt, "mail")} 
                        sx={{width:'100%'}} 
                        id="mail" 
                        label="Mail" 
                        variant="filled" 
                        helperText={!validMail && "Ingrese un mail valido."}/>
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