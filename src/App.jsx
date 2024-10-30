import "./App.css";
import { TargetMusic } from "./components/TargetMusic";
import { songs } from "./components/Canciones.js";
import { useState } from "react";

const App = () => {
  const imagePlay =
    "https://www.dropbox.com/scl/fi/pxxfa3pmfa446z31l0wwq/boton-de-play-1.png?rlkey=lug2fd4gzhgyqldryovozjpbv&st=ig207ngw&dl=1";
  const imagepause =
    "https://www.dropbox.com/scl/fi/tmzhoquqoqs3bg6idja6t/boton-de-pausa.png?rlkey=z418mpnpej8w6hpzycjmnifzo&st=pzkh6xlp&dl=1";
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [playSong, setPlaySong] = useState(imagePlay);

  const playPause = playSong ? imagePlay : imagepause;

  const handelPlay = () => {
    song.play();
    setPlaySong(!playSong);
  };

  const handleNextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };
  const handlePreviousSong = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === 0 ? songs.length - 1 : prevIndex - 1
    );
  };
  const currentSong = songs[currentSongIndex];
  const song = new Audio();
  song.src = currentSong.melody;
  song.load();

  return (
    <div className="body">
      <h1 className="title">REPRODUCTOR KR</h1>
      <TargetMusic
        image={currentSong.image}
        autor={currentSong.autor}
        name={currentSong.name}
      />
      <div className="button-song">
        <img
          onClick={handlePreviousSong}
          className="song-left"
          src="https://www.dropbox.com/scl/fi/93x4ekxwuvpv3kwbpxc12/anterior-1.png?rlkey=pe7bl98rqnr2a5kuyjnq8alqt&st=s4ro36dq&dl=1"
        />
        <img onClick={handelPlay} src={playPause} alt="" />
        <img
          className="song-right"
          onClick={handleNextSong}
          src="https://www.dropbox.com/scl/fi/diddng3x37s5alc2sf4do/siguiente-boton.png?rlkey=ewdl7zoaky0yvaeaz1p07n7k9&st=7z6ia3ra&dl=1"
          alt=""
        />
      </div>
    </div>
  );
};

export default App;
