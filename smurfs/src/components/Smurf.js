import React from 'react'
import { Card, Button, CardTitle, CardText, Row, Col, CardImg, CardGroup } from 'reactstrap';
import { connect } from 'react-redux'
import{deleteSmurf} from './actions'

const Smurf = (props) => {
    console.log('single smurf', props)
    return (
        <div >
                <Col  xs="6" md="4" xl="3">

                    <Card body className="text-center" inverse color="primary" key={props.smurf.id}>
                        <CardTitle>{props.smurf.name}</CardTitle>
                        <p>age: {props.smurf.age} <br/> height: {props.smurf.height}</p>
                        <CardImg bottom width="20%"height='20%' src="http://img3.wikia.nocookie.net/__cb20120702203824/smurfs/images/8/89/Happy_Clumsy.png" alt="Generic Smurf" />
                        <Button color='info' onClick={e => props.deleteSmurf(props.smurf.id)}>This Smurf isn't Smurfy</Button>
                    </Card>
                   
                </Col>
            
        </div>
    )
}

export default connect(null, {deleteSmurf})(Smurf)
