import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
    const { data: images, loading } = useFetchGifs(category); //llamada al custom hooks y renombre data a images
    //devuelve los datos para ser pintados

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            {loading && (
                <p className="animate__animated animate__flash">Cargando...</p>
            )}
            <div className="card-grid">
                {images.map((img) => (
                    <GifGridItem key={img.id} {...img} /> //{...img} operador spread desestructura el objeto.
                ))}
            </div>
        </>
    );
};

export default GifGrid;
