import React from 'react'
import Item from '../Item'



const ItemList = ({componentes}) => {
  return (
    <div className='contenedorDeCards'>
        {componentes.map((componente) => {
            return <Item component2={componente} key={componente.id} />
        })}
    </div>
  )
}

export default ItemList