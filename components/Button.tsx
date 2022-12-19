import React from 'react'
import { getAllPokemon, getPokemon } from './pokemon'
import styles from "./Button.module.css"

const Button = ({ setLoading, nextPokemon, loadPokemon, setNextPokemon, prevPokemon, setPrevPokemon }) => {

  const handleNextPage = async () => {
    setLoading(true)
    let data = await getAllPokemon(nextPokemon);
    await loadPokemon(data.results);
    setNextPokemon(data.next);
    setPrevPokemon(data.previous);
    setLoading(false);
  }

  const handlePrevPage = async () => {
    if(!prevPokemon) return;
    setLoading(true)
    let data = await getAllPokemon(prevPokemon);
    await loadPokemon(data.results);
    setNextPokemon(data.next);
    setPrevPokemon(data.previous);
    setLoading(false);
  }

  return (
    <div className={styles.btn}>
      <button className={styles.button} onClick={handlePrevPage}>前へ</button>
      <button className={styles.button} onClick={handleNextPage}>次へ</button>
    </div>
  )
}

export default Button