import React from "react";
import PropTypes from "prop-types";
import titleCase from "../../utils/titleCase";
import uuid from "react-uuid";
import styles from "./styles/List.css";

const List = ({ characters }) => {
  const characterList = characters.map((character) => {
    return (
      <li key={uuid()}>
        {titleCase(character.pokemon)}
        <img src={character.url_image} />
      </li>
    );
  });

  return <ul className={styles.List}>{characterList}</ul>;
};

List.propTypes = {
  characters: PropTypes.array,
};

export default List;
