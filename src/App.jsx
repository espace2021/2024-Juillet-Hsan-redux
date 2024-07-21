import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Listarticles from "./components/admin/articles/Listarticles";
import Listcategories from "./components/admin/categories/Categoriesappadmin";
import Listscategories from "./components/admin/scategories/Listscategories";
import ListarticlesCards from "./components/client/articles/Listarticles";
import Menu from "./components/admin/Menu";


function App() {
 
  return (
    <>
     <Router>
      <Menu/>
<Routes>
<Route path="/"  element={<ListarticlesCards/>}/>
<Route path="/articles"  element={<Listarticles/>}/>
<Route path="/categories"  element={<Listcategories/>}/>
<Route path="/scategories"  element={<Listscategories/>}/>
</Routes>
</Router>
    </>
  )
}

export default App
