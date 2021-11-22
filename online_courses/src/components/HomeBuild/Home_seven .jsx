/**
 * Create by Kuznetsov Leonid 
 * 12.11.2021
 */ 
import React from 'react';
import { Container, Card, Form, Button, Accordion, CardGroup } from 'react-bootstrap';
import Img1 from './image1.png';
import Img2 from './image2.png';
import Img3 from './image3.png';
import Img4 from './image4.png';
import Facebook from './facebook.png';
import Inst from './inst.png';
import In from './in.png';

const Home_seven = () =>{
    return (
        <>
            <div className = "Home_seven">
                <Container>
                    <CardGroup>
                        <Card className = "Car-bg" style = {{textAlign : 'center', 'margin-top': '80px'}}>
                            <h6 className = "btaah">Best tutors are all here</h6>
                            <h1 className = "mot">Meet our team</h1>
                        </Card>
                    </CardGroup>
                    <Container>
                        <Container>
                    <CardGroup>
                        <Card className = "car-mar-team Car-bg">
                            <div className="card1">
                                <img className="Home-seven-img" src={Img1} alt=""/>
                                    <div class="overlay">
                                    <div class="links">
                                    <a href="#"><img src={Facebook} alt="" /></a>
                                    <a className = "insta" href="#"><img src={Inst} alt="" /></a>
                                    <a href="#"><img src={In} alt="" /></a>
                                    </div>
                                </div>
                            </div>
                            <div style = {{textAlign:'center'}}>
                                <p className = "NameLead">Jerome Bell</p>
                                <p className = "Position">Founder and Program Director</p>
                            </div>
                        </Card>
                        <Card className = "car-mar-team Car-bg">
                            <div className="card1">
                                <img className="Home-seven-img" src={Img2} alt=""/>
                                    <div class="overlay">
                                    <div class="links">
                                    <a href="#"><img src={Facebook} alt="" /></a>
                                    <a className = "insta" href="#"><img src={Inst} alt="" /></a>
                                    <a href="#"><img src={In} alt="" /></a>
                                    </div>
                                </div>
                            </div>
                            <div style = {{textAlign:'center'}}>
                                <p className = "NameLead">Marvin McKinney</p>
                                <p className = "Position">PM, Curator of Management Course</p>
                            </div>
                        </Card>
                        <Card className = "car-mar-team Car-bg">
                            <div className="card1">
                                <img className="Home-seven-img" src={Img3} alt=""/>
                                    <div class="overlay">
                                    <div class="links">
                                    <a href="#"><img src={Facebook} alt="" /></a>
                                    <a className = "insta" href="#"><img src={Inst} alt="" /></a>
                                    <a href="#"><img src={In} alt="" /></a>
                                    </div>
                                </div>
                            </div>
                            <div style = {{textAlign:'center'}}>
                                <p className = "NameLead">Caleb Mardin</p>
                                <p className = "Position">Founder and CEO</p>
                            </div>
                        </Card>
                        <Card className = "car-mar-team Car-bg">
                            <div className="card1">
                                <img className="Home-seven-img" src={Img4} alt=""/>
                                    <div class="overlay">
                                    <div class="links">
                                    <a href="#"><img src={Facebook} alt="" /></a>
                                    <a className = "insta" href="#"><img src={Inst} alt="" /></a>
                                    <a href="#"><img src={In} alt="" /></a>
                                    </div>
                                </div>
                            </div>
                            <div style = {{textAlign:'center'}}>
                                <p className = "NameLead">Kristin Watson</p>
                                <p className = "Position">Marketer, Curator of Marketing Course</p>
                            </div>
                        </Card>
                    </CardGroup>
                    </Container>
                    </Container>
                </Container>
            </div>
        </>
    )
}

export default Home_seven