import axios from "../Api/api";

const USER_API="users"

export const signup=async(user)=> { 
   
    return await axios.post(USER_API + "/register",user);

    }    

export const signin=async(user)=> { 
      return await axios.post(USER_API+"/login", user); 
      } 
