import React from 'react';
import './style.css';
import ImagemCachorro from '../../assets/cachorro.jpeg';
import ImagemGato from '../../assets/gato.jpeg';

const CardAnimal = (props) => (
     
     <div className = "CardAnimal">
       <img src={props.tipoAnimal === 'cachorro' ? ImagemCachorro : ImagemGato} alt="animal" />
     </div>
);

export default CardAnimal;

