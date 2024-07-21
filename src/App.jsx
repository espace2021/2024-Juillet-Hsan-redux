import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Listarticles from "./components/admin/articles/Listarticles";
import Listcategories from "./components/admin/categories/Categoriesappadmin";
import Listscategories from "./components/admin/scategories/Listscategories";
import ListarticlesCards from "./components/client/articles/Listarticles";
//import Menu from "./components/admin/Menu";

import Cart from './components/client/panier/Cart';
import NavScrolls from './components/client/NavScrolls';

function App() {
 
  return (
    <> 
     <Router>
     
   {/* <Menu/> */} 
   <NavScrolls/>  
<Routes>
<Route path="/"  element={<ListarticlesCards/>}/>
<Route path="/articles"  element={<Listarticles/>}/>
<Route path="/categories"  element={<Listcategories/>}/>
<Route path="/scategories"  element={<Listscategories/>}/>
<Route path='/cart' element={<Cart/>}/>
</Routes>
</Router>
    </>
  )
}

export default App
