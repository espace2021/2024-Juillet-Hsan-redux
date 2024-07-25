import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import {setSearchTerm} from '../../../features/articleSlice';

import "../../../style.css";

const Headerarticle = ({setSearchParams}) => {

  const dispatch=useDispatch()
  
  let {page,limit,searchTerm} = useSelector((state)=>state.storearticles);

  const handlesearchTermChange = (event) => {
    setSearchParams({ page, limit, searchTerm: event.target.value });
    dispatch(setSearchTerm(event.target.value))
  };

  return (
    
  <div className="search-container">
            <i className="fa-solid fa-search"></i>
            <input
        type="text"
        value={searchTerm}
        onChange={(event)=>handlesearchTermChange(event)}
        placeholder="Rechercher des articles..."
        className="search-input"
            />
          </div>
        

  )
}

export default Headerarticle
