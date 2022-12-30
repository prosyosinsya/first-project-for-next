import React, {Dispatch, SetStateAction} from 'react'
import { getAllPokemon, getPokemon } from './pokemon'
import styles from "./Button.module.css"

interface pokemonData {
  count: number, 
  next: string, 
  previous: string,
  results: [{
    name: string,
    url: string
  }]
}

interface Props {
  setLoading: Dispatch<SetStateAction<boolean>>;  
  loadPokemon: Function;
  nextPokemon: string; 
  setNextPokemon: Dispatch<SetStateAction<string>>; 
  prevPokemon: string;
  setPrevPokemon: Dispatch<SetStateAction<string>>; 
}

const Button = ({ 
  setLoading, 
  loadPokemon, 
  nextPokemon, 
  setNextPokemon, 
  prevPokemon, 
  setPrevPokemon 
}: Props) => {
  const handleNextPage = async () => {
    setLoading(true)
    let data: pokemonData  = await getAllPokemon(nextPokemon);
    await loadPokemon(data.results);
    setNextPokemon(data.next);
    setPrevPokemon(data.previous);
    setLoading(false);
  }

  const handlePrevPage = async () => {
    if(!prevPokemon) return;
    setLoading(true)
    let data: pokemonData = await getAllPokemon(prevPokemon);
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