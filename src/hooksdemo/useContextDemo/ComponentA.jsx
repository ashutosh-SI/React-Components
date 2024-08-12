import React from 'react';
import { ColorContext, NameContext } from '../../Store/ContextStore';
import { useContext } from 'react';

export default function ComponentA(props) {
    return (
        <>
            <h1>From Component A</h1>
            <ComponentB />
        </>
    );
}

function ComponentB(props) {
    return (
        <>
            <h1>From Component B</h1>
            <ComponentC />
        </>
    );
}

function ComponentC(props) { // Added props parameter
    return (
        <>
            <h1>From Component C</h1>
            <ComponentD />
        </>
    );
}

function ComponentD(props) { // Added props parameter

    const name = useContext(NameContext)
    const color = useContext(ColorContext)
    return (
        <>
            <h1 style={{color:color}}>From Component D</h1>
            <h3>Company name = {name}</h3>
           
        </>
    );
}

