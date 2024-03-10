export default function Card({ name, clickHandler, backgroundUrl }) {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
    name + 1
  }.png`;

  return (
    <div className="card" onClick={() => clickHandler(name)}>
      <div
        className="card-img"
        style={{
          background: `url(${backgroundUrl})`,
        }}
        className="card-bg"
      >
        <img src={imageUrl} alt="card-img" className="pokemon-img" />
      </div>
      <h3>{name}</h3>
    </div>
  );
}

