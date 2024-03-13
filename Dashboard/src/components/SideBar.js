import React from 'react';
import image from '../assets/images/logo-DH.png';
import ContentWrapper from './ContentWrapper';
import GenresInDb from './CategoriesInDb';
import LastMovieInDb from './LastMovieInDb';
import ContentRowMovies from './ContentRowList';
import SearchMovies from './SearchMovies';
import Products from './Products';
import ProductDetail from './ProductDetail';
import Post from "./Post";

import NotFound from './NotFound';
import { Link, Route, Routes } from 'react-router-dom';

function SideBar() {
    return (

        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
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
                        <span>Dashboard - DH movies</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider" />

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/GenresInDb">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Pages</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/LastMovieInDb">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Charts</span></Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item nav-link">
                    <Link className="nav-link" to="/ContentRowMovies">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Tables</span></Link>
                </li>
                <li className="nav-item nav-link">
                    <Link className="nav-link" to="/search">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Search</span></Link>
                </li>
                <li className="nav-item nav-link">
                    <Link className="nav-link" to="/products">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Products</span></Link>
                </li>
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
                <Route exact path="/" element={
                    <ContentWrapper />}
                />
                <Route path="/GenresInDb" element={
                    <GenresInDb />}
                />
                <Route path="/LastMovieInDb" element={
                    <LastMovieInDb />}
                />
                <Route path="/ContentRowMovies" element={
                    <ContentRowMovies />}
                />
                <Route path="/search" element={
                    <SearchMovies />}
                />
                <Route path="/products/:idProduct" element={
                    <ProductDetail />}
                />
                <Route path="/products" element={
                    <Products />}
                />
                <Route element={NotFound} />
            </Routes>
            {/*<!-- End Microdesafio 2 -->*/}
        </React.Fragment>
    )
}
export default SideBar;