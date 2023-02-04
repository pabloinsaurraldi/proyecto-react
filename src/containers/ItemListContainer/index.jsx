import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList';
import './styles.scss';
import Loader from '../../components/loader/spinner';
import useFirebase from '../../hooks/useFirebase';




const ItemListContainer = () => {
  
  const {categoryId} = useParams()

  const [productos] = useFirebase(categoryId)

      
  return (
    <div className='contenedorDeCards'>
      {
        Object.keys(productos).length ===0
        ? <Loader />
        :<ItemList productos={productos} /> 
      }
      
    </div>
  )
}

export default ItemListContainer