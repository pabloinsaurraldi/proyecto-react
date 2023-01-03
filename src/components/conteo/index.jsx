import React from 'react'
import { useState } from 'react'
import '../conteo/styles.scss'

const Cantidad = () => {
    const [count, setCount] = useState(0)
    const [stock, setStock] = useState(9)

    const agregarProducto = () => {
        setCount(count + 1)
        setStock(stock - 1)
    }

    const quitarProducto = () => {
        setCount(count - 1)
        setStock(stock + 1)
    }

    const vaciarCarrito = () => {
        setCount(0)
        setStock(9)
    }

  return (
    <div className='contenedorGral'>
        <h2 className='textoStock'>Productos en stock: {stock} </h2>
        <div className='contenedorSumaYResta'>
            <button disabled = {count <= 0} className='resta' onClick={quitarProducto}>-</button>
            <span className='nro'>{count}</span>
            <button disabled = {count >= 9} className='suma' onClick={agregarProducto}>+</button>
        </div>

        <div>  
            <button disabled = {count <= 0} className='vaciarCarrito' onClick={vaciarCarrito}>Vaciar Carrito</button>
        </div>
    </div>
  )
}

export default Cantidad