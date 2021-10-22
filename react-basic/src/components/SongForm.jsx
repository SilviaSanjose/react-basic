import React, { useState } from "react";

const initialForm = {
  artist: "",
  song: "",
};
const SongForm = ({ handleSearch }) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.artist || !form.song) {
      alert("No has rellenado los datos");
      return;
    }
    handleSearch(form); //se pasan los datos del formulario al componente Song
    setForm(initialForm);
  };

  return (
    <>
      <form className="song-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="artist"
          placeholder="Indica el artista"
          onChange={handleChange}
          value={form.artist}
        ></input>
        <input
          type="text"
          name="song"
          placeholder="Indica la canción"
          onChange={handleChange}
          value={form.song}
        ></input>

        <input type="submit" value="Buscar" />
      </form>
    </>
  );
};

export default SongForm;
