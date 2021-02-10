import React from "react";
import PropTypes from "prop-types";
import titleCase from "../../utils/titleCase";
import styles from "./styles/ItemDetails.css";
import { useTheme } from "../../providers/ThemeContext";

const ItemDetails = ({ character }) => {
  const { themeStyles } = useTheme();

  [character] = character;
  return (
    <main className={styles.ItemDetails} style={themeStyles}>
      <article>{titleCase(character.pokemon)}</article>
      <img src={character.url_image} alt={titleCase(character.pokemon)} />
      <section className={styles.details}>
        <p>Height: {character.height}</p>
        <p>Weight: {character.weight}</p>
        <p>Primary Type: {character.type_1}</p>
        <p>Secondary Type: {character.type_2}</p>
        <p>Pokebase: {character.pokebase}</p>
      </section>
    </main>
  );
};

ItemDetails.propTypes = {
  character: PropTypes.array,
};

export default ItemDetails;
