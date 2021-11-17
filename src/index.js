import React from "react";
import ReactDOM from "react-dom";
import HemisphereDisplay from "./HemisphereDisplay";

class App extends React.Component {

   /*  constructor(props) {
        super(props);
        this.state = {latitude: null, errorMessage: ''};
        In this case the only function of constructor function is to
        initialize state object

        We put this in constructor because it makes sure when our app component 
        shows up on the screen we are going to attempt to get user's current location and
        when we call the render method again to update our location we are not going to 
        accidentally double fetching the location
        
    } */

    state = {latitude: null, errorMessage: '' }
    //This is similar as constructor

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            //This is a callback function
            (position) => {
                this.setState({latitude: position.coords.latitude})
            },
            (error) =>  {
                this.setState({errorMessage: error.message})
            }
        );
    }
    
    render() {
        
        if(this.state.errorMessage && !this.state.latitude){
            return <div> {this.state.errorMessage}</div>
        }

        if(!this.state.errorMessage && this.state.latitude){
            return <div> <HemisphereDisplay latitude={this.state.latitude}/> </div>
        }

        else{
            return <div> Loading... </div>
        }
        
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)