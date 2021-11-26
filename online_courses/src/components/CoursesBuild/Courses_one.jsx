/**
 * Create by Kuznetsov Leonid 
 * 26.11.2021
 */ 

import React from 'react';
import { CardGroup, Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


//Routing
import All from './All';
import Design from './Design';
import Development from './Development';
import HR from './HR_Recruting';
import Management from './Management';
import Marketing from './Marketing';

const Courses_one = () =>{
    return (
        <>
            <Router>
                <Navbar collapseOnSelect expand = "lg">
                    <Container>
                        <Navbar.Toggle aria-controls = "responsive-navbar-nav" />
                        <Navbar.Collapse id = "responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link><Link to="/All" className = "linkColor">All</Link></Nav.Link>
                                <Nav.Link><Link to="/Design" className = "linkColor">Design</Link></Nav.Link>
                                <Nav.Link><Link to="/Development" className = "linkColor">Development</Link></Nav.Link>
                                <Nav.Link><Link to="/HR" className = "linkColor">HR & Recruting</Link></Nav.Link>
                                <Nav.Link><Link to="/Management" className = "linkColor">Management</Link></Nav.Link>
                                <Nav.Link><Link to="/Marketing" className = "linkColor">Marketing</Link></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Switch>
                    <Route exact path ="/All" component={All} />
                    <Route exact path ="/Design" component={Design} />
                    <Route exact path ="/Development" component={Development} />
                    <Route exact path ="/HR" component={HR} />
                    <Route exact path ="/Management" component={Management} />
                    <Route exact path="/Marketing" component={Marketing} />
                </Switch>
            </Router>
        </>
    )
}

export default Courses_one
