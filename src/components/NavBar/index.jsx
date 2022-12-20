import React from 'react';
import '../NavBar/styles.scss';
import '../Item/styles.scss'


const NavBar = () => {
  return (
   <nav className="navbar navbar-expand-lg colorNavBar">
  <div className="container-fluid">
    <a className="navbar-brand  controlPadding" href="/#"><img src="" alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 posicionEnlaces">
        <li className="nav-item">
          <a href="/#"><img className='logoVerzall' src="https://res.cloudinary.com/dkn0guenm/image/upload/v1669063610/verzall/img/logo/logoMasChico_-_copia_-_copia_dqvqqb.jpg" alt="LogoVerzall" /></a>
        </li>
        <li className="nav-item">
          <a className="colorEnlaces" href="/#">Productos</a>
        </li>
        <li className="nav-item">
          <a className="colorEnlaces" href="/#">Contactanos</a>
        </li>
        <li className="nav-item">
          <a className="colorEnlaces" href="/#">Acerca de nosotros</a>
        </li>
       
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn-outline-success colorBtn" type="submit">Search</button>
      </form>
    </div>
  </div>
  <div className='containerCarrito'>
  <a href="/#"> <img className='carrito' src="https://cdn-icons-png.flaticon.com/512/46/46297.png?w=360" alt="imgCart" /></a>
  <p className='nroCarrito'>5</p>
  </div>
</nav>
  )
}

export default NavBar