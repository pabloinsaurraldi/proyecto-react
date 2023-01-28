import React, { useState } from 'react';
import '../ItemCount/styles.scss';

const Cantidad = ({onAdd, stock: stockProd}) => {
  const [count, setCount] = useState(0);
  const [stock, setStock] = useState(stockProd)
  


  let agregarProducto = () => {
    setCount(count + 1)
    setStock(stock - 1)
  };


  let quitarProducto = () => {
    setCount(count - 1)
    setStock(stock + 1)
    
  };

const vaciarCarrito = () => {
  setCount(0)
  setStock(stockProd)

}

  return (
    <div className='contenedorGral'>
      <h2 className='textoStock'>Productos en stock: {stock} </h2>
      <div className='contenedorSumaYResta'>
        <button disabled = {count <= 0} className='resta' onClick={quitarProducto}>-</button>
        <span className='nro'>{count}</span>
        <button disabled = {count >= stockProd} className='suma' onClick={agregarProducto}>+</button>
        
      </div>

      <div className='contenedorSumaYResta'>  
        <button disabled = {count <= 0} className='vaciarCarrito' onClick={vaciarCarrito}>Vaciar</button>
        <button disabled = {count <= 0} className='vaciarCarrito' onClick={()=> onAdd(count)}>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default Cantidad;