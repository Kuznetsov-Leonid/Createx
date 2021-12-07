/**
 * Create by Kuznetsov Leonid 
 * 01.11.2021
 */ 
import React from 'react'
import { CardGroup, Container, Card, Accordion } from 'react-bootstrap'
import VectCheck from './VectCheck.png';

const Event_four = () =>{
    return (
        <>
            <div className = "Event_two">
                <Container>
                    <CardGroup>
                        <Card className = "Car-bg">
                            <h6 id = "speaker">For whom?</h6>
                            <h1 id = "K-M">Who will benefit from<br/> the event:</h1>
                        </Card>
                        <Card className = "Car-bg">
                            <p className = "H-t-text"><img src={VectCheck} alt="." /> Specialists with more than 1 year of active work experience</p>
                            <p className = "H-t-text"><img src={VectCheck} alt="." /> Vulputate placerat amet pulvinar lorem nisl.Mobile app designers who want to improve their skills in solving business problems, creating and testing human-centered interfaces</p>
                            <p className = "H-t-text"><img src={VectCheck} alt="." /> Professional designers who want to feel more confident in UX</p>
                        </Card>
                    </CardGroup>
                </Container>
            </div>
        </>
    )
}

export default Event_four