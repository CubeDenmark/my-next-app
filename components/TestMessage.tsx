'use client';

import { useEffect, useState } from "react";

export default function TestMessage(){
    const [ Message, setMessage] = useState('');

    useEffect(() => {
        fetch('http://localhost:4000/testing')
        .then(res => res.json())
        .then(data => setMessage(data.test))
    });

    return(
    <>
        <div className="text-white border-2 w-40">
            <p>Testing Message is : { Message }</p>
        </div>
    </>
    )
}
