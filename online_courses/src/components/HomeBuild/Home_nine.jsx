/**
 * Create by Kuznetsov Leonid 
 * 21.11.2021
 */ 
import React from 'react';
import { Container, Card, Form, Button, Accordion, CardGroup } from 'react-bootstrap';
import ImgNine1 from './imgNine1.png';
import ImgNine2 from './imgNine2.png';
import ImgNine3 from './imgNine3.png';
import RedArrow from './RedArrow.png';
import Union from './Union.png';
import Calenar from './Calenar.png';

const Home_nine = () =>{
    return (
        <>
            <div className = "Home_nine">
                <Container>
                    <coment 
                    /**
                     * Copy from component './HomeBuild/Home_tree'
                     * For button copy stile from component './HomeBuild/Home_five' letter 71 - 73
                     * */
                    />
                    <Container>
                        <CardGroup style={{'padding-top': '100px'}}>
                                <Card style = {{'margin-bottom': '20px'}} className = "Car-bg Car-mar">
                                    <CardGroup>
                                        <Card className = "Car-bg">
                                            <h6 className = "rtl">Our blog</h6>
                                            <h1 style={{'display': 'inline'}} 
                                            className = "fc">
                                                Latest posts
                                            </h1>
                                        </Card>
                                        <Card className = "Car-bg">
                                            <Form style = {{'text-align':'end', 'padding-top': '60px'}}>
                                                <Button  
                                                    href="#" 
                                                    variant="outline-light"
                                                    className = "mr-2 Get-con Button-header"
                                                    style = {{'margin-left': '16px'}}>
                                                    Go to blog
                                                </Button>
                                            </Form>
                                        </Card>
                                    </CardGroup>
                                </Card>
                        </CardGroup>
                    </Container>
                    <CardGroup>
                        <Container style={{ width: '23rem' }}>
                            <Card style = {{'border': 'none'}}>
                                <Card.Img variant="top" src={ImgNine1} />
                                <p className = "nine-letter-card-one">Marketing &nbsp; | &nbsp; <img src={Calenar} alt="." />&nbsp; September 4, 2021 &nbsp; | &nbsp; <img src={Union} alt="." />&nbsp; 36 min</p>
                                <p className = "nine-letter-card-two">What is&nbsp;traffic arbitrage and does it&nbsp;really make money?</p>
                                <p className = "nine-letter-card-tree">Pharetra, ullamcorper iaculis viverra parturient sed id&nbsp;sed. Convallis proin dignissim lacus, purus gravida...</p>
                                <p><Button  className = "nine-letter-card-four-link" variant="link">Listen &nbsp;<img src={RedArrow} alt=">" /></Button></p>
                            </Card>
                        </Container>
                        <Container style={{ width: '23rem' }}>
                            <Card style = {{'border': 'none'}}>
                                <Card.Img variant="top" src={ImgNine2} />
                                <p className = "nine-letter-card-one">Management &nbsp; | &nbsp; <img src={Calenar} alt="." />&nbsp; August 25, 2021 &nbsp; | &nbsp; <img src={Union} alt="." />&nbsp; 45 min</p>
                                <p className = "nine-letter-card-two">What to&nbsp;do&nbsp;and who to&nbsp;talk to&nbsp;if&nbsp;you want to&nbsp;get feedback on&nbsp;the product.</p>
                                <p className = "nine-letter-card-tree">Neque&nbsp;a, senectus consectetur odio in&nbsp;aliquet nec&nbsp;eu. Ultricies ac&nbsp;nibh urna urna sagittis faucibus...</p>
                                <p><Button className = "nine-letter-card-four-link" variant="link">Watch &nbsp;<img src={RedArrow} alt=">" /></Button></p>
                            </Card>
                        </Container>
                        <Container style={{ width: '23rem' }}>
                            <Card style = {{'border': 'none'}}>
                                <Card.Img variant="top" src={ImgNine3} />
                                <p className = "nine-letter-card-one">Design &nbsp; | &nbsp; <img src={Calenar} alt="." />&nbsp; August 8, 2021</p>
                                <p className = "nine-letter-card-two">Should you choose a&nbsp;creative profession if&nbsp;you are attracted to&nbsp;creativity?</p>
                                <p className = "nine-letter-card-tree">Curabitur nisl tincidunt eros venenatis vestibulum ac&nbsp;placerat. Tortor, viverra sed vulputate ultrices...</p>
                                <p><Button className = "nine-letter-card-four-link" variant="link">Read &nbsp;<img src={RedArrow} alt=">" /></Button></p>
                            </Card>
                        </Container>
                    </CardGroup>
                </Container>
            </div>
        </>
    )
}

export default Home_nine