import React from "react";
import { Link } from "react-router-dom";

const HeroCard = ({
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters,
}) => {
    return (
        <div className="card" style={{ padding: 0 }}>
            <div className="row">
                <div className="col-md-4">
                    <img
                        src={`./assets/heroes/${id}.jpg`}
                        className="card-img-top"
                        alt={superhero}
                    />
                </div>
                <div className="card-body col-md-8">
                    <h5>{superhero}</h5>
                    <p>{alter_ego}</p>
                    {alter_ego !== characters && <p>{characters}</p>}

                    <p>
                        <small>{first_appearance}</small>
                    </p>
                    <Link to={`./hero/${id}`}>Más...</Link>
                </div>
            </div>
        </div>
    );
};

export default HeroCard;
