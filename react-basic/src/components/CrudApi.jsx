import { useState, useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";
import CrudApiForm from "./CrudApiForm";
import CrudApiTable from "./CrudApiTable";
import Loader from "./Loader";
import Message from "./Message";

const CrudApi = () => {
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  //let api = helpHttp();
  let url = "http://localhost:5000/caballeros";

  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(url)
      .then((res) => {
        console.log(res);
        if (!res.err) {
          setDb(res);
          setError(null);
        } else {
          setDb(null);
          setError(res);
        }

        setLoading(false);
      });
  }, [url]);

  const createData = (data) => {
    //recibe data de CrudApiForm
    data.id = Date.now();
    let options = {
      body: data,
      headers: { "content-type": "application/json" }, //añado header porque esta api necesita que le pasemos el content-type
    };
    helpHttp()
      .post(url, options)
      .then((res) => {
        if (!res.err) {
          setDb([...db, res]);
          // setError(null);
        } else {
          //setDb(null);
          setError(res);
        }
      });
    setDb([...db, data]);
  };

  const updateDate = (data) => {
    let options = {
      body: data,
      headers: { "content-type": "application/json" }, //añado header porque esta api necesita que le pasemos el content-type
    };
    helpHttp()
      .put(`${url}/${data.id}`, options)
      .then((res) => {
        if (!res.err) {
          let newData = db.map((el) => (el.id === data.id ? data : el));
          setDb(newData);
        } else {
          setError(res);
        }
      });
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(`¿Estas seguro de eliminar el id ${id}?`);
    if (isDelete) {
      let options = {
        headers: { "content-type": "application/json" }, //añado header porque esta api necesita que le pasemos el content-type
      };
      helpHttp()
        .del(`${url}/${id}`, options)
        .then((res) => {
          if (!res.err) {
            let newData = db.filter((el) => el.id !== id);
            setDb(newData);
          } else {
            setError(res);
          }
        });
    } else {
      return;
    }
  };
  return (
    <div>
      <div>
        Para esta llamada nos ayudamos de un helper que recoger las peticiones y
        hace las llamadas a la api ya sean get,post, etc...
      </div>
      <CrudApiForm
        createData={createData}
        updateData={updateDate}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      {loading && <Loader />}
      {error && (
        <Message
          msg={`Error ${error.status}: ${error.statusText}`}
          bgColor="#dc3546"
        />
      )}
      {db && (
        <CrudApiTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      )}
    </div>
  );
};

export default CrudApi;
