import { COUNTER_ACTION } from "../../constants/actions/Users";

export const AddUserAction = (payload) => ({
    type: COUNTER_ACTION.COUNTER_PENDING,
    payload
})

export const AddUserActionSuccess = (data) => ({
    type: COUNTER_ACTION.COUNTER_SUCCESS,
    data
})