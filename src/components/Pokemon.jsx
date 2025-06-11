import React, { useState, useCallback } from 'react'
import PokemonInput from './PokemonInput'
import PokemonCard from './PokemonCard'
import './css/Pokemon.css'
import { MdOutlineCatchingPokemon } from 'react-icons/md'
import { SiPokemon } from 'react-icons/si'

const Pokemon = () => {
   const [pokemons, setPoke] = useState([
      { id: 1, name: '내루미', img: '/images/내루미.png', disabled: false },
      { id: 2, name: '데인차', img: '/images/데인차.png', disabled: false },
      { id: 3, name: '플라베베', img: '/images/플라베베.png', disabled: false },
   ])

   const [inputName, setInputName] = useState('')
   const [nextId, setNextId] = useState(4)

   const onChange = useCallback((e) => {
      setInputName(e.target.value)
   }, [])

   const onClick = useCallback(() => {
      if (inputName.trim() === '') {
         alert('포켓몬 이름을 입력해주세요')
         return
      }

      setPoke((nextPokes) =>
         nextPokes.concat({
            id: nextId,
            name: inputName,
            img: `/images/${inputName}.png`,
            disabled: false,
         })
      )

      setNextId((nextId) => nextId + 1)
      setInputName('')
   }, [nextId, inputName])

   const onToggle = useCallback((id) => {
      setPoke((nextPokes) => nextPokes.map((poke) => (poke.id === id ? { ...poke, disabled: !poke.disabled } : poke)))
   }, [])

   const onRemove = useCallback((id) => {
      setPoke((nextPokes) => nextPokes.filter((poke) => poke.id !== id))
   }, [])

   const pokesList = pokemons.map((poke) => <PokemonCard key={poke.id} poke={poke} onToggle={onToggle} onRemove={onRemove} />)

   return (
      <>
         <SiPokemon className="logo" />
         <h2>
            포켓몬 도감 <MdOutlineCatchingPokemon />
         </h2>
         <PokemonInput inputName={inputName} onChange={onChange} onClick={onClick} />
         <ul>{pokesList}</ul>
      </>
   )
}

export default Pokemon
