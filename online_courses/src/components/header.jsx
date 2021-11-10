/**
 * Create by Kuznetsov Leonid 
 * 09.11.2021
 */ 
import React, { useState } from 'react';
import { Button, Container, Nav, Navbar, Form, NavDropdown, Modal } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from '../img/logo.png';
import Icon_men from '../img/Icon_men.png';

//Routing
import Home from '../pajes/Home';
import AboutUs from '../pajes/about_us';
import Contacts from '../pajes/contacts';
import Courses from '../pajes/courses';
import Events from '../pajes/event';
import Blog from '../pajes/blog';
import NotFound from '../pajes/not_found';


const header = () =>{

    //Скрипты модального окна
    /**
     * const [show, setShow] = useState(false);
     * const handleClose = () => setShow(false);
     * const handleShow = () => setShow(true); 
     * */

    return (
        <>
        <Router> 
            <Navbar  bg="secondary" sticky = "top" collapseOnSelect expand = "lg">
                <Container>
                    <Navbar.Brand href="/">
                        <img 
                            src = {logo}
                            className = "d-inline-block align-top Logo-header"
                            alt = "Createx"
                        />{''}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls = "responsive-navbar-nav" />
                    <Navbar.Collapse id = "responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link to="/aboutUs" className = "linkColor">About Us</Link></Nav.Link>
                            <Nav.Link><Link to="/courses" className = "linkColor">Courses</Link></Nav.Link>
                            <Nav.Link><Link to="/events" className = "linkColor">Events</Link></Nav.Link>
                            <Nav.Link><Link to="/blog" className = "linkColor">Blog</Link></Nav.Link>
                            <Nav.Link><Link to="/contacts" className = "linkColor">Contacts</Link></Nav.Link>
                        </Nav>
                        <Form>
                            <Container>
                            <Button variant="outline-dark" className = "mr-2 Get-con Button-header" /*onClick={handleShow}*/>
                                Get consultation
                            </Button>
                            <Button variant="outline-dark" className = "mr-2 Button-header" /*onClick={handleShow}*/>
                                <img src={Icon_men} alt="U+0263A" />
                                Log in/Register
                            </Button>
                            </Container>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Routes>
                <Route exact path ="/" element={<Home/>} />
                <Route exact path ="/aboutUs" element={<AboutUs/>} />
                <Route exact path ="/courses" element={<Courses/>} />
                <Route exact path ="/events" element={<Events/>} />
                <Route exact path ="/blog" element={<Blog/>} />
                <Route exact path ="/contacts" element={<Contacts/>} />
                <Route exact path="" element={<NotFound/>} />
            </Routes>
        </Router>
        </>
        /*Ниже будет распологаться модальное окно*/
    )
}

export default header