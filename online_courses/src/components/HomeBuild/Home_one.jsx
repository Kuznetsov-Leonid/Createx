/**
 * Create by Kuznetsov Leonid 
 * 10.11.2021
 */ 
import React from 'react';
import { Container, Card, Form, Button, Accordion, CardGroup } from 'react-bootstrap';
import Polygon from './Polygon.png';
import Illustration from './illustration.png';
import Ellipse from './ellipse.png';


const Home_one = () =>{
    return (
        <>
            <div className = "Home_one">
                <Container>
                    <CardGroup style={{'padding-top': '30px'}}>
                        <Card className = "Car-bg">
                            <span className = "Car-textr">
                                <Button href="#" className = "mr-2 Button-home-one" variant="danger">
                                    <img className = "Polygon" src={Polygon} alt="." />
                                </Button>{' '}
                                Play showreel
                            </span><br />
                            <p className = "Car-text-1">Enjoy stadying</p>
                            <p className = "Car-text-1">with Createx</p>
                            <p className = "Car-text-1">Online Courses</p>
                            <Form>
                                <Container>
                                    <Button href="#" className = "mr-2 Button-header" variant="outline-dark">About us</Button>{' '}
                                    <Button href="#" className = "mr-2 Get-con Button-header" variant="outline-dark">Explore courses</Button>
                                </Container>
                            </Form>
                        </Card>
                        <Card className = "Car-bg">
                            <img src={Illustration} alt="none" />
                        </Card>
                    </CardGroup>
                    <CardGroup style={{'padding-top': '10px'}}>
                        <Card className = "Car-bg Car-bg-1">
                            <p>
                                <h1 className = "Car-count" style={{'display': 'inline'}}>1200</h1>
                                <p className = "Car-txt-1" style={{'display': 'inline'}}>Students graduated</p>        
                                <img className = "Car-txt-1" src={Ellipse} alt="." style = {{'paddingLeft': '30px'}} />
                            </p>
                        </Card>
                        <Card className = "Car-bg Car-bg-1">
                            <p>
                                <h1 className = "Car-count" style={{'display': 'inline'}}>84</h1>
                                <p className = "Car-txt-1" style={{'display': 'inline'}}>Completed courses</p>    
                                <img className = "Car-txt-1" src={Ellipse} alt="." style = {{'paddingLeft': '46px'}} />
                            </p>
                            </Card>
                        <Card className = "Car-bg Car-bg-1">
                            <p>
                                <h1 className = "Car-count" style={{'display': 'inline'}}>16</h1>
                                <p className = "Car-txt-1" style={{'display': 'inline'}}>Qualified tutors</p>
                                <img className = "Car-txt-1" src={Ellipse} alt="." style = {{'paddingLeft': '80px'}} />
                            </p>
                        </Card>
                        <Card className = "Car-bg Car-bg-1">
                            <p>
                                <h1 className = "Car-count" style={{'display': 'inline'}}>5</h1>
                                <p className = "Car-txt-1" style={{'display': 'inline'}}>Years of experience</p>
                            </p>
                        </Card>
                    </CardGroup>
                </Container>
            </div>
        </>
    )
}

export default Home_one