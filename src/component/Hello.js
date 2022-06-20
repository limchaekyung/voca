import { useState } from "react";

export default function Hello() {
    // let name = "Mike"
    const [name, setName] = useState('Mike')

    function changeName() {
        const newName = name === "Mike" ? "Jane" : "Mike";
        // document.querySelector('h2').innerText = name
        setName(newName)
    }

    return (
        <div>
            <h2>{name}</h2>
            <button onClick={changeName}>Change</button>
        </div>
    )
}