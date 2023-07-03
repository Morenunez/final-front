import React from 'react';
import './card.css';

export const Card = ({preferencesData}) => {
  const {verdura, fruta, experiencia} = preferencesData
  return (
    <div className='card'>
        <p className='title'>¡Formulario enviado!</p>
        <p>Pronto tu huerta estará llena de {verdura} y {fruta}</p>
        <p>Pero no te preocupes, tu huerta te permitirá ganar experiencia a partir de tu nivel {experiencia}</p>
    </div>
  )
}
