import React,{useEffect} from 'react'
import { useDispatch } from "react-redux";
import {getCategories} from "../../../features/categorieSlice";
import Affichecategorietable from './Affichecategorietable';


const Categoriesappadmin = () => {
    const dispatch = useDispatch();
useEffect(() => {
dispatch(getCategories());
},[])
  return (
    <div>
     
      <Affichecategorietable/>
    </div>
  )
}

export default Categoriesappadmin