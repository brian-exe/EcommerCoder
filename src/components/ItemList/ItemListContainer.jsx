import {useParams} from 'react-router-dom';
import ItemList from '../ItemList/ItemList';

export default function ItemListContainer(){
  const {idCategoria} = useParams();

  return (
    <div >
      <ItemList filtroCategoria={idCategoria}/>
    </div>
  );
};