import React from 'react'

import { useDispatch, useSelector } from "react-redux";
import {setPage} from "../../../features/articleSlice";

import "../../../style.css";

const Pagination = () => {

  const dispatch=useDispatch()

  let {page,tot} = useSelector((state)=>state.storearticles);

  return (
    <div className="pagination">
      {/* Pagination controls */}
      <button onClick={()=>{ if (page > 1) {
      dispatch(setPage(page - 1));
    }}} disabled={page === 1}
       
        >
      Previous
      </button>
     
        {Array.from({ length: tot }, (_, index) => (
          <button
         
            key={index}
            onClick={() => dispatch(setPage(index + 1))}
            disabled={page === index + 1}
            className={page === index + 1 ? 'page-link active' : ''}
          >
            {index + 1}
          </button>
        ))}
     
      <button onClick={()=>{ if (page < tot) {
      dispatch(setPage(page + 1));
    }}} disabled={page === tot}>
       
        Next
      </button>
      </div>
   

  )
}

export default Pagination

