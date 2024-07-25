import React from 'react'

import { useDispatch, useSelector } from "react-redux";
import {setPage} from '../../../features/articleSlice';

import "../../../style.css";

const Pagination = ({setSearchParams}) => {

  const dispatch=useDispatch()

  let {page,tot,limit,searchTerm} = useSelector((state)=>state.storearticles);

  const handlePageChange = (newPage) => {
    setSearchParams({ page: newPage, limit, searchTerm });
    dispatch(setPage(newPage))
  };
  
  return (
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
   

  )
}

export default Pagination

