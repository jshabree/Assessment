import {
    call,
    put,
    takeLatest
  } from "redux-saga/effects";

import * as Types from "../actions/types";

import {
    getDataFromServer,
    // getDataFromServerToPost
} from "../service";

function* fetchData(action) {
    try {
        const baseUrl = "https://jsonplaceholder.typicode.com/posts?_limit=5";

        console.log("Action in fetchData at sagas ->", + JSON.stringify(action));
        const requestMethod = "";
        const response = yield call(getDataFromServer, baseUrl, requestMethod, "");

        const result = yield response.json();
        console.log("ADS" + result.workingdetails);
        console.log("Result -> " +JSON.stringify(result));
        console.log("Result JSON" + result);

        if(result.error) {
            yield put ({
                type: "GET_DATA_SERVER_RESPONSE_FAILURE",
                error: result.error
            });
        }
        else {
            yield put ({ type: Types.GET_DATA_SERVER_RESPONSE_SUCCESS, result });
        }
    }

    catch(error) {
        console.log(error);
    }

}

export default function* rootSaga(params) {
    yield takeLatest(Types.GET_DATA, fetchData);

    console.log("Root Saga");
}