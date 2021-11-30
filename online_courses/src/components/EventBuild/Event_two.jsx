/**
 * Create by Kuznetsov Leonid 
 * 30.11.2021
 */ 
import React from 'react'
import { CardGroup, Container, Card, Accordion } from 'react-bootstrap'


const Event_two = () =>{
    return (
        <>
            <div className = "Event_two">
                <Container>
                    <CardGroup>
                        <Card className = "Car-bg">
                            <h1 className = "Card-ittem-head">We will talk about:</h1>
                            <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className = "Accord-head"><red>Theme 1.</red>&ensp;Aliquet lectus urna viverra in odio.</Accordion.Header>
                                <Accordion.Body className = "Accord-body">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header className = "Accord-head"><red>Theme 2.</red>&ensp;Orci commodo, viverra orci mollis ut euismod.</Accordion.Header>
                                <Accordion.Body className = "Accord-body" > 
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header className = "Accord-head"><red>Theme 3.</red>&ensp;Sagittis vitae facilisi rutrum amet mauris quisque vel.</Accordion.Header>
                                <Accordion.Body className = "Accord-body">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header className = "Accord-head"><red>Theme 4.</red>&ensp;In id dolor quis nunc, urna hendrerit pharetra.</Accordion.Header>
                                <Accordion.Body className = "Accord-body">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            </Accordion>
                        </Card>
                        <Card className = "Car-bg" style = {{'padding-top':'20px'}}>
                            <Container>
                                <p className = "time-price">TIME</p>
                                <h6 className = "date-free">August 5, 11:00 – 14:00</h6>
                                <p className = "gray-txt">Metus turpis sit lorem lacus, in elit tellus lacus.</p>
                                <br/>
                                <p className = "time-price">Price</p>
                                <h6 className = "date-free">Free</h6>
                                <p className = "gray-txt">Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique dis.</p>
                                <a className = "Event-two-link-card" href="#">Event on Facebook</a><br />
                                <a className = "Event-two-button-card" href="#">Join the event</a>
                            </Container>
                        </Card>
                    </CardGroup>
                </Container>
            </div>
        </>
    )
}

export default Event_two