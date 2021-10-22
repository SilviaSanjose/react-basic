import { useParams } from "react-router-dom";

const RutaAnidada = () => {
  let { anidada } = useParams();

  return (
    <div>
      <div>
        Recargo el componente de la ruta: <b>{anidada}</b>
      </div>
      {anidada === "anidada1" ? <div>111111111</div> : <div>22222222</div>}
    </div>
  );
};

export default RutaAnidada;
