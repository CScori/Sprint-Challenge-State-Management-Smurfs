import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchData } from './actions'
import Smurf from './Smurf'


const Smurfs = (props) => {
    useEffect(() => {
        props.fetchData()
    }, [])

    if (props.isFetching) {
        return <h3>Loading the Tra La, La La La La</h3>
    }
    return (
        <div>
            {props.error && <p>{props.error}</p>}
            {props.smurfs.map(smurf => (
                <Smurf key={smurf.id} smurf={smurf}/>
            ))}
            
        </div>
    )
}

const mapStateToProps = state => {
    console.log('Smurf state', state)
    return{
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, {fetchData})(Smurfs)
