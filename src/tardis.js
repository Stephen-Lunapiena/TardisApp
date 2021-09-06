tardis: {
    name: 'Time and Relative Dimension in Space',
    caps: false,
  }










  export class Tardis extends React.Component{
    render(){
      return ( 
        tardis: {
            name: 'Time and Relative Dimension in Space',
            caps: false,
          }
        

    );
  }
  }

  changeIt = (text) => {
    if (this.state.tardis.caps) {
      this.setState({
        tardis: {
          name: text.toLowerCase(),
          caps: false
        }
      })
    } else {
      this.setState({
        tardis: {
          name: text.toUpperCase(),
          caps: true
        }
      })
    }
  }