import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import titleCase from "../../utils/titleCase";
import uuid from "react-uuid";
import styles from "./styles/List.css";

const List = ({ characters, themeStyles }) => {
  const characterList = characters.map((character) => {
    return (
      <li key={uuid()}>
        {titleCase(character.pokemon)}
        <Link to={`/details/${character.pokemon}`}>
          <img src={character.url_image} alt={titleCase(character.pokemon)} />
        </Link>
      </li>
    );
  });

  return (
    <ul className={styles.List} style={themeStyles}>
      {characterList}
    </ul>
  );
};

List.propTypes = {
  characters: PropTypes.array,
  themeStyles: PropTypes.object,
};

export default List;
