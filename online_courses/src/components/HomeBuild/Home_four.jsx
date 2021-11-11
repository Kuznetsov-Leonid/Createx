/**
 * Create by Kuznetsov Leonid 
 * 11.11.2021
 */ 
import React from 'react';
import { Container, Card, Form, Button, Accordion, CardGroup } from 'react-bootstrap';
import Illustration2 from "./illustration2.png";
import MasegeIcon from "./MasegeIcon.png";
import PaperIcon from "./PaperIcon.png";
import Shape from "./shape.png";
import Star from "./Star.png";


const Home_four = () =>{
    return (
        <>
            <div className = "Home_four">
                <Container>
                    <CardGroup>
                        <Card className = "Car-bg Home-foure-card-1">
                            <h6 className = "ob">Our benefits</h6>
                            <h1 className = "thwdi">That’s how we do it</h1>
                        </Card>
                    </CardGroup>
                    <CardGroup className = "Home_four" style = {{'text-align': 'center'}}>
                        <Card className = "Car-bg">
                            <a href = "#" className = "Home-four-nav">
                                <img className = "img-nav" src={Star} alt="." />Experienced Tutors
                            </a>
                        </Card>
                        <Card className = "Car-bg">
                            <a href = "#" className = "Home-four-nav">
                                <img className = "img-nav" src={Shape} alt="." />Feedback & Support
                            </a>
                        </Card>
                        <Card className = "Car-bg">
                            <a href = "#" className = "Home-four-nav">
                                <img className = "img-nav" src={PaperIcon} alt="." />24/7 Online Library
                            </a>
                        </Card>
                        <Card className = "Car-bg">
                            <a href = "#" className = "Home-four-nav">
                                <img className = "img-nav" src={MasegeIcon} alt="." />Community
                            </a>
                        </Card>
                    </CardGroup>
                    <CardGroup className = "Home_four">
                        <Card className = "Car-bg">
                            <h2 className = "opt">Only practicing tutors</h2>
                            <p className = "Urna-nisi">
                                Urna nisi, arcu cras nunc.
                                Aenean quam est lobortis mi&nbsp;non fames dictum suspendisse. 
                                Morbi mauris cras massa ut&nbsp;dolor quis sociis mollis augue.
                                Nunc, sodales tortor sit diam mi&nbsp;amet massa. 
                                Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id&nbsp;dignissim massa ut&nbsp;amet. 
                                Amet enim, nisi tempus vehicula.
                            </p>
                        </Card>
                        <Card className = "Car-bg">
                            <img src={Illustration2} alt="." />
                        </Card>
                    </CardGroup>
                </Container>
            </div>
        </>
    )
}

export default Home_four