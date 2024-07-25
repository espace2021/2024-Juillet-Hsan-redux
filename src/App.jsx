import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

//import Menu from "./components/admin/Menu";

const Listarticles = lazy(() => import('./components/admin/articles/Listarticles'));
const Listcategories = lazy(() => import('./components/admin/categories/Categoriesappadmin'));
const Listscategories = lazy(() => import('./components/admin/scategories/Listscategories'));
const ListarticlesCards = lazy(() => import('./components/client/articles/Listarticles'));
const Cart = lazy(() => import('./components/client/panier/Cart'));
const NavScrolls = lazy(() => import('./components/client/NavScrolls'));
const SuccessPayment = lazy(() => import('./components/client/panier/successPayment'));
const ListarticlesUSP = lazy(() => import('./components/client/articles/ListArticlesUSP'));
const ListarticlesUSPComp = lazy(() => import('./components/client/articlesUSP/ListArticlesUSP'));

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
<Route path="/categories"  element={<Listcategories/>}/>
<Route path="/scategories"  element={<Listscategories/>}/>
<Route path='/cart' element={<Cart/>}/>
<Route path="/successPayment" element={<SuccessPayment/>}/>
<Route path="/listarticlesUSP" element={<ListarticlesUSP/>}/>
<Route path="/listarticlesUSPComp" element={<ListarticlesUSPComp/>}/>
</Routes>
    </Suspense>
</Router>
    </>
  )
}

export default App
