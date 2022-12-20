import React from 'react';

const Item = ({Title}) => {
  return (
    <div className="card" style= {{width: '18rem'}}>
      <img src="https://res.cloudinary.com/dkn0guenm/image/upload/v1662572553/verzall/img/procesadores/ryzen7-5700g_dflmtf.png" className="card-img-top" alt="ryzen5" />
      <div className="card-body">
        <h5 className="card-title">{Title}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="/#" className="btn btn-primary">Agregar al carrito</a>
      </div>
    </div>
  )
}

export default Item