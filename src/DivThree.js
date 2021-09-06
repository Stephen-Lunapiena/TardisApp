import React from 'react';
// const text = 'Time and Relative Dimension in Space';
// text={tardi}
                            
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
         
      })} 
      
  lowercaseIt = () => { console.log("low")
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

  // changeIt = (text) => {
  //   if (this.state.name.caps) {
  //     this.setState({
  //       tardis: {
  //         name: text.toLowerCase(),
  //         caps: false
  //       }
  //     })
  //   } else {
  //     this.setState({
  //       tardis: {
  //         name: text.toUpperCase(),
  //         caps: true
  //       }
  //     })
  //   }
  // }