import React from 'react'
import { useContext } from 'react'
import { Shop } from '../../context/ShopProvider'
import TableRow from './TableRow'

const Cart = () => {

    const {productos, totalAPagar} = useContext (Shop)

  return (
    <div className='posicion'>
        <table className="table table-dark table-striped todaLaTabla table-hover">
            <thead>
                <tr>
                    <th scope="col">Imagen</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Modelo</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Eliminar</th>
                </tr>
            </thead>
           
            <tbody >
                {productos.map(producto=> {
                    return <TableRow key={producto.id} producto={producto} />
                })} 
            </tbody>
        </table>
        <div className='totalYPrecio'>
            <h2>Total</h2>    
            <h3>$ {totalAPagar()} </h3>    
        </div>        
        <button className='finOperacion'>Confirmar compra</button>
    </div>
  )
}

export default Cart