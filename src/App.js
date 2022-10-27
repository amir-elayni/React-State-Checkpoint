import './App.css'
import React from 'react'
import myImg from "./maPhoto.jpg"
import Profile from "./Profile/Profile.js"


class App extends React.Component {

  constructor(person) {

    super(person);

    this.state={

      fullName:"Mohamed Amir EL AYNI",
      bio:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit ab reiciendis autem a nemo",
      imgSrc:myImg,
      profession:"Full Stack developer",
      show:false,
      time:0
    };

  }

handleClick=() => {

  this.setState((state)=>({show:!state.show}));
};



  render(){

    return (


      <div className='container' >

{this.state.show && <Profile fullName={this.state.fullName} profession={this.state.profession} bio={this.state.bio}  imgSrc={this.state.imgSrc}/>}

<button className="button" onClick={this.handleClick}> {this.state.show? 'Hide ' : ' Show  '} </button>

  
      </div>


    );

  }


}

export default App;
