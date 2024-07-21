import React from 'react'

import "../../../style.css";

const Headerarticle = ({searchText,handleSearchChange}) => {
  return (
    
  <div className="search-container">
            <i className="fa-solid fa-search"></i>
            <input
              type="text"
              value={searchText}
              onChange={handleSearchChange}
              placeholder="Rechercher des articles..."
              className="search-input"
            />
          </div>
        

  )
}

export default Headerarticle
