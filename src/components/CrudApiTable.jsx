import CrudApiTableRow from "./CrudApiTableRow";

const CrudApiTable = ({ data, setDataToEdit, deleteData }) => {
  console.log("datos en tabla", data);
  console.log(data.length);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Constelación</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((el) => (
              // <CrudApiTableRow
              //   key={el.id}
              //   el={el}
              //   setDataToEdit={setDataToEdit}
              //   deleteData={deleteData}
              // />

              <tr key={el.id}>
                <td>{el.name}</td>
                <td>{el.constellation}</td>
                <td>
                  <button onClick={() => setDataToEdit(el)}>Editar</button>
                  <button onClick={() => deleteData(el.id)}>Borrar</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No hay datos!</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CrudApiTable;
