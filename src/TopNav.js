
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const TopNav = () => {
const mode = () =>{
    document.body.classList.toggle('demo')
}
    return (
        <>
        <Navbar expand="lg" id='navbar'>
      <Container>
        <Navbar.Brand href="#" id='head-name' style={{fontWeight:'bold', fontSize:'30px'}}>WeatherApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex">
          <Navbar.Brand href="https://github.com/suraj-raj01" target='_blank'>
          <span className="pi pi-github"></span>
           </Navbar.Brand>
          <Navbar.Brand href="https://www.linkedin.com/in/suraj-kumar-1965b0296/" target='_blank'>
          <span className="pi pi-linkedin"></span>
           </Navbar.Brand>
          <Navbar.Brand >
          <span className="pi pi-sun" onClick={mode} style={{cursor:'pointer'}}></span>
           </Navbar.Brand>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}
export default TopNav;