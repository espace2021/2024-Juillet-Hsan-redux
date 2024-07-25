import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getArticlesPagination ,setPage, setLimit,setSearchTerm} from '../../../features/articleSlice';
import AfficheArticles from './AfficheArticles';
import "../../../style.css";

const Listarticles = () => {

  const dispatch = useDispatch();

  let {tot,page,limit,searchTerm} = useSelector((state)=>state.storearticles);
 
  const [searchParams, setSearchParams] = useSearchParams();


  useEffect(() => {
    dispatch(getArticlesPagination());
  }, [dispatch, searchParams, page, limit, searchTerm]);

  const handlePageChange = (newPage) => {
    setSearchParams({ page: newPage, limit, searchTerm });
    dispatch(setPage(newPage))
  };

  const handleLimitChange = (newLimit) => {
    setSearchParams({ page, limit: newLimit, searchTerm });
    dispatch(setLimit(newLimit))
  };

  const handlesearchTermChange = (event) => {
    setSearchParams({ page, limit, searchTerm: event.target.value });
    dispatch(setSearchTerm(event.target.value))
  };


  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handlesearchTermChange}
        placeholder="searchTerm désignation"
      />

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
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'left' }}>
          <div className="pagination">
      {/* Pagination controls */}
      <button onClick={()=>{ if (page > 1) {handlePageChange(page - 1) }}} disabled={page === 1}
       
        >
      Previous
      </button>
     
        {Array.from({ length: tot }, (_, index) => (
          <button
         
            key={index}
            onClick={() => handlePageChange(index + 1)}
            disabled={page === index + 1}
            className={page === index + 1 ? 'page-link active' : ''}
          >
            {index + 1}
          </button>
        ))}
     
      <button onClick={()=>{ if (page < tot) {
      handlePageChange(page + 1)
    }}} disabled={page === tot}>
       
        Next
      </button>
      </div>
   
          </div>
        </div>
      </div>
    
  );
};

export default Listarticles;
