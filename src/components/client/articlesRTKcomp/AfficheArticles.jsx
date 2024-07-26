import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../features/cartSlice";
import { useGetItemsQuery } from '../../../features/rtkQueryArticle';
import { useNavigate } from "react-router-dom";

import "./styleCard.css"

const AfficheArticles = () => {

  const { page, limit, searchTerm} = useSelector((state) => state.articleRTK);
  const { data, error, isLoading } = useGetItemsQuery({ page, limit, filter: searchTerm });
console.log(data)
 
const dispatch = useDispatch();
let navigate=useNavigate();


const handleAddToCart = (art) => {
  dispatch(addToCart(art));
  navigate("/cart");
};


return (
  <div className="container">
    <div className="row">
      {isLoading ? <center>Loading ....</center> : null}
      {error ? <center>Error ....</center> : null}
      {!isLoading && data.products && data.products.map((article, ind) => {
        return (
          <div className="col-xl-3 col-lg-6 col-md-2 col-sm-6 col-12 mb-5" key={ind}>
            <div className='card'>
              {article.imageart && <img src={article.imageart} alt={article.reference} />}
              <div className='card-content'>
                <h1 className='card-title'>{article.reference}</h1>
                <p className='card-description'>{article.designation.substr(0, 20)}</p>
                <h1 className='card-title'>Prix : {article.prix} TND</h1>
                <button className='card-button' disabled={article.qtestock <= 1} onClick={() => handleAddToCart(article)}>
                  <i className="fa-solid fa-cart-shopping"></i> Add to cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);
}

export default AfficheArticles
