import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({component2}) => {
  return (
    <div className="card" style= {{width: '15rem'}}>
      <img src= {component2.imgSrc} alt= {component2.categoria} />
      <div className="card-body">
        <h4 className="card-title"> {component2.marca} </h4>
        <p className="card-text"> {component2.modelo} </p>
        <Link to={`/detail/${component2.id}`} className="btn btn-primary">Ver mas</Link>
      </div>
    </div>
  )
}

export default Item