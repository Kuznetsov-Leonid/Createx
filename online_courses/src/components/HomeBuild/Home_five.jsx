/**
 * Create by Kuznetsov Leonid 
 * 12.11.2021
 */ 
import React from 'react';
import { Container, Card, Form, Button, Accordion, CardGroup } from 'react-bootstrap';

const Home_five = () =>{
    return (
        <>
            <div className = "Home_five">
                <Container>
                    <CardGroup>
                        <Card style = {{'text-align': 'center'}} className = "Car-bg Home-five-margin">
                            <h6 className = "oe">Our Events</h6>
                            <h1 className = "lw">Lectures & workshops</h1>
                        </Card>
                    </CardGroup>
                    <CardGroup style = {{'margin-top': '60px'}}>
                        <Card style = {{'border': 'none', 'text-align': 'center'}}>
                            <h1 className = "num">05</h1>
                            <p className = "Home_five-mounth">August</p>
                            <p className ="Home_five-time">1:00 – 14:00</p>
                        </Card>
                        <Card style = {{'border': 'none'}}>
                            <p className = "Home_five-txt-1">Formation of the organizational structure of the company in the face of uncertainty </p>
                            <p className = "Home_five-txt-2">Onine workshop</p>
                        </Card>
                        <Card style = {{'border': 'none', 'text-align': 'center'}}>
                            <Form className = "Home-five-button">
                                <Button variant="outline-danger">View more</Button>
                            </Form>
                        </Card>
                    </CardGroup>
                    <CardGroup style = {{'margin-top': '24px'}}>
                        <Card style = {{'border': 'none', 'text-align': 'center'}}>
                            <h1 className = "num">24</h1>
                            <p className = "Home_five-mounth">July</p>
                            <p className ="Home_five-time">11:00 – 12:30</p>
                        </Card>
                        <Card style = {{'border': 'none'}}>
                            <p className = "Home_five-txt-1">Formation of the organizational structure of the company in the face of uncertainty</p>
                            <p className = "Home_five-txt-2">Onine master-class</p>
                        </Card>
                        <Card style = {{'border': 'none', 'text-align': 'center'}}>
                            <Form className = "Home-five-button">
                                <Button variant="outline-danger">View more</Button>
                            </Form>
                        </Card>
                    </CardGroup>
                    <CardGroup style = {{'margin-top': '24px'}}>
                        <Card style = {{'border': 'none', 'text-align': 'center'}}>
                            <h1 className = "num">16</h1>
                            <p className = "Home_five-mounth">July</p>
                            <p className ="Home_five-time">10:00 – 13:00</p>
                        </Card>
                        <Card style = {{'border': 'none'}}>
                            <p className = "Home_five-txt-1">Formation of the organizational structure of the company in the face of uncertainty</p>
                            <p className = "Home_five-txt-2">Onine lecture</p>
                        </Card>
                        <Card style = {{'border': 'none', 'text-align': 'center'}}>
                            <Form className = "Home-five-button">
                                <Button variant="outline-danger">View more</Button>
                            </Form>
                        </Card>
                    </CardGroup>
                    <CardGroup style = {{'margin-top': '65px'}}>
                        <Card className = "Car-bg" style = {{'text-align': 'center', 'margin-bottom': '60px'}}>
                            <h3 className = "dywm">Do you want more? 
                            <Button 
                                variant="outline-light"
                                className = "mr-2 Get-con Button-header"
                                style = {{'margin-left': '16px'}}>
                                Explore all events
                            </Button></h3>
                        </Card>
                    </CardGroup>
                </Container>
            </div>
        </>
    )
}

export default Home_five