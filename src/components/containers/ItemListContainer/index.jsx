import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../ItemList';
import componentes from '../../../data/stock.json'
import './styles.scss';


const ItemListContainer = () => {

  const [productos, setProductos] = useState([])

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
      .catch((err) => {
        alert("Error Inesperado")
      })

  }, [categoryId])

  return (
    <div className='contenedorDeCards'>
      <ItemList componentes={productos} />
    </div>
  )
}

export default ItemListContainer