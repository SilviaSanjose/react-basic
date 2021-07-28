export const helpHttp = () => {
  //petición fetch
  const customFetch = (endpoint, options) => {
    const defaultHeader = {
      accept: "application/json", //esto sólo indica a la api que acepto application json
    };
    //AbortController (js) nos permite controlar las peticiones fetch y poder cancelarlas, por ejemplo para en caso de que el servidor este caído no se quede en una espera infinita
    const controller = new AbortController();
    options.signal = controller.signal; //añado a las opciones el controler con su método signal que me permita cancelar la petición

    //indico que el método será el que venga en la petición, pero si no viene método será GET
    options.method = options.method || "GET";

    //si en options recibidas hay headers, suma mis defaultHeaders y los recibidos, y si no, sólo los default
    options.headers = options.headers
      ? { ...defaultHeader, ...options.headers }
      : defaultHeader;
    //si hay body, lo transformo a cadena y si no, es false.
    options.body = JSON.stringify(options.body) || false;
    if (!options.body) delete options.body; //si no hya body lo elimina.

    //si después de 3 segundo no hay respuesta del servidor, aborta
    setTimeout(() => controller.abort(), 4000);

    return fetch(endpoint, options)
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({
              err: true,
              status: res.status || "00",
              statusText: res.statusText || "Ocurrió un error",
            })
      )
      .catch((err) => err);
  }; //end customFetch

  const get = (url, options = {}) => customFetch(url, options);
  const post = (url, options = {}) => {
    options.method = "POST";
    return customFetch(url, options);
  };
  const put = (url, options) => {
    options.method = "PUT";
    return customFetch(url, (options = {}));
  };
  const del = (url, options = {}) => {
    options.method = "DELETE";
    return customFetch(url, options);
  };

  return {
    get,
    post,
    put,
    del,
  };
};
