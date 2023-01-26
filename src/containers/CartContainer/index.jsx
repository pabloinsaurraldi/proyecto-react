import React from 'react'
import { useContext } from 'react'
import { Shop } from '../../context/ShopProvider'
import TableRow from './TableRow'

const Cart = () => {

    const {productos} = useContext (Shop)

  return (
    <div className='posicion'>
        <table className="table table-dark table-striped todaLaTabla table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Imagen</th>
                    <th scope="col">Producto</th>
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
    </div>
  )
}

export default Cart