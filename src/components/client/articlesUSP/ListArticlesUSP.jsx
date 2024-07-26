import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getArticlesPagination ,setLimit} from '../../../features/articleSlice';
import AfficheArticles from './AfficheArticles';
import Pagination from './Pagination';
import Headerarticle from './Headerarticle';


const Listarticles = () => {

  const dispatch = useDispatch();

  let {page,limit,searchTerm} = useSelector((state)=>state.storearticles);
 
  const [searchParams, setSearchParams] = useSearchParams();


  useEffect(() => {
    dispatch(getArticlesPagination());
  }, [dispatch, searchParams, page, limit, searchTerm]);



  const handleLimitChange = (newLimit) => {
    setSearchParams({ page, limit: newLimit, searchTerm });
    dispatch(setLimit(newLimit))
  };

  return (
    <div>
     <div className="table-container-header">
     <Headerarticle setSearchParams={setSearchParams} />
    </div>
    
    <AfficheArticles/> 
  
      <div style={{ "display": "flex", "justifyContent": "right"}}> 
      <div className="limit-selector-container">
                 
                <label>
                    Afficher &nbsp;
                    <select
                value={limit}
                onChange={(event) => handleLimitChange(event.target.value)}
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={100}>100</option>
              </select>
              </label>
                  </div>
     <Pagination setSearchParams={setSearchParams} />
      </div>    
    </div>
    
  );
};

export default Listarticles;
