import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail';
import componentes from '../../data/stock.json'

const ItemDetailContainer = () => {

    const [detail, setDetail] = useState ({})

    const {id} = useParams()

    useEffect(() => {

        const traerProductoDetallado = () => {

        const productoDetallado = new Promise ((accept, reject) => {
      setTimeout (() => {
        accept (componentes)
      }, 3000)
    })

    productoDetallado
      .then(result => {
        if(id) {
          const detailProducto = result.find(producto => producto.id.toString() === id)
          console.log(detailProducto);
          setDetail(detailProducto)
        } 
        })
      .catch(error => alert ('Error Inesperado'))
      }

      traerProductoDetallado()

  }, [id])

  return (
    <div className='contieneCardDetail'>
      {
        Object.keys(detail).length === 0
        ? <h2>Loading ...</h2>
        : <ItemDetail detail={detail} />
      }
    </div>
  )
}


export default ItemDetailContainer