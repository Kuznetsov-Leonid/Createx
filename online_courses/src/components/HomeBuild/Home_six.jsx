/**
 * Create by Kuznetsov Leonid 
 * 12.11.2021
 */ 
import React from 'react';
import { Container, Card, Form, Button, Accordion, CardGroup } from 'react-bootstrap';
import DMSL from "./DMSL.png";
import NHL from "./NHL.png";
import SCL from "./SCL.png";
import Sertificate from "./Sertificate.png";

const Home_six = () =>{
    return (
        <>
            <div className = "Home_four">
                <Container>
                    <CardGroup>
                        <Card style = {{'border': 'none'}}>
                            <h6 className = "cc">Createx Certificate</h6>
                            <h1 className = "yewbc">Your expertise will <br /> be confirmed</h1>
                            <p className = "Home-four-text">
                                We are accredited by 
                                international professional 
                                organizations and institutes:
                            </p>
                            <CardGroup>
                                <Card style = {{'border': 'none'}}><img className = "Home-four-img" src={DMSL} alt="." /></Card>
                                <Card style = {{'border': 'none'}}><img className = "Home-four-img" src={SCL} alt="." /></Card>
                                <Card style = {{'border': 'none'}}><img className = "Home-four-img" src={NHL} alt="." /></Card>
                            </CardGroup>
                        </Card>
                        <Card style = {{'border': 'none'}}>
                            <img src={Sertificate} alt="." />
                        </Card>
                    </CardGroup>
                </Container>
            </div>
        </>
    )
}

export default Home_six