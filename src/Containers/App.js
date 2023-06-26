import './App.css';
import { Component } from 'react';
import React,{ useState } from 'react';
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

  const buttonClickedHandler= nouveauNom =>{
    //on reprend le state d'avant et on le met dans la const nouveauState
    const nouveauState = [...this.state.eleves];
    //on dit ici que le prénom de la première personne sera "Steve Jobs"
    nouveauState[0].nom=nouveauNom
    //on envoie ça dans le nouveau state
    this.setState({
      ...this.state,
      eleves:nouveauState
    })
  }

    return(
      <div className="App">
        <h1>bienvenue dans la classe Terre</h1>

        <div>
           <button onClick={buttonClickedHandler.bind(this,"Elon Musk")}>Transformer le premier élève</button>
        </div>

        <Eleve
          nom={eleves[0].nom}
          moyenne={eleves[0].moyenne}
          citation={eleves[0].citation}
          clic={()=>this.buttonClickedHandler('Steve Jobs')}>
          
        </Eleve>
        <Eleve
          nom={eleves[1].nom}
          moyenne={eleves[1].moyenne}
          citation={eleves[1].citation}
          clic={()=>this.buttonClickedHandlerBis('Julie Martin')}>
          </Eleve>
      </div>
  )
}



export default App;