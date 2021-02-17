import React from "react";
import Pagination from "react-js-pagination";
import List from "../components/list/List";
import { useTheme } from "../providers/ThemeContext";
import useCharacters from "../services/useCharacters";
import styles from "./styles/Main.css";

const Main = () => {
  const { loading, characters, activePage, handleClick } = useCharacters();
  const { themeStyles } = useTheme();

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
      </section>
      <List characters={characters} themeStyles={themeStyles} />
    </>
  );
};

export default Main;
