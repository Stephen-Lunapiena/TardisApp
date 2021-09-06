import React from 'react'
import {DivTwo} from './DivTwo'

export class DivOne extends React.Component{
    render(){
      return ( 
        <div>
          <DivTwo 
          text = {this.props.text}/>
      </div>
    );
  }
  }

  