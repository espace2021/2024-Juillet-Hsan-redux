import axios from "../Api/axios";
const CATEGORIE_API="categories"

    export const fetchCategories=async()=> {
        return await axios.get(CATEGORIE_API);
        }
     export const fetchCategorieById=async(categorieId)=> {
        return await axios.get(CATEGORIE_API + '/' + categorieId);
        }
    export const delcategorie=async(categorieId) =>{
        
        return await axios.delete(CATEGORIE_API + '/' + categorieId);
        }
    export const addCategorie=async(categorie)=> { 
       
        return await axios.post(CATEGORIE_API,categorie);
    
        }    
     export const editCategorie=(categorie) =>{ 
       
        return axios.put(CATEGORIE_API + '/' + categorie._id, categorie);
    
        }
