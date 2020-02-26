import React, { useState } from 'react'
import { connect } from 'react-redux';
import {addSmurf} from './actions'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const AddSmurf = (props) => {
    //modal logic
    const {
        buttonLabel,
        className
      } = props;
    
      const [modal, setModal] = useState(false);
    
      const toggle = () => setModal(!modal);
// <<<<<<<<<<Smurf Logic>>>>>>>>>>>>>
    const [newSmurf, setNewSmurf] = useState({id: Date.now(), name: '', age: '', height: ''})

    const handleChange = e => {
        setNewSmurf({...newSmurf, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.addSmurf(newSmurf)
        toggle()
    }


    return (
        <div>
             <Button color="primary" onClick={toggle}>Add Smurf</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader color= 'info'toggle={toggle}>Let's Make a Smurf</ModalHeader>
        <ModalBody>
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
                {/* <button>Add Smurfs</button> */}
            </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSubmit} >Add Smurf</Button>{' '}
          <Button color="danger" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
        </div>
    )
}

export default connect(null, {addSmurf})(AddSmurf)





