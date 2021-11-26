/**
 * Create by Kuznetsov Leonid 
 * 26.11.2021
 */ 

import React from 'react';
import { CardGroup, Container, Card, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const LableCourses = () =>{
    return (
        <>
            <div>
                <Container>
                    <CardGroup>
                        <Card className = "LableCourses">
                            <h6 className = "EYS">Enjoy your studying!</h6>
                            <h1 className = "OOC">Our online courses</h1>
                        </Card>
                    </CardGroup>
                </Container>
            </div>
        </>
    )
}

export default LableCourses
