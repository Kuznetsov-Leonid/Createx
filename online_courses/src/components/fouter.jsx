/**
 * Create by Kuznetsov Leonid 
 * 25.11.2021
 */ 
import React from 'react';
import { CardGroup, Container, Card, Button, Form } from 'react-bootstrap';
import Logo from '../img/WhiteLogo.png';
import Youtube from '../img/Subtract.png';
import Facebook from '../img/Vector-0.png';
import Twitter from '../img/Vector-1.png';
import Telegram from '../img/Vector-2.png';
import Instagram from '../img/Vector-3.png';
import In from '../img/Vector-4.png';
import Mail from '../img/Mail.png';
import Phone from '../img/Phone.png';
import Heart from '../img/heart.png';


const fouter = () =>{
    return (
        <>
            <div className = "Background-color-fouter">
                <Container style = {{'padding': '80px 0px 10px 0px'}}>
                    <CardGroup>
                        <Card className = "Car-bg">
                            <div>
                                <img style = {{'width':'130px', 'marginBottom':'20px'}} src={Logo} alt="." />
                            </div>
                            <div>
                                <p className = "Card-on-text">Createx Online School is a leader in online studying. We have lots of courses and programs from the main market experts. We provide relevant approaches to online learning, internships and employment in the largest companies in the country.</p>
                            </div>
                            <div>
                                <Button className = "pg-0" variant="link" href="#"><img className = "img-button-link Fa" src={Facebook} alt="." /></Button>
                                <Button className = "pg-0" variant="link" href="#"><img className = "img-button-link Tw" src={Twitter} alt="." /></Button>
                                <Button className = "pg-0" variant="link" href="#"><img className = "img-button-link You" src={Youtube} alt="." /></Button>
                                <Button className = "pg-0" variant="link" href="#"><img className = "img-button-link Tel" src={Telegram} alt="." /></Button>
                                <Button className = "pg-0" variant="link" href="#"><img className = "img-button-link Inst" src={Instagram} alt="." /></Button>
                                <Button className = "pg-0" variant="link" href="#"><img className = "img-button-link In" src={In} alt="." /></Button>
                            </div>
                        </Card>
                        <Card className = "Car-bg">
                            <Container>
                                <h6 className = "Title-card">SITE MAP</h6>
                                <Button className = "button-link-card" variant="link"><p>About Us</p></Button>
                                <Button className = "button-link-card" variant="link"><p>Courses</p></Button>
                                <Button className = "button-link-card" variant="link"><p>Events</p></Button>
                                <Button className = "button-link-card" variant="link"><p>Blog</p></Button>
                                <Button className = "button-link-card" variant="link"><p>Contacts</p></Button>
                            </Container>
                        </Card>
                        <Card className = "Car-bg">
                            <h6 className = "Title-card">COURSES</h6>
                            <Button className = "button-link-card" variant="link"><p>Marketing</p></Button>
                            <Button className = "button-link-card" variant="link"><p>Management</p></Button>
                            <Button className = "button-link-card" variant="link"><p>HR & Recruting</p></Button>
                            <Button className = "button-link-card" variant="link"><p>Design</p></Button>
                            <Button className = "button-link-card" variant="link"><p>Development</p></Button>
                            
                        </Card>
                        <Card className = "Car-bg">
                            <h6 className = "Title-card">CONTACT US</h6>
                            <p className = "Card-three-txt"><img className = "Ph-1" src={Phone} alt="." />(405) 555-0128</p>
                            <p className = "Card-three-txt"><img className = "Ma-1" src={Mail} alt="." />hello@createx.com</p>
                        </Card>
                        <Card className = "Car-bg">
                            <h6 className = "Title-card">SIGN UP TO OUR NEWSLETTER</h6>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control className = "form-area-style" type="email" placeholder="Email address" />
                                    <Button type="submit">Submit</Button>
                                </Form.Group>
                            </Form>
                            <p className = "Card-on-text">
                                *Subscribe to our newsletter to receive communications and early updates from Createx SEO Agency.
                            </p>
                            <a className = "go-to-up" style = {{textDecoration:'none'}} href = "#">GO TO TOP</a>
                        </Card>
                    </CardGroup>
                    <CardGroup style = {{'textAlign':'center'}}>
                        <Card className = "Car-bg" >
                            <p className = "fouter-copir-txt">
                                &copy;All rights reserved.&ensp; Made with
                                <img src={Heart} alt="." />
                                by Createx Studio.&ensp;
                                Developed by Leonid Kuznetsov.&ensp;
                                Email address: &ensp; Orlan1211@yahoo.com
                                </p>
                        </Card>
                    </CardGroup>
                </Container>
            </div>
        </>
    )
}

export default fouter
