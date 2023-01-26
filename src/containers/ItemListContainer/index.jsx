import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList';
import componentes from '../../data/stock.json'
import './styles.scss';
import { db } from '../../firebase/config';
import { collection, getDocs } from "firebase/firestore"; 


const ItemListContainer = () => {

  const [productos, setProductos] = useState([])

  console.log(db)

  const {categoryId} = useParams()

  useEffect (() => {

    const traerProductos = async () => {
      const querySnapshot = await getDocs(collection(db, "componentes"));
      const componentesFirebase = []
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        const producto = {
          id: doc.id,
          ...doc.data()
        }
        componentesFirebase.push(producto)
  });
  setProductos(componentesFirebase)

  }

    traerProductos()

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
        ? <div className="wrapper">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
            </div>
        : <ItemList componentes={productos} /> 
      }
      
    </div>
  )
}

export default ItemListContainer