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
    this.setState({
      eleves:[
      {
        nom:"Steve Jobs",
        moyenne:15,
        citation:"Allez toujours plus loin"
      },
      {
        nom:'Elon Musk',
        moyenne:20,
        citation:"le feu ça brûle et l'eau ça mouille"
      }
    ]
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