import axios from 'axios'

export const START_FETCH = 'START_FETCH'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAILURE = 'FETCH_FAILURE'

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