import {useState,useEffect } from 'react'
import { useNavigate,Link} from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { login } from "../../features/authSlice"

import './AuthForm.css';

const AuthForm = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const {isSuccess,user,isActive} = useSelector((state) =>state.auth);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => { 
    if (isSuccess && user && isActive) { 
        if(user.role==="admin") navigate('/dashboard');
        else { 
              navigate('/')}
      }
  }, [ navigate,isSuccess, user,isActive])

const handleSubmit=(event)=>{
event.preventDefault();

const objetuser = {
email: email,
password :password
}; 
dispatch(login(objetuser)) 
};


  return (
    <div className="auth-container">
    <div className="auth-form-container">
      <form onSubmit={handleSubmit} className="auth-form">
        <h2>Login</h2>
        <div className="input-group">
          <div className="input-label">Email</div>
          <div className="input-wrapper">
            <i className="fas fa-envelope"></i>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="input-group">
        <div className="input-label">Password</div>
          <div className="input-wrapper">
            <i className="fas fa-lock"></i>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <button type="submit">Log In</button>
      </form>
      
      <Link href="#" to="/register">
                  {"Don't have an account? Sign Up"}
      </Link>

    </div>
    </div>
  );
};

export default AuthForm;
