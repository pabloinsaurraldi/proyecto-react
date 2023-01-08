import React from 'react';

const ItemDetail = ({ detail }) => {

    return (
        <div className="card" style= {{width: '18rem'}}>
      <img src= {detail.imgSrc} alt= {detail.categoria} />
      <div className="card-body">
        <h4 className="card-title"> {detail.marca} </h4>
        <p className="card-text"> {detail.modelo} </p>
        <p className="card-text">$ {detail.precio} </p>
        <p className="card-text"> {detail.detalle} </p>
      </div>
    </div>
    )
}

export default ItemDetail