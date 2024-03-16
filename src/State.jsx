import React from "react";
import { useState, useEffect } from "react";
function State() {
    const [city, setcity] = useState("hyderabad");
    useEffect(() => {
        if (city == "hyde") {
            setcity("Bangagalore")
        }
        else {
            setcity("delhi")
        }
    },
        [city]);



    return (
        <div><h1>i live in {city}</h1>{city}</div>
    )
}
export default State