import axios from "../Api/axios";
const ARTICLE_API="articles"

export const fetcharticles=async()=> {
return await axios.get(ARTICLE_API);
}
export const fetcharticleById=async(articleId)=> {
    return await axios.get(ARTICLE_API + '/' + articleId);
    }
export const deletearticle=async(articleId) =>{
    return await axios.delete(ARTICLE_API + '/' + articleId);
    }
export const addarticle=async(article)=> {
    return await axios.post(ARTICLE_API, article);
    }
export const editarticle=(article) =>{
    return axios.put(ARTICLE_API + '/' + article._id, article);
    }
export const fetcharticlesPagination=async(page,limit,searchtext)=> {
        
        return await axios.get(ARTICLE_API + `/art/pagination?filtre=${searchtext}&page=${page}&pageSize=${limit}`)
        }

export const updateQuantity = async (lineOrder) => {
    
            const path = "qty/";
            let result = [];
    //La fonction Promise.all() est utilisée pour attendre que toutes les requêtes se terminent simultanément.
            
            await Promise.all(lineOrder.map(async (line) => {
                try {
                    const response = await axios.put(`${ARTICLE_API}/${path}${line.articleID}`, {
                        quantity: line.quantity
                    }, {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
                    result.push(response.data);
                } catch (error) {
                    console.error("Error updating quantity:", error);
                }
            }));
        
            return result;
        }
    