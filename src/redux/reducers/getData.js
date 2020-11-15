import * as Types from "../actions/types";

const initialObject = {
    data: {
        title : "",
        body : "",
    }
};

// 
const handleGetDataSuccess = (state, action) => {

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