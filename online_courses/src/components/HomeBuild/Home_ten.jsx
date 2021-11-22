/**
 * Create by Kuznetsov Leonid 
 * 21.11.2021
 */ 
import React from 'react';
import { Container, Card, Form, Button, Accordion, CardGroup } from 'react-bootstrap';
import imgTen from './imgTen.png';

const Home_ten = () =>{
    return (
        <>
            <div className = "Home_ten">
            <Container>
                    <CardGroup>
                        <Card className = "Car-bg" style  = {{'align-items': 'center', 'margin': '45px 0px 0px 0px'}}>
                            <h6 id = "DMA">Don’t miss anything</h6>
                            <h1 id = "STCS">Subscribe to the Createx School announcements</h1>
                            <Form style = {{'display': 'inline', 'width': '422px'}}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Your working email" />
                                    <Button  
                                        href="#" 
                                        variant="outline-light"
                                        className = "mr-2 Get-con Button-header"
                                        style = {{'margin-left': '16px'}}>
                                        Subscribe
                                    </Button>
                                </Form.Group>
                            </Form>
                        </Card>
                        <Card className = "Car-bg" style = {{'align-items': 'center'}}>
                            <img className = "img-location-ten-2" src={imgTen} alt="." />
                        </Card>
                    </CardGroup>
                </Container>
                
                
            </div>
        </>
    )
}

export default Home_ten