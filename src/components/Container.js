import React, { Component } from 'react';
import Description from './Description';
class Container extends Component {
   


    render() {  
        const people=this.props.people;  
       
    return(
        <div className="col py-2" style={{backgroundColor:'#e8e9ed'}}>
              <h2>{
                people.map(person=>{
                     console.log(person);
                     return(
                         <div key={person.url} >
                        {
                             <table >
                                 <tbody>
                        <tr> 
                        <td ><h6>{person.name}</h6></td>
                         <td><Description description={person} /></td>
                        </tr>
                        </tbody>
                       </table> 
                       }
                       </div>
                     )
                        })
                  }</h2>            
                  
              
          </div>
    )


}
    
}



export default Container;