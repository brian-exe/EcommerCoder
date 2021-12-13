import * as Firebase from "firebase/firestore";
import {initializeFirebase} from './/DataConfig'

initializeFirebase();
const collectionName = 'orders';

const db = Firebase.getFirestore();
const ordersCollectionRef = Firebase.collection(db, collectionName);

export const addOrder = (newOrder) =>{
    return Firebase.addDoc(ordersCollectionRef, newOrder);
}

export default function OrderService() {}