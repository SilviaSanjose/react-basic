import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import SongDetails from "../components/SongDetails";
import SongForm from "../components/SongForm";
import { helpHttp } from "../helpers/helpHttp";

const Songs = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (search === null) return;
    const fetchData = async () => {
      const { artist, song } = search;
      let artistUrl = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
      //let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      let songUrl = `https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?q_track=${song}&q_artist=${artist}&apikey=6a3fd7c9b61608a16166ff429c228b04`;

      //https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?q_track=AdventureofaLifetime&q_artist=coldplay&apikey=6a3fd7c9b61608a16166ff429c228b04

      setLoading(true);
      const [artistRes, songRes] = await Promise.all([
        //Promise.all hace que se espere a todas las llamadas
        //llama al helper con la url del artista y lo guarda en artistRes, y llama a helper con url de la canción que guarda en songRes
        helpHttp().get(artistUrl),
        //helpHttp().get(songUrl, {mode: "no-cors"}),
      ]);

      console.log("aaaa", artistRes, songRes);

      setBio(artistRes);
      setLyric(songRes);
      setLoading(false);
    };
    fetchData();
  }, [search]);

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
