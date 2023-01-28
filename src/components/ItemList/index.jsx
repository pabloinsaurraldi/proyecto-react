import React from 'react'
import Item from '../Item'



const ItemList = ({productos}) => {
  return (
    <div className='contenedorDeCards'>
        {productos.map((producto) => {
            return <Item component2={producto} key={producto.id} />
        })}
    </div>
  )
}

export default ItemList