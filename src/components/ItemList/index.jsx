import UncontrolledExample from '../Carousel/carousel'
import React from 'react'
import Item from '../Item'
import '../ItemList/styles.scss'



const ItemList = ({productos}) => {
  return (
    <>
    <div className='carousel'>
        <UncontrolledExample />
      </div>
    <div className='contenedorDeCards'>
      
        {productos.map((producto) => {
            return <Item component2={producto} key={producto.id} />
        })}
    </div>
    
        </>
  )
}

export default ItemList