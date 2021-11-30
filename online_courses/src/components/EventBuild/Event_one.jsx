/**
 * Create by Kuznetsov Leonid 
 * 30.11.2021
 */ 
import React from 'react'
import { CardGroup, Container, Card } from 'react-bootstrap'


const Event_one = () =>{
    return (
        <>
            <div className = "Event_one">
                <Container>
                    <CardGroup>
                        <Card className = "Car-bg">
                            <h6 className = "Onl-lect">Online lecture</h6>
                            <h1 className = "Form-of-or">Formation of the organizational structure of the company in the face of uncertainty</h1>
                        </Card>
                    </CardGroup>
                </Container>
            </div>
        </>
    )
}

export default Event_one