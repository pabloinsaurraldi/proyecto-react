import React, { useState, useEffect } from 'react';
import ItemList from '../../ItemList';
import componentes from '../../../data/stock.json'
import './styles.scss';


const ItemListContainer = () => {

  const [productos, setProductos] = useState([])

  useEffect (() => {
    const promesa = new Promise ((accept, reject) => {
      setTimeout (() => {
        accept (componentes)
      }, 3000)
    })

    promesa
      .then((result) => {
        setProductos (result)
      })
      .catch((err) => {
        alert(err.message)
      })

  }, [])

  return (
    <div className='contenedorDeCards'>
      <ItemList componentes={productos} />
    </div>
  )
}

export default ItemListContainer