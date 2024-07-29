import React from 'react'
import {Nav, Navbar,Container} from 'react-bootstrap';
import {Link } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Menu = () => {

    const navigate = useNavigate();
    const {cartTotalQuantity} = useSelector((state) => state.storecart);

    const {isLoggedIn,user} = useSelector((state) =>state.auth);
  
return (
    <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand >E-Shopping</Navbar.Brand>

    <Nav>

    <Nav.Link as={Link} to="/">Home</Nav.Link>
    </Nav>
    <Nav>
    { isLoggedIn===true ?<> 
  <img 
   src={user.avatar} 
   alt="Avatar"
   style={{ "borderRadius": "50%"}}
   width="30"
   height="30"
   />
   {" "}
  {user.name} 
  <button onClick={()=>{navigate("/logout")}}> <i className="fa fa-sign-out"></i> logout </button>
  </>
    : <button onClick={()=>{navigate("/login")}}> <i className="fa fa-user"></i> login </button>
    }
</Nav>
<Nav>
    <Button variant="danger"  onClick={()=>{navigate("/cart")}} >
              
    <i className="fa-solid fa-cart-shopping"></i>
            <Badge bg="dark">
            {cartTotalQuantity>0?cartTotalQuantity:0}
             </Badge>
    </Button>

    
    </Nav>
    </Container>
  </Navbar>

  )
}

export default Menu
