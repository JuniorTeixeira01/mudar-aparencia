import React from 'react';
import './style.css';

function Topo(props) {
    const alteraState = () => {
        props.tipoAnimal === 'cachorro' ? props.setState('gato') : props.setState('cachorro')
    }
    
    return(
        <div>
          <header>
            <h1>Projeto props + useState </h1>
            <p>Clique no botão para mudar os componentes abaixo</p>
            <button onClick= {alteraState}>Mudar Animal</button>
          </header>
        </div>
    )
}
export default Topo;