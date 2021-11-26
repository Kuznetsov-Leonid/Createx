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

const All = () =>{
    return (
        <>
            <Container>
                        <CardGroup>
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
                                <Card className = "m-3 bord">
                                    <Card.Img variant="top" src={p2} />
                                    <Card.Body>
                                        <Card.Title className = "title-text-card">Prduct Management Fundamentals</Card.Title>
                                        <Card.Text className = "proff-management">
                                            Management
                                        </Card.Text>
                                        <Card.Text className = "prise-text">
                                            <red>$480</red> | by Marvin McKinney
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className = "m-3 bord">
                                    <Card.Img variant="top" src={p3} />
                                    <Card.Body>
                                        <Card.Title className = "title-text-card">Prduct Management Fundamentals</Card.Title>
                                        <Card.Text className = "proff-hr">
                                            HR & Recruting
                                        </Card.Text>
                                        <Card.Text className = "prise-text">
                                            <red>$200</red> | HR  Management and Analytics
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                        </CardGroup>
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
                                    <Card.Img variant="top" src={p5} />
                                    <Card.Body>
                                        <Card.Title className = "title-text-card">Human Resources – Selection and Recruitment</Card.Title>
                                        <Card.Text className = "proff-hr">
                                            HR & Recruting
                                        </Card.Text>
                                        <Card.Text className = "prise-text">
                                            <red>$150</red> | by Kathryn Murphy
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
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
                        </CardGroup>
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
                                <Card className = "m-3 bord">
                                    <Card.Img variant="top" src={p9} />
                                    <Card.Body>
                                        <Card.Title className = "title-text-card">Business Development Management</Card.Title>
                                        <Card.Text className = "proff-management">
                                            Management
                                        </Card.Text>
                                        <Card.Text className = "prise-text">
                                            <red>$400</red> | by Dianne Russell
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                        </CardGroup>
                </Container>
        </>
    )
}

export default All
