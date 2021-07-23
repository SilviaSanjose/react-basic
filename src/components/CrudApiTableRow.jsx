const CrudApiTableRow = ({ el, setDataToEdit, deleteData }) => {
  let { name, constellation, id } = el;

  return (
    <tr>
      <td>{name}</td>
      <td>{constellation}</td>
      <td>
        <button onClick={() => setDataToEdit(el)}>Editar</button>
        <button onClick={() => deleteData(id)}>Borrar</button>
      </td>
    </tr>
  );
};

export default CrudApiTableRow;
