//import
import React from 'react';
//import du context
import { themeContext } from '../../Context/theme-context';

class Search extends React.Component{

    //Création de l'étiquette (ref)

    constructor(props){
        super(props);
        this.searchRef = React.createRef();
    }

    componentDidMount(){

        this.searchRef.focus();

    }

    //contexte
    static contextType = themeContext;
        

    render(){
        return(
            <input 
            type="text"
            ref={(e) =>this.searchRef = e} 
            style={{
                width:'90%',
                display:'block',
                margin:'auto',
                padding:'3px',
                background:this.context.background,
                color:this.context.foreground
            }}
            />
        )
    }
}

export default Search;