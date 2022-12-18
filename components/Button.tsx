import React from 'react'
import { getAllPokemon, getPokemon } from './pokemon'

const Button = ({ setLoading, nextPokemon, loadPokemon }) => {

  const handleNextPage = async () => {
    setLoading(true)
    let data = await getAllPokemon(nextPokemon);
    await loadPokemon(data.results);
    setLoading(false);
  }

  const handlePrevPage = () => {}

  return (
    <div className='btn'>
      <button onClick={handlePrevPage}>前へ</button>
      <button onClick={handleNextPage}>次へ</button>
    </div>
  )
}

export default Button