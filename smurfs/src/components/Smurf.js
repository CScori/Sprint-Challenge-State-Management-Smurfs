import React from 'react'
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { connect } from 'react-redux'
import{deleteSmurf} from './actions'

const Smurf = (props) => {
    console.log('single smurf', props)
    return (
        <div >
            <Row>
                <Col sm="6">
                    <Card body inverse color="primary" key={props.smurf.id}>
                        <CardTitle>{props.smurf.name}</CardTitle>
                        <CardText>About {props.smurf.name}</CardText>
                        <p>age: {props.smurf.age} <br/> height: {props.smurf.height}</p>
                        <Button onClick={e => props.deleteSmurf(props.smurf.id)}>This Smurf isn't Smurfy</Button>
                    </Card>
                </Col>
            </Row>
            
        </div>
    )
}

export default connect(null, {deleteSmurf})(Smurf)
