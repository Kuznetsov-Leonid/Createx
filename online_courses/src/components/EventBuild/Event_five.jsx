/**
 * Create by Kuznetsov Leonid 
 * 07.11.2021
 */ 
import React from 'react'
import { CardGroup, Container, Card, Form, Row, Col, Button} from 'react-bootstrap'
import Illustration from './illustration.png';
import shapes from './shapes.png';
import dots from './dots.png';
import circles from './circles.png';


const Event_five = () =>{
    return (
        <>
            <div className = "Event_two">
                <Container>
                    <div className = "Event_tiket">
                        <CardGroup>
                            <Card className = "Car-bg">
                                <img id = "dots" src={dots} alt="." />
                                <img id = "Illustration" src={Illustration} alt="." />
                                <img id = "shapes" src={shapes} alt="." />
                            </Card>
                            <Card className = "Car-bg">
                                <h2 className = "Event-two-txt">Don&rsquo;t want to&nbsp;miss the best events?<br/> Subscribe to&nbsp;our newsletter!</h2>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control className = "form-area-style" type="email" placeholder="Your working email" />
                                        <Button 
                                            href="#" 
                                            variant="outline-light"
                                            className = "mr-2 Get-con Button-header"
                                            style = {{'margin-left': '16px'}}>
                                                Subscribe
                                            </Button>
                                    </Form.Group>
                                    <Form.Check type="checkbox" label="I agree to receive communications from Createx Online School" />
                                </Form>
                            </Card>
                        </CardGroup>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Event_five