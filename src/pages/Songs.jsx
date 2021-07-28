import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import SongDetails from "../components/SongDetails";
import SongForm from "../components/SongForm";

const Songs = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = (data) => {
    setSearch(data);
  };

  return (
    <>
      <h2>Song search</h2>
      {loading && <Loader />}
      <SongForm handleSearch={handleSearch} />
      <SongDetails search={search} lyric={lyric} bio={bio} />
    </>
  );
};

export default Songs;
