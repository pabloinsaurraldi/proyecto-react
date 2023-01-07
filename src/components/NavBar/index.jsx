import React from 'react';
import '../NavBar/styles.scss';
import '../Item/styles.scss'
import { Link } from 'react-router-dom';


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
          <Link to="/"><img className='logoVerzall' src="https://res.cloudinary.com/dkn0guenm/image/upload/v1669063610/verzall/img/logo/logoMasChico_-_copia_-_copia_dqvqqb.jpg" alt="LogoVerzall" /></Link>
        </li>
        <li className="nav-item">
          <a className="colorEnlaces" href="/#">Inicio</a>
        </li>
          <li className="nav-item dropdown">
          <a className="dropdown-toggle colorEnlaces" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorias
          </a>
          <ul class="dropdown-menu">
            <li><Link to= "/categoria/Motherboard">Motherboards</Link></li>
            <li><Link to= "/categoria/Procesadores">Procesadores</Link></li>
            <li><Link to= "/categoria/Fuentes">Fuentes</Link></li>
            <li><Link to= "/categoria/Memorias Ram">Memorias Ram</Link></li>
            <li><Link to= "/categoria/Almacenamiento">Almacenamiento</Link></li>
            <li><Link to= "/categoria/Placas de video">Placas de video</Link></li>
            <li><Link to= "/categoria/Auriculares">Auriculares</Link></li>
            <li><Link to= "/categoria/Mouse">Mouse</Link></li>
            <li><Link to= "/categoria/Tecladoscd proyecto">Teclados</Link></li>
          </ul>
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