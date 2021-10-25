import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
    const [categories, setCategories] = useState(["One Puch"]);

    /* const handleAdd = () => {
        //setCategories([...categories, "BUU"]);
        setCategories((call) => [...categories, "BUU"]);
    }; */

    return (
        <>
            <h2>GitExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            {/*envio al componente hijo la función */}
            <hr />
            {/*<button onClick={handleAdd}> Agregar</button> */}

            {categories.map((c) => (
                <GifGrid key={c} category={c} />
            ))}
        </>
    );
};

export default GifExpertApp;
