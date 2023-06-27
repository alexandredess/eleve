import classes from './App.module.css';
import React,{ useState, useEffect } from 'react';

//import eleve.js
import Eleve from '../Components/Eleves/Eleve';

function App(){

  const [eleves,setEleves]=useState(
    [{
      nom:'Eva Dupont',
      moyenne:15,
      citation:"Aller toujours plus loin"
    },
    {
      nom:'Elon Musk',
      moyenne:20,
      citation:"le feu ça brule et l'eau ça mouille"
    }]
  );

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
    }
  

    return(
      <div className={classes.App}>
        <h1>bienvenue dans la classe Terre</h1>

        <div>
           <button onClick={buttonClickedHandler.bind(this,"Elon Musk")}>Transformer le premier élève</button>
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