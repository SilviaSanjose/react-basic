import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import PrimeraApp from "./PrimeraApp";
import CounterApp from "./CounterApp";
import heroes from "./data/heroes";

const divRoot = document.querySelector("#root");

ReactDOM.render(<PrimeraApp saludo="Hola desde index" />, divRoot);

//ReactDOM.render(<CounterApp value={0} />, divRoot);
<CounterApp value={0} />;

//buscar en arrays /*
const getHeroes = (id) => {
    return heroes.find((e) => e.id === id);
};
console.log("Heroe encontrado ", getHeroes(2));

const getHeroesO = (owner) => heroes.filter((e) => e.owner === owner);
console.log("Heroes de DC", getHeroesO("DC"));

//Promise opción 1
const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const heroe = getHeroes(2);
        //const heroe = "MI heroe";
        if (heroe) {
            resolve(heroe);
        }
        reject("No se ha encontrado heroe");
    }, 2000);
});

promesa
    .then((heroe) => {
        console.log("Heroe promesa ", heroe);
    })
    .catch((err) => console.warn(err));

//Promise opción 2
const getHeroesI = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroes(id);
            if (heroe) {
                resolve(heroe);
            }
            reject("No se ha encontrado heroeI");
        }, 2000);
    });
};
getHeroesI(20).then(console.log).catch(console.warn);

//fetch

const apiKey = "q7GsWJMiOp6JXymWFFHrRZVqSSaSBNDD";
//opción 1
const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
peticion
    .then((res) => res.json())
    .then(({ data }) => {
        console.log("Con fetch: ", data);
    })
    .catch(console.warn);
//opción 2
const getImgPromise = async () => {
    //incluimos el await que indica que espere a seguir con el código a que finalice el fetch
    const res = await fetch(
        `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const data1 = await res.json();
    const { data } = data1;
    console.log("Con Async-await: ", data);
};
getImgPromise();

const activo = false;
const mensaje = activo ? "Activo" : "Inactivo";
console.log(mensaje);

const mensaje2 = activo && "activo";
console.log(mensaje2);
