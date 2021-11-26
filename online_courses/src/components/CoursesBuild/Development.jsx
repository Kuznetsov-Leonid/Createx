/**
 * Create by Kuznetsov Leonid 
 * 26.11.2021
 */ 

import React from 'react';
import { CardGroup, Container, Card, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import p1 from './p1.png';
import p2 from './p2.png';
import p3 from './p3.png';
import p4 from './p4.png';
import p5 from './p5.png';
import p6 from './p6.png';
import p7 from './p7.png';
import p8 from './p8.png';
import p9 from './p9.png';

const Development = () =>{
    return (
        <>
            <Container>
                <CardGroup>
                    <Card className = "m-3 bord">
                                    <Card.Img variant="top" src={p4} />
                                    <Card.Body>
                                        <Card.Title className = "title-text-card">Highload Software Architecture</Card.Title>
                                        <Card.Text className = "proff-Development">
                                            Development
                                        </Card.Text>
                                        <Card.Text className = "prise-text">
                                            <red>$600</red> | by Brooklyn Simmons
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className = "m-3 bord">
                                    <Card.Img variant="top" src={p4} />
                                    <Card.Body>
                                        <Card.Title className = "title-text-card">Highload Software Architecture</Card.Title>
                                        <Card.Text className = "proff-Development">
                                            Development
                                        </Card.Text>
                                        <Card.Text className = "prise-text">
                                            <red>$600</red> | by Brooklyn Simmons
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className = "m-3 bord">
                                    <Card.Img variant="top" src={p4} />
                                    <Card.Body>
                                        <Card.Title className = "title-text-card">Highload Software Architecture</Card.Title>
                                        <Card.Text className = "proff-Development">
                                            Development
                                        </Card.Text>
                                        <Card.Text className = "prise-text">
                                            <red>$600</red> | by Brooklyn Simmons
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                </CardGroup>
            </Container>
        </>
    )
}

export default Development
