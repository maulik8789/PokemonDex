import React from 'react';
import "./Pokecard.css";

const Pokecard = ({id, name, image, type}) => {
    let imgsectionnk = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    return (
        <span className="Pokecard">
        <section>
            Name = {name}
        </section>
        <section>
            Image = <img src={imgsectionnk} alt="Pokemon Image"></img>
        </section>
        <section>
            Type = {type}
        </section>
        </span>
    )
}

export default Pokecard;