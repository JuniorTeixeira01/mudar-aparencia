import { useState } from 'react';
import './App.css';
import CardAnimal  from './cards/CardAnimal';
import CardInformacoes from './cards/CardInformacoes';
import Topo from './cards/Topo';


function App() {

  const [tipoDoComponenteCard , setTipoDoComponenteCard] = useState('cachorro');


  return (
    <div className="App">
     
      <Topo tipoAnimal = {tipoDoComponenteCard} setState = {setTipoDoComponenteCard} />
      <CardAnimal tipoAnimal = {tipoDoComponenteCard} />
      <CardInformacoes tipoAnimal = {tipoDoComponenteCard} />    
  
    </div>
  );
}

export default App;



