import { START_FETCH, FETCH_SUCCESS, FETCH_FAILURE, ADDING_SMURF,ADDING_SMURF_SUCCESS, ADDING_SMURF_FAILED } from '../components/actions'

const initialState = {
    smurfs: [],
    isFetching: false,
    error: 'something went wrong'
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case START_FETCH:
        return {
          ...state,
          isFetching: true,
          error: ''
        };
      case FETCH_SUCCESS:
        return {
          ...state,
          isFetching: false,
          error: '',
          smurfs: action.payload
        };
      case FETCH_FAILURE:
        return {
          ...state,
          error: action.payload,
          isFetching: false
        };
        case ADDING_SMURF:
        return {
            ...state,
            isFetching: true
        };
        case ADDING_SMURF_SUCCESS:
            return {
                ...state,
                isFetching: false,
                smurfs: [...state.smurfs, action.payload]
            };
            case ADDING_SMURF_FAILED:
                return {
                    ...state,
                    isFetching: false
                }
        default:
            return state;
    }
}
export default reducer