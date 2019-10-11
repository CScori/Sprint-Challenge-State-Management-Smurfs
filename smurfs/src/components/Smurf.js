import React from 'react'
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';


const Smurf = (props) => {
    console.log('single smurf', props)
    return (
        <div key={props.smurf.id}>
            <Row>
                <Col sm="6">
                    <Card body inverse color="primary">
                        <CardTitle>{props.smurf.name}</CardTitle>
                        <CardText>About {props.smurf.name}</CardText>
                        <p>age: {props.smurf.age} <br/> height: {props.smurf.height}</p>
                    </Card>
                </Col>
            </Row>
            
        </div>
    )
}

export default Smurf
