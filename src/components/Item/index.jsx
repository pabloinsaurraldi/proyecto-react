import React from 'react';

const Item = ({component2}) => {
  return (
    <div className="card" style= {{width: '18rem'}}>
      <img src= {component2.imgSrc} alt= {component2.categoria} />
      <div className="card-body">
        <h4 className="card-title"> {component2.categoria} </h4>
        <h5 className="card-title"> {component2.marca} </h5>
        <p className="card-text"> {component2.modelo} </p>
        <p className="card-text">$ {component2.precio} </p>
        <button className="btn btn-primary" type="submit">Mostrar mas</button>
      </div>
    </div>
  )
}

export default Item