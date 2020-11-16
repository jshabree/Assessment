export function getDataFromServer(apiPath, requestMethod, formBody) {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    if(!requestMethod && requestMethod !== "GET") {
        return fetch(apiPath, { method: "POST", headers: myHeaders });
    }
    else {
        if(formBody) {
            let fetchData = {
                method: "GET",
                body: JSON.stringify(formBody),
                headers: myHeaders
            };

        return fetch(apiPath, fetchData);

        }
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