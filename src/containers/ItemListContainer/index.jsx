import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList';
import './styles.scss';
import { db } from '../../firebase/config';
import { collection, getDocs, query, where } from "firebase/firestore"; 


const ItemListContainer = () => {

  
  const {categoryId} = useParams()
  
  const [productos, setProductos] = useState([])

  console.log(db);


  useEffect (() => {

      const traerProductos = async () => {
        let querySnapshot
        if (categoryId) {
          const q = query(collection(db, 'componentes'), where("categoria", "==", categoryId))
          querySnapshot = await getDocs(q)
        } else {
          querySnapshot = await getDocs(collection(db, 'componentes'));
      }
      const productosFb = []
      querySnapshot.forEach((doc) => {
        const productos = {
          id: doc.id,
          ...doc.data()
        }
        productosFb.push(productos)
      });

      setProductos(productosFb)
    }
    traerProductos()
  } 
    , [categoryId])
      

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
        : <ItemList productos={productos} /> 
      }
      
    </div>
  )
}

export default ItemListContainer