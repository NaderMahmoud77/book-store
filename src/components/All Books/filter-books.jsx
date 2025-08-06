export let FilterBooks = ({ selectedId, setSelectedId }) => {
  let handleRadioChange = (event) => {
    setSelectedId(event.target.id);
  };

  return (
    <div className="input-filter">
      <input
        type="radio"
        id="business"
        name="book"
        onChange={handleRadioChange}
        checked={selectedId === "business"}
      />
      <label htmlFor="business">Business</label>

      <input
        type="radio"
        id="romantic"
        name="book"
        onChange={handleRadioChange}
        checked={selectedId === "romantic"}
      />
      <label htmlFor="romantic">Romantic</label>

      <input
        type="radio"
        id="selfDevelopment"
        name="book"
        onChange={handleRadioChange}
        checked={selectedId === "selfDevelopment"}
      />
      <label htmlFor="selfDevelopment">Self-Development</label>
    </div>
  );
};
