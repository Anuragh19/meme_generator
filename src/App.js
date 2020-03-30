import React from 'react';
import './App.css';
import Headercomponent from './components/Headercomponent'
import Memegenerator from './components/Memegenerator';
//import Form from './FormContainer'

class App extends React.Component {
  render()
  {
    return (
     <div>
       <Headercomponent />
       <Memegenerator />
     </div>
    )
  }
}

export default App;
