import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPage, setLimit, setSearchTerm } from '../../../features/articleSliceRTK';
import { useSearchParams } from 'react-router-dom';
import AfficheArticles from './AfficheArticles';
import Pagination from './Pagination';
import Headerarticle from './Headerarticle';

const Listarticles = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const { page, limit, searchTerm } = useSelector((state) => state.articleRTK);

 
  useEffect(() => {
    const initialPage = Number(searchParams.get('page')) || 1;
    const initialLimit = Number(searchParams.get('limit')) || 5;
    const initialSearchTerm = searchParams.get('searchTerm') || "";
    dispatch(setPage(initialPage));
    dispatch(setLimit(initialLimit));
    dispatch(setSearchTerm(initialSearchTerm));
  }, [dispatch, searchParams]);

 

  const handleLimitChange = (e) => {
    dispatch(setLimit(Number(e.target.value)));
    dispatch(setPage(1)); // Reset to first page when limit changes
    setSearchParams({ page, limit: e.target.value, searchTerm });
  };

 
 return (
    <div>
    <div className="table-container-header">
    <Headerarticle setSearchParams={setSearchParams} />
   </div>
   
   <AfficheArticles/> 
 
      <div style={{ display: "flex", justifyContent: "right" }}> 
        <div className="limit-selector-container">
          <label>
            Afficher &nbsp;
            <select
              value={limit}
              onChange={(e) => handleLimitChange(e)}
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
