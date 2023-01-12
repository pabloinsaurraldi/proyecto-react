import React, { useState } from 'react';
import '../Conteo/styles.scss';

const Cantidad = ({onAdd}) => {
  const [count, setCount] = useState(0);
  const [stock, setStock] = useState(7);
  

  const agregarProducto = () => {
    setCount(count + 1);
    setStock(stock - 1);
  };

  const quitarProducto = () => {
    setCount(count - 1)
    setStock(stock + 1);
  };

const vaciarCarrito = () => {
  setCount(0)
  setStock(7)
}

  return (
    <div className='contenedorGral'>
      <h2 className='textoStock'>Productos en stock: {stock} </h2>
      <div className='contenedorSumaYResta'>
        <button disabled = {count <= 0} className='resta' onClick={quitarProducto}>-</button>
        <span className='nro'>{count}</span>
        <button disabled = {count >= 7} className='suma' onClick={agregarProducto}>+</button>
        
      </div>

      <div className='contenedorSumaYResta'>  
        <button disabled = {count <= 0} className='vaciarCarrito' onClick={vaciarCarrito}>Vaciar</button>
        <button className='vaciarCarrito' onClick={()=> onAdd(count)}>Confirmar compra</button>
      </div>
    </div>
  );
};

export default Cantidad;