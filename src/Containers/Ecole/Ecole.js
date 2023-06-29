import classes from './Ecole.css';
import React,{ useState, useEffect, useRef } from 'react';
import styledComponent from 'styled-components';

//import du provider
import ThemeContextProvider from '../../Context/theme-context';
//import de search
import Search from '../../Components/Search/Search';

//import du HOC
import MonFragment from '../../HOC/MonFragment/MonFragment';

//import eleve.js
import Eleve from '../../Components/Eleves/Eleve';

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

function Ecole(){

  const [eleves,setEleves]=useState(
    [{
      id:1,
      nom:'Eva Dupont',
      moyenne:5,
      citation:"Aller toujours plus loin"
    },
    {
      id:2,
      nom:'Elon Musk',
      moyenne:0,
      citation:"le feu ça brule et l'eau ça mouille"
    }]
  );

  const [transformation,setTransformation]=useState(false);

  const [afficherEleve,setAfficherEleve]=useState(true);

  useEffect(()=>{
    console.log('[App.js] UseEffect');

    return()=>{
      console.log('[App.js] UseEffect(didUnmount)');
    }
  },[]);

  useEffect(()=>{
    console.log('[App.js] UseEffect(didUpdate)');
  })

  const buttonClickedHandler= (nouveauNom,index) =>{
    //on reprend le state d'avant et on le met dans la const nouveauState
    const nouveauxEleves = [...eleves];
    //on dit ici que le prénom de la première personne sera "Steve Jobs"
    nouveauxEleves[index]=nouveauNom;
    //on envoie ça dans le nouveau state
    setEleves(nouveauxEleves);
    //on change l'état du button à true
    setTransformation(true);
    //faire le focus sur l'input
    elementInput.current.focus();
    }

    //méthode pour afficher et masquer les élèves
  const showHideHandler=()=>{
    //permet de passer en true et en false => comme un toggle
    setAfficherEleve(!afficherEleve)
  }

  //méthode pour supprimer un élève
  const removeClickHandler= index =>{
    const nouveauxEleves=[...eleves];
    nouveauxEleves.splice(index,1);
    setEleves(nouveauxEleves);
  }

  //modification du nom
  const nameChangedHandler = (event,index)=>{
    const nouveauxEleves=[...eleves];
    nouveauxEleves[index].nom = event.target.value;
    setEleves(nouveauxEleves);
  }

  const h1Style={
    color:'green',
    backgroundColor:'lightgreen',
    textAlign:'center'
  }
  const display={
    display:'flex',
    justifyContent:"center"
  }

  const elementInput = useRef(null);

  let cartes = eleves.map((eleve,index)=>{
    let maVariableRef=null
    if(index === 0){
    maVariableRef= elementInput;
    }
    return (
    <Eleve
    key={index}
    nom={eleve.nom}
    moyenne={eleve.moyenne}
    clic={() => buttonClickedHandler('Thomas Dutronc',index)}
    supprimer={()=>removeClickHandler(index)}
    changerNom={(e)=>nameChangedHandler(e,index)}
    maRef={maVariableRef}
    >
    {eleve.citation}
    </Eleve>
    );
    });
    

  

    return(
      <ThemeContextProvider className={classes.App}>
        <h1 style={h1Style} >Bienvenue dans la classe Terre</h1>
        <div style={display}>
          <div>
            <MonBoutonSylise transformed={transformation} onClick={buttonClickedHandler.bind(this,"Elon Musk")}>Transformer le premier élève</MonBoutonSylise>
          </div>
          <div>
            <MonBoutonSylise onClick={showHideHandler}>Afficher/Masquer</MonBoutonSylise>
          </div>
        </div>
        

        <Search/>

        {afficherEleve ?
          <MonFragment>
          <div style={display}>
            {cartes}
          </div>
            
          </MonFragment>
          :null
        }
        
      </ThemeContextProvider>
  )
}



export default Ecole;