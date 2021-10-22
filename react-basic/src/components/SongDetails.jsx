import SongArtist from "./SongArtist";
import SongLyric from "./SongLyric";

const SongDetails = ({ search, lyric, bio }) => {
  return (
    <div>
      detalles
      <SongArtist />
      <SongLyric />
    </div>
  );
};

export default SongDetails;
