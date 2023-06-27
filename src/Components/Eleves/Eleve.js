// Librairies
import React, { useEffect } from 'react';
import classes from './Eleve.module.css';

function Eleve(props) {
    //useEffect
    useEffect(()=>{
        console.log('[Eleve.js] UseEffect');
    },[]);
    useEffect(()=>{
            console.log('[Eleve.js] UseEffect(didUpdate');
    })
    useEffect(()=>{
        return()=>{
            console.log('[Eleve.js] UseEffect(WillUnmount)');
        }
    },[]);
    //limitateur
    useEffect(()=>{
        console.log('[Eleve.js] Le nom a changé');
    },[props.nom]);
    //jsx
    return (
        <div className={classes.eleve}>
            <h1 onClick={props.clic}>{props.nom}</h1>
            <p>Moyenne scolaire : <b>{props.moyenne}/20</b></p>
            <p>Age : {Math.floor(Math.random() * 100)}</p>
            <i>{props.children}</i>
        </div>
    );
}
export default Eleve;