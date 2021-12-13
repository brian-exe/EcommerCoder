import * as Firebase from "firebase/firestore";
import {initializeFirebase} from './/DataConfig'

initializeFirebase();
const collectionName = 'items';

const db = Firebase.getFirestore();
const itemsCollectionRef = Firebase.collection(db, collectionName);

export const getItems = (queryFilter) =>{
    let q = Firebase.query(itemsCollectionRef);
    if (queryFilter)
        q = Firebase.query(itemsCollectionRef, queryFilter);

   return Firebase.getDocs(q);
}

export const getItem = (itemId) =>{
    const itemRef = Firebase.doc(db, collectionName, itemId);

   return Firebase.getDoc(itemRef);
}

export const updateStockForItems = (itemCollection) =>{
    const batch = Firebase.writeBatch(db);

    itemCollection.forEach((item) => {
        const ref =  Firebase.doc(db, collectionName, item.id);
        batch.update(ref, {stock: item.stock - item.quantity});
    })

    return batch.commit();
}

export default function ItemsService(){
}