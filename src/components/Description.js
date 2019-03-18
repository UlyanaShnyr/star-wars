import React, {Component} from 'react';

class Description extends Component{
    constructor(props){
        super(props);

        this.state={
            expanded:false,
        }

        this.open=this.open.bind(this);
        this.close=this.close.bind(this);
    }
    open(){
this.setState({
    expanded:!this.state.expanded,
})
    }
    close(){
        this.setState({
            expanded:!this.state.expanded,
        })
            }

            
    render(){
        const inf=this.props.description;       
        if(!this.state.expanded){
             return  <span className="btn btn-light" onClick={this.open}>...details</span>
        }
        return(
            <div>  
              
                <span className="btn btn-primary" onClick={this.close}>
                
                   <p>Gender:{inf.gender}</p>
                    <p>Birth date:{inf.birth_year}</p>
                    <p>Height:{inf.height}</p>
                    <p>Mass:{inf.mass}</p>                   
                    <p>Hair Color:{inf.hair_color}</p>                   
                    <p>Skin Color:{inf.skin_color}</p>        
                
                </span>
            </div>
        )
    }
}

export default Description;