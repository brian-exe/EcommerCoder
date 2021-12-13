import * as Firebase from "firebase/firestore";
import {initializeFirebase} from './/DataConfig'

initializeFirebase();
const collectionName = 'categories';

const db = Firebase.getFirestore();
const categoriesCollectionRef = Firebase.collection(db, collectionName);

export const getCategories = () =>{
   return Firebase.getDocs(categoriesCollectionRef);
}

export default function CategoriesService(){}