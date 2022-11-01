// take input and reverse it 
import React from "react";
import { useState } from "react";

const App = () => {

    const [value, setValue] = useState("");
    const [reverse, setReverse] = useState("");

    return (
        <>
            <h1>Reverse the value</h1>
            <form>
                <label htmlFor="value">Enter Any Value: </label><br />
                <input type="text" id="value" name="value" value={value} onChange={(e)=>{setValue(e.target.value)}}/> <br /><br />
                <input type="button" value="Reverse" onClick={()=>{setReverse(value.split('').reverse().join(''))}} />
                <h3>{reverse? `Reverse of ${value} is ${reverse}`:``}</h3>
            </form>
        </>
    )
}

export default App;