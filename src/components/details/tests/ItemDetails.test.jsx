global.fetch = require("node-fetch");
import React from "react";
import { render, cleanup } from "@testing-library/react";
import ItemDetails from "../ItemDetails";
import { ThemeProvider } from "../../../providers/ThemeContext";

describe("ItemDetails component", () => {
  afterEach(() => cleanup());
  it("renders ItemDetails", () => {
    const { asFragment } = render(
      <ThemeProvider>
        <ItemDetails character={[{ pokemon: "pokemon" }]} />
      </ThemeProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
