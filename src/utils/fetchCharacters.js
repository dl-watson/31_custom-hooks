const endpoint = "https://pokedex-alchemy.herokuapp.com/api/pokedex";

const fetchCharacters = () => {
  return fetch(endpoint)
    .then((res) => res.json())
    .then((data) => data.results);
};

export default fetchCharacters;
