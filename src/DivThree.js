import React from 'react';
                            
export class DivThree extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
    name: this.props.text,
    caps: true  
  }
}

  uppercaseIt = () => { 
    this.setState({  
          name: this.props.text.toUpperCase(),
          caps: false
        })
  } 
      
  lowercaseIt = () => { 
      this.setState({
        name: this.props.text.toLowerCase(),
        caps: true }
      )
    }
  

  render() {
      return ( 
      <div>
        <h3 onClick={this.state.caps ?  this.uppercaseIt : this.lowercaseIt}> {this.state.name} </h3>
        </div>
      )
    }
  }
