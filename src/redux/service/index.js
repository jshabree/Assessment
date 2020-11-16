export function getDataFromServer(apiPath, requestMethod, formBody) {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    if( requestMethod !== "GET" && requestMethod !== "") {
        return fetch(apiPath, { method: "POST", headers: myHeaders });
    }
    else {
        // if(formBody) {
            // let fetchData = {
            //     method: "GET",
            //     body: formBody,
            //     headers: myHeaders
            // };

            return fetch(apiPath, { method: "GET", headers: myHeaders });

        // }
    }
}

export function getDataFromServerToPost(apiPath, requestMethod, formBody) {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

        if(formBody) {
            let fetchData = {
                method: requestMethod,
                body: formBody,
                headers: myHeaders
            };

        return fetch(apiPath, fetchData);

        }
    }