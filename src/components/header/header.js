import { React } from "react";
import Navbar from 'react-bootstrap/Navbar'
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
const Header = () => {    
    return (
        <header className="header">
            <Navbar bg="primary" variant="dark">
            <Container>
            <Navbar.Brand href="/">Конвертер валют</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Главная</Nav.Link>
              <Nav.Link href="/current-exchange-rate/">Актуальный курс валют</Nav.Link>
            </Nav>
            </Container>
          </Navbar>
                        
        </header>
    )
    
}


export default Header