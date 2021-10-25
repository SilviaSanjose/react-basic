import React from "react";

//memo usa una una versión memorizada del componente para volver a dibujarlo, y sólo lo renderiza de nuevo si sus propiedades cambian.
const Small = React.memo(({ value }) => {
    console.log("llamando a Small desde Memorize");
    return <strong>{value}</strong>;
});

export default Small;
