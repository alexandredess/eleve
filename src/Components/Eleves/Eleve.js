import React, {Component} from 'react';
import './Eleve.css'

class Eleve extends Component{

    constructor(props){
        super(props);
        console.log('[Eleve.js] Constructor');
    }

    componentDidMount(){
        console.log('[Eleve.js] ComponentDidMount');
    }

    componentWillUnmount(){
        console.log('[Eleve.js] ComponentWillUnmount');
    }

    componentDidUpdate(){
        console.log('[Eleve.js] ComponentDidUpdate');
      }

    shouldComponentUpdate(nextProps){
        console.log('[Eleve.js] shouldComponentUpdate');
        //si la prochaine valeur de nom est différente de la valeur du nom actuelle
        if(nextProps.nom != this.props.nom){
            return true;
        }
        return false;
    }

    render(){
        return(
            <div className="eleve">
                <h1 onClick={this.props.clic}>{this.props.nom}</h1>
                <p>Moyenne scolaire : <b>{this.props.moyenne}/20</b></p>
                <p>Age :{Math.floor(Math.random()*100)} </p>
                <i>{this.props.citation}</i>
            </div>
        )
    }
}
// const Eleve = props=>{
//     return(
//       <div className="eleve">
//         <h1>{props.nom}</h1>
//         <p>Moyenne scolaire : <b>{props.moyenne}/20</b></p>
//       </div>
//     )
//   }

export default Eleve;