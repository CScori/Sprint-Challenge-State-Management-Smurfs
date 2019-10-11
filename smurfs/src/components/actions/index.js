import axios from 'axios'

export const START_FETCH = 'START_FETCH'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAILURE = 'FETCH_FAILURE'
export const ADDING_SMURF = "ADDING_SMURF";
export const ADDING_SMURF_SUCCESS = "ADDING_SMURF_SUCCESS";
export const ADDING_SMURF_FAILED = "ADDING_SMURF_FAILED";
export const DELETE_SMURF = 'DELETE_SMURF';
export const DELETE_FAILED = 'DELETE_FAILED';
export const fetchData = () => dispatch => {
    dispatch({ type: START_FETCH});
    axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
        console.log('fetch data', res.data)
        dispatch({ type: FETCH_SUCCESS, payload: res.data})
    })
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response}))
}

export const addSmurf = (newSmurf) => dispatch => {
    dispatch({ type: ADDING_SMURF});
    axios
    .post('http://localhost:3333/smurfs')
    .then(res => {
        console.log('New Smurf', res.data)
        dispatch({ type: ADDING_SMURF_SUCCESS, payload: res.data})
    })
    .catch(err => dispatch({ type: ADDING_SMURF_FAILED, payload: err.response}))
}

export const deleteSmurf = (id) => dispatch => {
    dispatch({ type: DELETE_SMURF});
    axios
    .delete('http://localhost:3333/smurfs')
    .then(res => {
        console.log('minus smurf array', res.data)
        dispatch({ type: DELETE_SMURF, payload: res.data.id})
    })
    .catch(err => dispatch({ type: DELETE_FAILED }))  
}