import React, { Component } from 'react';

class Navbar extends Component {
    render() {    
    return(
        <div className="col-sm-2 col-md-2 col-lg-1 col-xl-1" style={{    backgroundColor:'#d7d9dd'}}>
        <nav className="navbar navbar-light navbar-expand-sm px-0 flex-row flex-nowrap">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarWEX" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
             <div className="navbar-collapse collapse" id="navbarWEX">
                <div className="nav flex-sm-column flex-row">
                    <a className="nav-item nav-link active" href="#">Home</a>
                    <a href="#" className="nav-item nav-link">People</a>
                    <a href="#" className="nav-item nav-link">Films</a>                         
                </div>
            </div>
        </nav>
        </div>
    )}
    
}



export default Navbar;