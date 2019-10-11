import React, { useState } from 'react'
import { connect } from 'react-redux';
import {addSmurf} from './actions'

const AddSmurf = (props) => {
    const [newSmurf, setNewSmurf] = useState({name: '', age: '', height: ''})

    const handleChange = e => {
        setNewSmurf({...newSmurf, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.addSmurf(newSmurf)
    }
    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <input
                    name='name'
                    placeholder='smurf name'
                    type = 'text'
                    onChange={handleChange}
                />
                <input
                    name='age'
                    placeholder='smurf age'
                    type = 'number'
                    onChange={handleChange}
                />
                <input
                    name='height'
                    placeholder='smurf height'
                    type = 'text'
                    onChange={handleChange}
                />
                <button>Add Smurfs</button>
            </form>
        </div>
    )
}

export default connect(null, {addSmurf})(AddSmurf)
