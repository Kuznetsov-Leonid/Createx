/**
 * Create by Kuznetsov Leonid 
 * 26.11.2021
 */ 

import React from 'react';
import { CardGroup, Container, Card, Button } from 'react-bootstrap';
import p1 from './p1.png';
import p2 from './p2.png';
import p3 from './p3.png';
import p4 from './p4.png';
import p5 from './p5.png';
import p6 from './p6.png';
import p7 from './p7.png';
import p8 from './p8.png';
import p9 from './p9.png';

const Marketing = () =>{
    return (
        <>
            <Container>
                <CardGroup>
                                <Card className = "m-3 bord">
                                    <Card.Img variant="top" src={p7} />
                                    <Card.Body>
                                        <Card.Title className = "title-text-card">Brand Management & PR Communications</Card.Title>
                                        <Card.Text className = "proff-marketing">
                                            Marketing
                                        </Card.Text>
                                        <Card.Text className = "prise-text">
                                            <red>$530</red> |  by Kristin Watson
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className = "m-3 bord">
                                    <Card.Img variant="top" src={p1} />
                                    <Card.Body>
                                        <Card.Title className = "title-text-card">The Ultimate Google Ads Training Course</Card.Title>
                                        <Card.Text className = "proff-marketing">
                                            Marketing
                                        </Card.Text>
                                        <Card.Text className = "prise-text">
                                            <red>$100</red> | by Jerome Bell
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                </CardGroup>
            </Container>
        </>
    )
}

export default Marketing
