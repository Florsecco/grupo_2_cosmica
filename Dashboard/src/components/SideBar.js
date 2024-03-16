import React, { useState } from "react";
import image from "../assets/images/logo-DH.png";
import ContentWrapper from "./ContentWrapper";
import CategoriesInDb from "./CategoriesInDb";
import LastProductInDb from "./LastProductInDb";
import ContentRowList from "./ContentRowList";
import SearchMovies from "./SearchMovies";
import Products from "./Products";
import ProductDetail from "./ProductDetail";
import ProductsCategory from "./ProductsCategory";
import UserList from "./UserList";
import UserDetail from "./UserDetail";
import Post from "./Post";

import NotFound from "./NotFound";
import { Link, Route, Routes } from "react-router-dom";
import LoginForm from "./LoginForm";

function SideBar() {
  const [user,setUser] = useState([])
  const handleLogOut = ()=>{
    setUser([])
  }
  return (
    <React.Fragment>
      {/*<!-- Sidebar -->*/}
      <ul
        className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/*<!-- Sidebar - Brand -->*/}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="/"
        >
          <div className="sidebar-brand-icon">
            <img className="w-100" src={image} alt="Digital House" />
          </div>
        </a>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider my-0" />

        {/*<!-- Nav Item - Dashboard -->*/}
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard - Cosmica</span>
          </Link>
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider" />

        {/*<!-- Heading -->*/}
        { user.length > 0 &&

          (<>
<div className="sidebar-heading">Actions</div>
          <li className="nav-item">
            <Link className="nav-link" to="/categories">
              <i className="fas fa-fw fa-folder"></i>
              <span>Categorías</span>
            </Link>
          </li>
  
          {/*<!-- Nav Item - Tables -->*/}
          <li className="nav-item nav-link">
            <Link className="nav-link" to="/ContentRowMovies">
              <i className="fas fa-fw fa-table"></i>
              <span>Tables</span>
            </Link>
          </li>
          <li className="nav-item nav-link">
            <Link className="nav-link" to="/search">
              <i className="fas fa-fw fa-table"></i>
              <span>Search</span>
            </Link>
          </li>
          <li className="nav-item nav-link">
            <Link className="nav-link" to="/products">
              <i className="fas fa-fw fa-table"></i>
              <span>Products</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/users">
              <i className="fas fa-fw fa-users"></i>
              <span>Usuarios</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" onClick={handleLogOut}>
              <span>Cerrar Sesión</span>
            </Link>
          </li>
          </>
          )}
        {/*<!-- Nav Item - Pages -->*/}
        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
      {/*<!-- End of Sidebar -->*/}

      {/*<!-- Microdesafio 1 -->*/}
      {/*<!--<Route exact path="/" >
                <ContentWrapper />
            </Route>
            <Route path="/GenresInDb">
                <GenresInDb />
            </Route>
            <Route path="/LastMovieInDb">
                <LastMovieInDb />
            </Route>
            <Route path="/ContentRowMovies">
                <ContentRowMovies />
            </Route>*/}
      {/*<!-- End Microdesafio 1 -->*/}

      {/*<!-- End Microdesafio 2 -->*/}
      <Routes>
        <Route exact path="/" element={!user.length>0 ? <LoginForm setUser={setUser}/> : <ContentWrapper user={user} />} />
        <Route path="/login" element={!user.length>0 ? <LoginForm setUser={setUser}/> : <ContentWrapper />} />
        {user.length>0 && (
          <>
        <Route path="/categories" element={<CategoriesInDb />} />
        <Route path="/LastProductInDb" element={<LastProductInDb />} />
        <Route path="/ContentRowMovies" element={<ContentRowList />} />
        <Route path="/search" element={<SearchMovies />} />
        <Route path="/products/:idProduct" element={<ProductDetail />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories/:idCat" element={<ProductsCategory />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:idUser" element={<UserDetail />} />
        </>
        )}
        <Route element={NotFound} />
      </Routes>
      {/*<!-- End Microdesafio 2 -->*/}
    </React.Fragment>
  );
}
export default SideBar;
