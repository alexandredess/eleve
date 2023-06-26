import './App.css';
import { Component } from 'react';
//import eleve.js
import Eleve from '../Components/Eleves/Eleve';


class App extends Component{
  state={
    eleves:[
      {
        nom:'Eva Dupont',
        moyenne:15,
        citation:"Aller toujours plus loin"},
      {
        nom:'Elon Musk',
        moyenne:20,
        citation:"le feu ça brule et l'eau ça mouille"
      }
    ]
  }

 

  buttonClickedHandler=()=>{
    //on reprend le state d'avant et on le met dans la const nouveauState
    const nouveauState = [...this.state.eleves];
    //on dit ici que le prénom de la première personne sera "Steve Jobs"
    nouveauState[0].nom="Steve Jobs"
    //on envoie ça dans le nouveau state
    this.setState({
      ...this.state,
      eleves:nouveauState
    })
  }

  render(){
    return(
      <div className="App">
        <h1>bienvenue dans la classe Terre</h1>

        <div>
          <button onClick={this.buttonClickedHandler}>Mon bouton</button>
        </div>

        <Eleve
          nom={this.state.eleves[0].nom}
          moyenne={this.state.eleves[0].moyenne}
          citation={this.state.eleves[0].citation}>
          
          </Eleve>
        <Eleve
          nom={this.state.eleves[1].nom}
          moyenne={this.state.eleves[1].moyenne}
          citation={this.state.eleves[1].citation}>
          </Eleve>
      </div>
    )
  }
}

export default App;