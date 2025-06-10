import React from 'react'
import './css/PokemonInput.css'

const PokemonInput = ({ inputName, onChange, onClick }) => {
   return (
      <div className="input-container">
         <input value={inputName} onChange={onChange} placeholder="포켓몬 이름을 입력해주세요"></input>
         <button onClick={onClick}>등록</button>
      </div>
   )
}

export default PokemonInput
