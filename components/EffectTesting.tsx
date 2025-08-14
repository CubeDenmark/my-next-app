'use client';

import { useEffect, useState } from "react";

export default function EffectTest() {
    const [ Message, setMessage ] = useState('');

    useEffect(() => {
        const fetchData = async () => {
           try {
                const res = await fetch('http://localhost:4000/testing');
                const data = await res.json()
                if(!res.ok) {
                    console.log('Failed to fetch Data!');
                }
                setMessage(data.test)
           } catch (error) {
                console.log(error);
           }
        }
    fetchData();
    });

    return (
        <>
            <div>
                <h1>Effect Test Output is : { Message }</h1>
            </div>
        </>
    );

}