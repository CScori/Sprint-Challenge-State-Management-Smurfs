import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchData } from './actions'
import Smurf from './Smurf'


const Smurfs = (props) => {
    useEffect(() => {
        props.fetchData()
    }, [])

    return (
        <div>
            <Smurf />
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
