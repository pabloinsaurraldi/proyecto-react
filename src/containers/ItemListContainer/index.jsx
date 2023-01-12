import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList';
import componentes from '../../data/stock.json'
import './styles.scss';


const ItemListContainer = () => {

  const [productos, setProductos] = useState([])

  const [anuncio, setAnuncio] = useState(true)

  const {categoryId} = useParams()

  useEffect (() => {
    const promesa = new Promise ((accept, reject) => {
      setTimeout (() => {
        accept (componentes)
      }, 3000)
    })

    promesa
      .then((result) => {
        if(categoryId) {
          const filtroProductos = result.filter(producto => producto.categoria === categoryId)
          setProductos(filtroProductos)
        } else {
          setProductos (result)
        }
        }
        )
      .catch((error) => {
        alert("Error Inesperado")
      })

  }, [categoryId])

  const handleCierraAnuncio = () => {
    setAnuncio(false)
  }

  return (
    <div className='contenedorDeCards'>
      <ItemList componentes={productos} />
    </div>
  )
}

export default ItemListContainer