import React, { useMemo } from "react";
import { Redirect, useParams } from "react-router";
import { getHeroById } from "../selectors/getHeroByID";

const HeroScreen = ({ history }) => {
    const { heroId } = useParams(); //obtengo el parámetro de la url

    //const hero = getHeroById(heroId);
    const hero = useMemo(() => getHeroById(heroId), [heroId]); //con useMemo para que no se renderice si no cambia.

    if (!hero) {
        //si no existe el heroe, redireccino a la Home
        return <Redirect to="/" />;
    }
    const {
        id,
        publisher,
        superhero,
        alter_ego,
        first_appearance,
        characters,
    } = hero;

    const handleReturn = () => {
        //valido para que si el historial es menor de 2 lleve a la página principal.
        //esto es válido por si abren la url en una nueva ventana, el boton atrás no sea por ejemplo google.
        if (history.length <= 2) {
            history.push("/");
            console.log("enrta ");
        } else {
            history.goBack(); //método de router para volver atrás
        }
    };

    return (
        <div>
            <h1>{superhero}</h1>
            <div className="row">
                <div className="col-md-4">
                    <img
                        src={`../assets/heroes/${id}.jpg`}
                        className="card-img-top animate__animated animate__fadeInTopLeft"
                        alt={superhero}
                    />
                </div>
                <div className="card-body col-md-8">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <b>Alter ego:</b> {alter_ego}
                        </li>
                        <li className="list-group-item">
                            <b>Characters:</b> {characters}
                        </li>
                        <li className="list-group-item">
                            <b>Publisher:</b> {publisher}
                        </li>
                        <li className="list-group-item">
                            <b>First Appearance:</b> {first_appearance}
                        </li>
                    </ul>

                    <button
                        className="btn btn-outline-info my-5 mx-3"
                        onClick={handleReturn}
                    >
                        Return
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroScreen;
