'use client';

import { useState, useEffect } from 'react';

export default function SecondTest() {
    const [ Message, setMessage] = useState('');

    useEffect(() => {
        fetch('http://localhost:4000/testing')
        .then(res => res.json())
        .then(res => setMessage(res.test));
    })

    

    return (
        <>
            <div>
                <h1>Testing Second Message : { Message }</h1>
            </div>
        </>
    )
}