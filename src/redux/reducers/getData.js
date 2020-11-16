import * as Types from "../actions/types";

const initialObject = {
    result: {},
    data: []
};

// Retrieving data from the store
const handleGetDataSuccess = (state, action) => {
    console.log("Success! Data is being displayed," + JSON.stringify(action));
    let newState = { ...state };
    if(action.result !== undefined) {
        newState = Object.assign({}, state, {
            data: Object.assign([], action.result)
        });
    }
        console.log("State -> " + JSON.stringify(newState));
        return { ...newState };

}



const handleGetDataFailure = (state) => {
    let newState = { ...state};
    return { ...newState};
};

export default (state = initialObject, action) => {
    switch(action.type) {
        case Types.GET_DATA:
            return state;
        case Types.GET_DATA_SERVER_RESPONSE_FAILURE:
            return handleGetDataFailure(state);
        case Types.GET_DATA_SERVER_RESPONSE_SUCCESS:
            return handleGetDataSuccess(state, action);
        default :
            return state;

    }
};