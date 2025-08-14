'use client';

import { useState } from "react"

export default function StateTest() {

    const [ number, setNumber  ] = useState(0);
    return ( 
        <>
            <div>
                <h1>useState Testing : { number }</h1>
                <button onClick={() => setNumber(number + 1)}>Add</button>
            </div>
        </>
    )
}