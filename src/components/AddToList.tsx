import React, { useState } from "react";

const AddToList = () => {
    const[input, setInput] = useState({
        name: "",
        age: "",
        note: "",
        img: ""
    })


    return (
        <div className="AddToList">
            <input
            type="text"
            placeholder="Name"
            className="AddToList-Input"/>
            <input
            type="text"
            placeholder="Age"
            className="AddToList-Input"/>
            <input
            type="text"
            placeholder="Image url"
            className="AddToList-Input"/>
            <textarea
            placeholder="Notes"
            className="AddToList-Input"/>
        </div>
    )
}

export default AddToList
