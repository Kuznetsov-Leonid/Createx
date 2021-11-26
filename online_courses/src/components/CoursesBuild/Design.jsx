/**
 * Create by Kuznetsov Leonid 
 * 26.11.2021
 */ 

import React from 'react';
import { CardGroup, Container, Card, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import p6 from './p6.png';
import p8 from './p8.png';



const Design = () =>{
    return (
        <>
            <Container>
                <CardGroup>
                    <Card className = "m-3 bord">
                            <Card.Img variant="top" src={p6} />
                            <Card.Body>
                                <Card.Title className = "title-text-card">User Experience. Human-centered Design</Card.Title>
                                    <Card.Text className = "proff-design">
                                        Design
                                    </Card.Text>
                                    <Card.Text className = "prise-text">
                                        <red>$240</red> | by Cody Fisher
                                    </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className = "m-3 bord">
                                <Card.Img variant="top" src={p8} />
                                    <Card.Body>
                                        <Card.Title className = "title-text-card">Graphic Design Basic</Card.Title>
                                        <Card.Text className = "proff-design">
                                            Design
                                        </Card.Text>
                                        <Card.Text className = "prise-text">
                                            <red>$500</red> | by Guy Hawkins
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                </CardGroup>
            </Container>
        </>
    )
}

export default Design
