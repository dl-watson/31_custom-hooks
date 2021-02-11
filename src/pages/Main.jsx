import React from "react";
import List from "../components/list/List";
import useCharacters from "../services/useCharacters";
import Pagination from "react-js-pagination";
import styles from "./styles/Main.css";
import { useTheme } from "../providers/ThemeContext";

const Main = () => {
  const { loading, characters, activePage, handleClick } = useCharacters();
  const { themeStyles, toggleTheme } = useTheme();

  return loading ? (
    <>Loading...</>
  ) : (
    <>
      <section className={styles.Main} style={themeStyles}>
        <Pagination
          activePage={activePage}
          totalItemsCount={801}
          itemsCountPerPage={20}
          onChange={handleClick}
          firstPageText="first"
          lastPageText="last"
          prevPageText="prev"
          nextPageText="next"
        />
        <button onClick={toggleTheme} className={styles.toggleButton}>
          Toggle Theme
        </button>
      </section>
      <List characters={characters} themeStyles={themeStyles} />
    </>
  );
};

export default Main;
