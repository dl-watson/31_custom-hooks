import { useState, useEffect } from "react";

const useCharacters = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  // useEffect will call the fetchCharacters utility function

  return { loading, characters };
};
const [loading, setLoading] = useState(true);
