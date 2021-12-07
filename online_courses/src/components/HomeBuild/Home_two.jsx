/**
 * Create by Kuznetsov Leonid 
 * 11.11.2021
 */ 
import React from 'react';
import { Container, Card, Form, Button, Accordion, CardGroup } from 'react-bootstrap';
import Photo1 from './photo1.png';
import VectCheck from './VectCheck.png';


const Home_two = () =>{
    return (
        <>
            <div className = "Home_two">
                <Container>
                    <CardGroup>
                        <Card className = "Car-bg" style = {{'padding': '0px 60px 0px 0px', 'text-align':'center'}}>
                            <img src={Photo1} alt="." />
                        </Card>
                        <Card  className = "Car-bg">
                            <h6 className = "wwa">who we are</h6>
                            <h1 className = "wc">Why Createx?</h1>
                            <p className = "H-t-text"><img src={VectCheck} alt="." /> A fermentum in morbi pretium aliquam adipiscing donec tempus.</p>
                            <p className = "H-t-text"><img src={VectCheck} alt="." /> Vulputate placerat amet pulvinar lorem nisl.</p>
                            <p className = "H-t-text"><img src={VectCheck} alt="." /> Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.</p>
                            <p className = "H-t-text"><img src={VectCheck} alt="." /> Etiam duis lobortis in fames ultrices commodo nibh.</p>
                            <p className = "H-t-text"><img src={VectCheck} alt="." /> Tincidunt sagittis neque sem ac eget.</p>
                            <p className = "H-t-text"><img src={VectCheck} alt="." /> Ultricies amet justo et eget quisque purus vulputate dapibus tortor.</p>
                            <Form>
                                    <Button href="#" className = "mr-2 Get-con Button-header" variant="outline-light">More about us</Button>
                            </Form>
                        </Card>
                    </CardGroup>
                </Container>
            </div>
        </>
    )
}

export default Home_two