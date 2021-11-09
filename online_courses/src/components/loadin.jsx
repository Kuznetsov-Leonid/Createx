/**
 * Create by Kuznetsov Leonid 
 * 09.11.2021
 */ 
import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
import { Container} from 'react-bootstrap';

const Loading = () =>{
    return (
        <Container className="Load">
            <Spinner animation="border" variant="warning" />
        </Container>
    )
}

export default Loading