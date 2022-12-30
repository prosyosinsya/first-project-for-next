import React from 'react'
import styles from "./Card.module.css"

interface pokemon {
  pokemon: {
    sprites: {
      front_default: string
    },
    name: string,
    types: [{
      slot: number,
      type: {
        name: string,
        url: string
      }
    }],
    weight: number,
    height: number,
    abilities: [{
      ability: {
        name: string
      }
    }]
  }
}

interface pokemonType {
  slot: number,
  type: {
    name: string,
    url: string
  }
}

export const Card = ({ pokemon }: pokemon) => {
  return (
    <div className={styles.card}>
      <div className="cardImg">
        <img src={pokemon.sprites.front_default} alt="" />
      </div>
      <h3 className={styles.cardName}>{pokemon.name}</h3>
      <div className="cardTypes">
        <div>タイプ</div>
        {pokemon.types.map((type: pokemonType) => {
          return <div key={type.type.name}>
            <span className='typeName'>{type.type.name}</span>
          </div>
        })}
      </div>
      <div className={styles.cardInfo}>
        <div className="cardData">
          <p className='title'>重さ : {pokemon.weight}</p>
        </div>
        <div className="cardData">
          <p className='title'>高さ : {pokemon.height}</p>
        </div>
        <div className="cardData">
          <p className='title'>アビリティ : {pokemon.abilities[0].ability.name}</p>
        </div>
      </div>
    </div>
  )
}
