import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail';
import { db } from '../../firebase/config';
import '../ItemListContainer/styles.scss'

const ItemDetailContainer = () => {

    const [detail, setDetail] = useState ({})

    const {id} = useParams()

    useEffect(() => {

        const traerProductoDetallado = async () => {
          const docRef = doc(db, "componentes", id)
          const docSnap = await getDoc(docRef)

          if (docSnap.exists()) {
        const productDetail = {
          id: docSnap.id,
          ...docSnap.data()
        }
        setDetail(productDetail);
      } else {
         //doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }
      
    traerProductoDetallado()

  }, [id])

  return (
    <div className='contieneCardDetail'>
      {
        Object.keys(detail).length === 0
        ? <div className="wrapper">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
          </div>
        : <ItemDetail detail={detail} />
      }
    </div>
  )
}


export default ItemDetailContainer