import './searchBar.css';

const SearchBar = ({ onChange, onSearch }) => {
  const handleChange = (e) => {
    const { value } = e.target;
    onChange(value);
  };
  const handleKeyPress = (e) => {
    if (e.which === 13) {
      onSearch();
    }
  };
  return (
    <div className="search-bar">
      <input
        type="text"
        autoFocus={true}
        spellCheck={false}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
