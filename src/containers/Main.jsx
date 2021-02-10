import React from "react";
import List from "../components/list/List";
import useCharacters from "../services/useCharacters";
import Pagination from "react-js-pagination";
import styles from "./styles/Main.css";

const Main = () => {
  const { loading, characters, activePage, handleClick } = useCharacters();

  // useContext refactor: Main.jsx should display a button that can toggle between light and dark modes
  // to accomplish this, we'll create a context elsewhere and import it into this file
  // the only thing that we'll end up using in this terminating component is a handler, like setTheme
  // the theme will be exported to the Details component, which is not a child of Main.jsx

  return loading ? (
    <>Loading...</>
  ) : (
    <>
      <section className={styles.Main}>
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
      <List characters={characters} />
    </>
  );
};

export default Main;
