import React, { useMemo } from "react";
import queryString from "query-string";
import { useLocation } from "react-router";
import useForm from "../../hooks/useForm";
import HeroCard from "../heroes/HeroCard";
import { getHeroByName } from "../selectors/getHeryByName";

//trabajando con queryString
const SearchScreen = ({ history }) => {
    const location = useLocation();
    const { q = "" } = queryString.parse(location.search); //solo necesito el parámetro llamado q, y si no hya datos que sea cadena vacia

    //como valor inicial le paso la query y así en caso de refresco cargará la última búsqueda.
    const [values, handleInputChange] = useForm({ name: q });
    const { name } = values;

    const heroesFilter = useMemo(() => getHeroByName(q), [q]);

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${name}`); //añado a la url queryString
    };
    return (
        <div>
            <h1>Search Screen</h1>
            <div className="row">
                <div className="col-5">
                    <h4>Search form</h4>
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="name"
                            value={name}
                            onChange={handleInputChange}
                        />
                        <button
                            type="submit"
                            className="btn btb-block btn-outline-primary"
                        >
                            Search
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Result</h4>

                    {/* Si es string vacío la query es que no se ha buscado nada */}
                    {q === "" && (
                        <div className="alert alert-info">Search a hero</div>
                    )}

                    {/* Si no es string vacío la query, y si el resultado no es [] */}
                    {q !== "" && heroesFilter.length === 0 && (
                        <div className="alert alert-warning">
                            Hero "{q}" not found
                        </div>
                    )}
                    {heroesFilter.map((hero) => (
                        <HeroCard key={hero.id} {...hero} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SearchScreen;
