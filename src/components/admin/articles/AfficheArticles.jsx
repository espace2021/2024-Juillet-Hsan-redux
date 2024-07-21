import React from 'react'



import {  useSelector } from "react-redux";



const AfficheArticles = () => {


 
  const {articles,isLoading,error} = useSelector((state)=>state.storearticles);
 
 console.log(articles)
return (
<div className="container">
{isLoading===false && articles && articles.map((article)=>{return <div>{article.designation}</div>})}
</div>

  )
}

export default AfficheArticles
