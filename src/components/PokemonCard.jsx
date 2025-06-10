import React from 'react'
import './css/PokemonCard.css'
import { RiDeleteBin2Line } from 'react-icons/ri'

const PokemonCard = ({ poke, onToggle, onRemove }) => {
   return (
      <li>
         <div className={`pokemon-card ${poke.disabled ? 'disabled' : ''}`} onDoubleClick={() => onToggle(poke.id)}>
            <img src={poke.img} alt={poke.name} width="150" className={poke.disabled ? 'grayscale' : ''} />
            <p className={poke.disabled ? 'disabled-text' : ''}>{poke.name}</p>
            <button className="delete" onClick={() => onRemove(poke.id)}>
               삭제 <RiDeleteBin2Line style={{ fontSize: '18px' }} />
            </button>
         </div>
      </li>
   )
}

export default PokemonCard
