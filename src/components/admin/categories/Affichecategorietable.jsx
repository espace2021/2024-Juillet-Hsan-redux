
import { useSelector } from "react-redux"

const Affichecategorietable = () => {
  
    const { categories, isLoading, error } = useSelector((state) => state.storecategories);
   

   
        if (isLoading) return <center>Loading ... </center>
    if (error) return <p>Impossible d'afficher la liste des catégories...</p>
    return (
        <>
      <div className="container">
 {error ? <p>Impossible d'afficher la liste des catégories...</p> : null }
{isLoading===false && categories && categories.map((cat)=>{return <div>{cat.nomcategorie}</div>})}
</div>

         
        </>
    )
}

export default Affichecategorietable