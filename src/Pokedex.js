import React from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";


let Pokedex = (props) => {
    let winMessage = null;
    if (props.isWinner){
    winMessage = <p className="Pokedex-winner">THIS HAND WINS!</p>;
    }

    return (
        <div className="Pokedex">
            {/* <h2 className="Pokedex-title">Pokedex</h2> */}
            <div className="Pokedex-cards">
            {props.pokemon.map(p => (
                <Pokecard
                    id={p.id}
                    name={p.name}
                    type={p.type}
                    exp={p.base_experience}
                />
            ))}
            <h3>{winMessage}</h3>
            </div>
        </div>
    )
}

export default Pokedex;