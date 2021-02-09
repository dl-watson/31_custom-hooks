import React from "react";
import PropTypes from "prop-types";
import titleCase from "../../utils/titleCase";

const ItemDetails = ({ character }) => {
  [character] = character;
  return (
    <div>
      {titleCase(character.pokemon)}
      <img src={character.url_image} alt={titleCase(character.pokemon)} />
      <div>
        <p>Height: {character.height}</p>
        <p>Weight: {character.weight}</p>
        <p>Primary Type: {character.type_1}</p>
        <p>Secondary Type: {character.type_2}</p>
        <p>Pokebase: {character.pokebase}</p>
      </div>
    </div>
  );
};

ItemDetails.propTypes = {
  character: PropTypes.array,
};

export default ItemDetails;
