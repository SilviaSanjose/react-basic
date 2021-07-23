import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null); //datos recibidos
  const [isPending, setIsPendin] = useState(true); //comporbar estado de la petición
  const [error, setError] = useState(null); //recoger posibles errores de la llamada

  useEffect(() => {
    const getData = async (url) => {
      try {
        let res = await fetch(url);

        if (!res.ok) {
          // eslint-disable-next-line no-throw-literal
          throw {
            error: true,
            status: res.status,
            statusText: !res.statusText ? "Ocurrio un error" : res.statusText,
          };
        }

        let data = await res.json();
        console.log("***", data);

        setIsPendin(false);
        setData(data);
        setError({ error: false });
      } catch (error) {
        console.log("Error", error);
        setIsPendin(true);
        setError(error);
      }
    };
    getData(url);
  }, [url]);

  return { data, isPending, error };
};

//ejemplo 2 hook
/* ***hook***
import { useState, useEffect } from 'react'
function useFetch(url, defaultValue) {
   const [data, setData] = useState(defaultValue)
   const [error, setError] = useState(null)
   useEffect(() => {
     fetch(url)
       .then(response => response.json())
       .then(data => {
         setData(data)
       })
       .catch(err => {
         setError(err)
       })
   }, [])
   return { data, error }
}
export default useFetch

***componente***
import React, { useEffect, useState } from 'react'
import useFetch from './useFetch'
const DataList = () => {
   const users = useFetch('https://jsonplaceholder.typicode.com/users', [])
   const posts = useFetch('https://jsonplaceholder.typicode.com/posts', [])
   return (
     <>
       <h2>Usuarios</h2>
       <ul>
         {users.data.map(user => (
           <li key={user.id}>{user.name}</li>
         ))}
       </ul>
       <h2>Posts</h2>
       <ul>
         {posts.data.map(posts => (
           <li key={posts.id}>{posts.title}</li>
         ))}
       </ul>
     </>
   )
}
export default DataList
*/
