import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import {addSmurf} from './actions'

const AddSmurf = (props) => {
    const [smurfName, setSmurfName] = useState('')
    const [smurfAge, setSmurfAge] = useState('')
    const [smurfHeight, setSmurfHeight] = useState('')
    const [newSmurf, SetNewSmurf] = useState({})

    useEffect(() => {
        props.addSmurf()
  
    }, [])
    SetNewSmurf(smurfName, smurfAge, smurfHeight)
    return (
        <div>
            <form>
                <input
                    name='name'
                    placeholder='smurf name'
                    value={smurfName}
                    onChange={e => setSmurfName(e.target.value)}
                />
                <input
                    name='age'
                    placeholder='smurf age'
                    value={smurfAge}
                    onChange={e => setSmurfAge(e.target.value)}
                />
                <input
                    name='height'
                    placeholder='smurf height'
                    value={smurfHeight}
                    onChange={e => setSmurfHeight(e.target.value)}
                />
                <button onClick={e => props.addSmurf(newSmurf)}>Add Smurfs</button>
            </form>
        </div>
    )
}

export default connect(null, {addSmurf})(AddSmurf)
