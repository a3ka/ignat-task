import React from "react";
import {useState} from "react";
import {requestsAPI} from "./requestsAPI";

export const Request = () => {

    let [checkbox, setCheckbox] = useState(false)
    let [serverResponse, setServerResponse] = useState("")

    console.log(checkbox)

    let onClickHandler = () => {
        requestsAPI(checkbox)
            .then(res => {setServerResponse(res.data.errorText)})
            .catch(res => {setServerResponse(res.response.data.errorText)})
    }


    return (
        <span>
            <div>{ serverResponse ? (`Request status: ${serverResponse}`) : ' '}</div>
            <input checked={checkbox} type="checkbox" onClick={e => setCheckbox(e.currentTarget.checked)}/>
            <button onClick={onClickHandler}>Click</button>
        </span>
    )
}