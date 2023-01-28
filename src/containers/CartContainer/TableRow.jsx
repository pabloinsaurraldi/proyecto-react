import React, { useContext } from 'react'
import '../CartContainer/styles.scss'
import { Shop} from '../../context/ShopProvider'

const TableRow = ({producto}) => {

  const {eliminarProducto} = useContext(Shop)

  return (
    <tr>
      <td><img className='imgCarrito' src={producto.imgSrc} alt={producto.categoria} /></td>
      <td> {producto.marca} </td>
      <td> {producto.modelo} </td>
      <td> {producto.quantity} </td>
      <td> $ {producto.precio} </td>
      <td onClick={()=>eliminarProducto(producto.id)}> <button className='btnEliminar'>🗑</button></td>
    </tr>
  )
}

export default TableRow