/**
 * Create by Kuznetsov Leonid 
 * 13.11.2021
 */ 
import React from 'react';
import { Container, Card, Form, Button, Accordion, CardGroup, Carousel } from 'react-bootstrap';
import BG from "./testimonial.png";

const Home_eight = () =>{
    return (
        <>
            <div className = "Home_eight">
                <Container>
                    <CardGroup style = {{'padding-top': '150px'}}>
                        <Card className = "Car-bg" style = {{'border': 'none', 'text-align': 'center'}}>
                            <h6 id='TESTIMONIALS'>TESTIMONIALS</h6>
                            <h1 id='WOSS'>What our students say</h1>
                        </Card>
                    </CardGroup>
                    <Carousel variant="dark" style = {{'height': '500px'}}>
                    <Carousel.Item>
                            <img style = {{'padding-top': '50px'}}
                            className="d-block w-100"
                            src={BG}
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img style = {{'padding-top': '50px'}}
                            className="d-block w-100"
                            src={BG}
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img style = {{'padding-top': '50px'}}
                            className="d-block w-100"
                            src={BG}
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img style = {{'padding-top': '50px'}}
                            className="d-block w-100"
                            src={BG}
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img style = {{'padding-top': '50px'}}
                            className="d-block w-100"
                            src={BG}
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img style = {{'padding-top': '50px'}}
                            className="d-block w-100"
                            src={BG}
                            alt="First slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Container>
            </div>
        </>
    )
}

export default Home_eight