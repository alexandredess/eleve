import classes from './App.module.css';
import React,{ useState, useEffect } from 'react';
import styledComponent from 'styled-components';

//import eleve.js
import Eleve from '../Components/Eleves/Eleve';

const MonBoutonSylise=styledComponent.button
  //code css
  `padding : 10px 30px;
  background-color:${props=>props.transformed?'green':'black'};
  color:white;
  cursor:pointer;
  &:hover{
    background-color:${props=>props.transformed ? 'lightgreen':'white'};
    color:${props=>props.transformed?'white':'black'};
  }
  `;

function App(){

  const [eleves,setEleves]=useState(
    [{
      nom:'Eva Dupont',
      moyenne:5,
      citation:"Aller toujours plus loin"
    },
    {
      nom:'Elon Musk',
      moyenne:10,
      citation:"le feu ça brule et l'eau ça mouille"
    }]
  );

  const [transformation,setTransformation]=useState(false);

  useEffect(()=>{
    console.log('[App.js] UseEffect');

    return()=>{
      console.log('[App.js] UseEffect(didUnmount)');
    }
  },[]);

  useEffect(()=>{
    console.log('[App.js] UseEffect(didUpdate)');
  })

  const buttonClickedHandler= nouveauNom =>{
    //on reprend le state d'avant et on le met dans la const nouveauState
    const nouveauxEleves = [...eleves];
    //on dit ici que le prénom de la première personne sera "Steve Jobs"
    nouveauxEleves[0].nom=nouveauNom
    //on envoie ça dans le nouveau state
    setEleves(nouveauxEleves);
    //on change l'état du button à true
    setTransformation(true);
    }

  const h1Style={
    color:'green',
    backgroundColor:'lightgreen'
  }

    return(
      <div className={classes.App}>
        <h1 style={h1Style}>Bienvenue dans la classe Terre</h1>

        <div>
           <MonBoutonSylise transformed={transformation} onClick={buttonClickedHandler.bind(this,"Elon Musk")}>Transformer le premier élève</MonBoutonSylise>
        </div>

        <Eleve
          nom={eleves[0].nom}
          moyenne={eleves[0].moyenne}
          citation={eleves[0].citation}
          clic={()=>buttonClickedHandler('Steve Jobs')}>
          
        </Eleve>
        <Eleve
          nom={eleves[1].nom}
          moyenne={eleves[1].moyenne}
          citation={eleves[1].citation}
          clic={()=>buttonClickedHandler('Julie Martin')}>
          </Eleve>
      </div>
  )
}



export default App;