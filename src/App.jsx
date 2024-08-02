import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

//import Menu from "./components/admin/Menu";

/*
const Listarticles = lazy(() => import('./components/admin/articles/Listarticles'));
const Listcategories = lazy(() => import('./components/admin/categories/Categoriesappadmin'));
const Listscategories = lazy(() => import('./components/admin/scategories/Listscategories'));
const ListarticlesCards = lazy(() => import('./components/client/articles/Listarticles'));
const Cart = lazy(() => import('./components/client/panier/Cart'));
const NavScrolls = lazy(() => import('./components/client/NavScrolls'));
const SuccessPayment = lazy(() => import('./components/client/panier/successPayment'));
const ListarticlesUSP = lazy(() => import('./components/client/articles/ListArticlesUSP'));
const ListarticlesUSPComp = lazy(() => import('./components/client/articlesUSP/ListArticlesUSP'));

const ListarticlesRTK= lazy(() => import('./components/client/articlesRTK/ListArticlesRTK'));

const ListarticlesRTKComp= lazy(() => import('./components/client/articlesRTKcomp/ListArticlesRTKcomp'));
*/

import Listarticles from './components/admin/articles/Listarticles'
import Listcategories from './components/admin/categories/Categoriesappadmin'
import Listscategories from './components/admin/scategories/Listscategories'
import ListarticlesCards from './components/client/articles/Listarticles'
import Cart from './components/client/panier/Cart'
import NavScrolls from  './components/client/NavScrolls'
import SuccessPayment from  './components/client/panier/successPayment'
import ListarticlesUSP from './components/client/articles/ListArticlesUSP'
import ListarticlesUSPComp from './components/client/articlesUSP/ListArticlesUSP'

import ListarticlesRTK from './components/client/articlesRTK/ListArticlesRTK'

import ListarticlesRTKComp from './components/client/articlesRTKcomp/ListArticlesRTKcomp'

import Login from './components/authentification/login'
import Dashboard from './components/admin/dashboard';
import Logout from './components/authentification/logout'
import Register from './components/client/authentification/register'

import ProtectedRoutes from "./ProtectedRoute";

function App() {
 
  return (
    <> 
     <Router>
     
   {/* <Menu/> */} 
   <NavScrolls/>  
    {/* Utiliser Suspense pour gérer les chargements de composants */}
    <Suspense fallback={<div>Loading...</div>}>
<Routes>
<Route path="/"  element={<ListarticlesCards/>}/>
<Route path="/articles"  element={<Listarticles/>}/>
{/*<Route path="/categories"  element={<Listcategories/>}/>
<Route path="/scategories"  element={<Listscategories/>}/>*/}
<Route path='/cart' element={<Cart/>}/>
<Route path="/successPayment" element={<SuccessPayment/>}/>
<Route path="/listarticlesUSP" element={<ListarticlesUSP/>}/>
<Route path="/listarticlesUSPComp" element={<ListarticlesUSPComp/>}/>

<Route path="/listarticlesRTK" element={<ListarticlesRTK/>}/>
<Route path="/listarticlesRTKcomp" element={<ListarticlesRTKComp/>}/>


<Route element={<ProtectedRoutes/>}>
<Route path="/dashboard" element={<Dashboard/>}/>
<Route path="/categories"  element={<Listcategories/>}/>
<Route path="/scategories"  element={<Listscategories/>}/>
</Route>

<Route path="/login" element={<Login/>}/>
<Route path="/logout" element={<Logout/>}/>
<Route path="/register" element={<Register/>}/>

</Routes>
    </Suspense>
</Router>
    </>
  )
}

export default App
