import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "../components/Error";
import Footer from "../components/footer/footer";
import NavBar from "../components/NavBar";
import Cart from "../containers/CartContainer";
import ItemDetailContainer from "../containers/ItemDetailContainer";
import ItemListContainer from "../containers/ItemListContainer";
import '../components/NavBar/styles.scss'



const Navegacion = () => {
  return (
    <div>
  <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/categoria/:categoryId"
            element={<ItemListContainer />}
          />
          <Route path="/carrito" element={<Cart />} />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
export default Navegacion;
