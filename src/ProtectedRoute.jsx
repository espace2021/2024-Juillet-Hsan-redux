import { Outlet, Navigate } from 'react-router-dom'
import Menu from './components/admin/Menu'
import { useSelector } from "react-redux";

const ProtectedRoutes = () => {
    const {isSuccess,user,isActive} = useSelector((state) =>state.auth);
    let token=localStorage.getItem("CC_Token");
     console.log("token est " + token)
    return(
    token!=null && isSuccess && user && isActive? <><Menu/><Outlet/></>: <Navigate to="/login"/>
    )
    }
    
export default ProtectedRoutes
