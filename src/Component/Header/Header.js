import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Group1329 from '../../logos/Group1329.png';
import { Link } from 'react-router-dom';


function Header () {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container className='container'>

          <Link to='/home'> <img src={Group1329} alt="" /></Link>
          

          <Nav className=" me-auto nav-right ">
            <Link to='/home'>Home</Link>
            <Link to='/donate'>Donate</Link>
            <Link to='/event'>Event</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/inservice'>In_Service</Link>
            <Link to='/login'>Login</Link>
          </Nav>

        </Container>
      </Navbar>
    </>
  );
}

export default Header;

