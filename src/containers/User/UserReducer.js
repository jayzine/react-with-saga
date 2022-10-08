import { COUNTER_ACTION } from "../../constants/actions/Users"

const INITIAL_STATE  = {
    loading: false,
    counter: 1
}

const UserReducer = (state = INITIAL_STATE, actions) => {
    switch(actions.type) {
        case COUNTER_ACTION.COUNTER_PENDING:
            return {
                ...state,
                loading: true
            }
        case COUNTER_ACTION.COUNTER_SUCCESS:
            return {
                ...state,
                loading: false,
                counter: Number(state.counter) + Number(actions.data)
            }
        case COUNTER_ACTION.COUNTER_SUCCESS:
            return {
                ...state,
                loading: false,
                counter: Number(state.counter) + Number(actions.data)
            }
        default:
            return state
    }
}

export default UserReducer;