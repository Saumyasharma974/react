import React from 'react';

const List = (props) => {
  const { curElem } = props; // Destructure curElem directly from props
  const btn_color = {
    padding: "1.2rem 2.4rem",
    border: "none",
    fontSize: "1rem",
    backgroundColor: `${curElem.rating >= 8.7 ? "#7dcea0" : "#f7dc6f"}`,
    color: "var(--btn-color)",
    borderRadius: "0.4rem",
    cursor: "pointer",
    transition: "background-color 0.2s ease-in-out"
  };
  return (
    <li className='card'>
      <div className='card-content'>
        <img src={curElem.img_url} alt={curElem.name} />
      </div>
      <div>
        <h2>Name: {curElem.name}</h2>
        {/* Access curElem.rating directly */}
        <h3>Rating:
          <span className={`rating ${curElem.rating >= 8.7 ? "superhi" : "averag"}`}>
            {curElem.rating}
          </span>
        </h3>
        <p className="text-3xl font-bold underline text-cyan-300">Summary: {curElem.description}</p>
        <p>Genre: {curElem.genre}</p>
        <p>Cast: {curElem.cast}</p>
        <a href={curElem.watch_url} target="_blank" rel="noopener noreferrer">
          <button
            style={btn_color}
          >
            Watch Now
          </button >
        </a>
      </div>
    </li>
  );
};

export default List;
