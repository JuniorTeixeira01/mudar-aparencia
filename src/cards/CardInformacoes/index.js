import React from 'react';
import './style.css';

function CardInformacoes(props) {
  let nomeAnimalCachorro = "Cachorro";
  let nomeAnimalGato = "Gato";
  let informacaoCachorro = "É um mamífero carnívoro da família dos canídeos.";
  let informacaoGato = "É um mamífero carnívoro da família dos felídeos.";
    
    return(
    <div className="CardInformacao">
      <h3>Informação sobre o {props.tipoAnimal === 'cachorro' ? nomeAnimalCachorro : nomeAnimalGato} </h3>
      <p>{props.informacaoAnimal === 'cachorro' ? informacaoCachorro : informacaoGato}</p>
    </div>
    )
};

export default CardInformacoes;