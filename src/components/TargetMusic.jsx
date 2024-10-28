import "../styles/cardMusic.css";

export const TargetMusic = ({ name, autor, image }) => {
  return (
    <div className="target-content">
      <img src={image} alt="" className="images-music" />
      <p className="name-composer">{autor}</p>
      <p className="name-song">{name}</p>
      <nav className="song-durations">
        <p className="time">0</p>
        <p className="time">9</p>
      </nav>
      <input type="range" className="range-durations" />
    </div>
  );
};
