import React from 'react'
import '../CartContainer/styles.scss'


const TableRow = ({producto}) => {
  return (
    <tr>
        <th scope="row"> {producto.id} </th>
            <td><img className='imgCarrito' src={producto.imgSrc} alt={producto.categoria} /></td>
            <td> {producto.modelo} </td>
            <td> {producto.quantity} </td>
            <td> {producto.precio} </td>
            <td>🗑</td>
    </tr>
  )
}

export default TableRow