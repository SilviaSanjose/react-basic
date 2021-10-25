import React, { useMemo } from "react";
import { getHeroesByPublisher } from "../selectors/getHeroesByPublisher";
import HeroCard from "./HeroCard";

const HeroesList = ({ publisher }) => {
    //llamada a la función que filtra y devuelve el listado de Heroes indicado
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]); //con useMemo para que no se renderice si no cambia.

    //const heroes = getHeroesByPublisher(publisher);

    return (
        <div className="row row-cols-1 row-cols-md-2 g-4 animate__animated animate__fadeIn">
            {heroes.map((hero) => (
                <HeroCard
                    className="col"
                    key={hero.id}
                    {...hero} /* extrae cada propiedad con spread operator y las envía */
                ></HeroCard>
            ))}
        </div>
    );
};

export default HeroesList;
