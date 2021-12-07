/**
 * Create by Kuznetsov Leonid 
 * 30.11.2021
 */ 
import React from 'react'
import { CardGroup, Container, Card, Button } from 'react-bootstrap';
import Speaker from './speakerImg.png';
import NHL from './NHL.png';
import SCL from './SCL.png';
import DMSL from './DMSL.png';
import Facebook from './Face.png';
import Twitter from './inst.png';
import Instagram from './Tw.png';
import In from './In.png';


const Event_three = () =>{
    return (
        <>
            <div className = "Event_three">
                <Container>
                    <CardGroup>
                        <Card className = "Car-bg">
                            <img className = "speaker-img" src={Speaker} alt="." />
                        </Card>
                        <Card className = "Car-bg">
                            <h6 id = "speaker">Speaker</h6>
                            <h1 id = "K-M">Kathryn Murphy</h1>
                            <p id = "txt-1-ev">Analyst and Marketing specialist in IT company</p>
                            <p id = "txt-2-ev"> Mattis adipiscing aliquam eu proin metus a iaculis faucibus.
                                                Tempus curabitur venenatis, vulputate venenatis fermentum ante.
                                                Nisl, amet id semper semper quis commodo, consequat.
                                                Massa rhoncus sit morbi odio. Sit maecenas nibh consectetur vel diam. 
                                                Sem vulputate molestie laoreet at massa sed pharetra. 
                                                Ac commodo platea id habitasse proin. Nullam sit nec ipsum posuere non. 
                                                Nam vel aliquam tristique sollicitudin interdum quam.</p>
                            <div className = "logo-ittem">
                                <img id = "DMSL" src={DMSL} alt="." />
                                <img id = "SCL" src={SCL} alt="." />
                                <img id = "NHL" src={NHL} alt="." />
                            </div>
                            <div>
                                <Button className = "pg-1" variant="link" href="#"><img className = "img-button-link Fa" src={Facebook} alt="." /></Button>
                                <Button className = "pg-1" variant="link" href="#"><img className = "img-button-link Tw" src={Twitter} alt="." /></Button>       
                                <Button className = "pg-1" variant="link" href="#"><img className = "img-button-link Inst" src={Instagram} alt="." /></Button>
                                <Button className = "pg-1" variant="link" href="#"><img className = "img-button-link In" src={In} alt="." /></Button>
                            </div>
                        </Card>
                    </CardGroup>
                </Container>
            </div>
        </>
    )
}

export default Event_three