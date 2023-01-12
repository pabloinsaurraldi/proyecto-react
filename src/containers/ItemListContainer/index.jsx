import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList';
import componentes from '../../data/stock.json'
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
      .catch((error) => {
        alert("Error Inesperado")
      })

  }, [categoryId])

  return (
    <div className='contenedorDeCards'>
      {
        Object.keys(productos).length ===0
        ? <div class="wrapper">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="shadow"></div>
            <div class="shadow"></div>
            <div class="shadow"></div>
            </div>
        : <ItemList componentes={productos} /> 
      }
      
    </div>
  )
}

export default ItemListContainer