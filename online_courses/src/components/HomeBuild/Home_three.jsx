/**
 * Create by Kuznetsov Leonid 
 * 11.11.2021
 */ 
import React from 'react';
import { Container, Card, Form, Button, Accordion, CardGroup } from 'react-bootstrap';
import Img1 from './image1.png';
import Img2 from './image2.png';
import Img3 from './image3.png';
import Img4 from './image4.png';
import Img5 from './image5.png';
import Img6 from './image6.png';



const Home_three = () =>{
    return (
        <>
            <div className = "Home_three">
                <Container>
                    <CardGroup>
                        <Card style = {{'margin-bottom': '20px'}} className = "Car-bg Car-mar">
                            <CardGroup>
                                <Card className = "Car-bg">
                                    <h6 className = "rtl">Ready to learn?</h6>
                                    <h1 style={{'display': 'inline'}} 
                                    className = "fc">
                                        Featured Courses 
                                    </h1>
                                </Card>
                                <Card className = "Car-bg">
                                    <Form style = {{'text-align':'end', 'padding-top': '60px'}}>
                                        <Button  
                                            href="#" 
                                            className = "mr-2 Button-header" 
                                            variant="outline-danger">
                                            View all courses
                                        </Button>
                                    </Form>
                                </Card>
                            </CardGroup>
                        </Card>
                    </CardGroup>
                    <CardGroup className = "Home_three">
                        <Card style = {{'margin-bottom': '20px'}} className = "Car-bg Car-mar">
                            <CardGroup className = "card-img-text-size">
                                <Card>
                                    <img src={Img1} alt="." />
                                </Card>
                                <Card className = "card-comp-lay">
                                    <Form>
                                        <Button variant="info" active>Marketing</Button>
                                    </Form>
                                    <p className = "h-t-txt">The Ultimate Google Ads Training Course</p>
                                    <p><red>100$</red> | by Jerome Bell</p>
                                </Card>
                            </CardGroup>
                        </Card>
                        <Card style = {{'margin-bottom': '20px'}} className = "Car-bg Car-mar">
                            <CardGroup className = "card-img-text-size">
                                <Card>
                                    <img src={Img2} alt="." />
                                </Card>
                                <Card className = "card-comp-lay">
                                    <Form>
                                        <Button variant="primary" active>Management</Button>
                                    </Form>
                                    <p className = "h-t-txt">The Ultimate Google Ads Training Course</p>
                                    <p><red>100$</red> | by Jerome Bell</p>
                                </Card>
                            </CardGroup>
                        </Card>
                    </CardGroup>
                    <CardGroup>
                        <Card style = {{'margin-bottom': '20px'}} className = "Car-bg Car-mar">
                            <CardGroup className = "card-img-text-size">
                                <Card>
                                    <img src={Img3} alt="." />
                                </Card>
                                <Card className = "card-comp-lay">
                                    <Form>
                                        <Button variant="warning" active>HR & Recruting</Button>
                                    </Form>
                                    <p className = "h-t-txt">The Ultimate Google Ads Training Course</p>
                                    <p><red>100$</red> | by Jerome Bell</p>
                                </Card>
                            </CardGroup>
                        </Card>
                        <Card style = {{'margin-bottom': '20px'}} className = "Car-bg Car-mar">
                            <CardGroup className = "card-img-text-size">
                                <Card>
                                    <img src={Img4} alt="." />
                                </Card>
                                <Card className = "card-comp-lay">
                                    <Form>
                                        <Button variant="info" active>Marketing</Button>
                                    </Form>
                                    <p className = "h-t-txt">The Ultimate Google Ads Training Course</p>
                                    <p><red>100$</red> | by Jerome Bell</p>
                                </Card>
                            </CardGroup>
                        </Card>
                    </CardGroup>
                    <CardGroup>
                        <Card style = {{'margin-bottom': '20px'}} className = "Car-bg Car-mar">
                            <CardGroup className = "card-img-text-size">
                                <Card>
                                    <img src={Img5} alt="." />
                                </Card>
                                <Card className = "card-comp-lay">
                                    <Form>
                                        <Button variant="primary" active>Management</Button>
                                    </Form>
                                    <p className = "h-t-txt">The Ultimate Google Ads Training Course</p>
                                    <p><red>100$</red> | by Jerome Bell</p>
                                </Card>
                            </CardGroup>
                        </Card>
                        <Card style = {{'margin-bottom': '20px'}} className = "Car-bg Car-mar">
                            <CardGroup className = "card-img-text-size">
                                <Card>
                                    <img src={Img6} alt="." />
                                </Card>
                                <Card className = "card-comp-lay"> 
                                    <Form>
                                        <Button variant="danger" active>Design</Button>
                                    </Form>
                                    <p className = "h-t-txt">The Ultimate Google Ads Training Course</p>
                                    <p><red>100$</red> | by Jerome Bell</p>
                                </Card>
                            </CardGroup>
                        </Card>
                    </CardGroup>
                </Container>
            </div>
        </>
    )
}

export default Home_three