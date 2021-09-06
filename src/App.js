import React from 'react';
import {DivOne} from './DivOne'

import './App.css';
const text = 'Time and Relative Dimension in Space'

class App extends React.Component {
  render () {
    return (
    <div>
      <DivOne 
      text = {text}/>
    </div>
    );
}}

export default App
