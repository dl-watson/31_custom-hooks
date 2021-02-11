global.fetch = require("node-fetch");
import React from "react";
import { render, cleanup } from "@testing-library/react";
import Header from "../Header";
import { ThemeProvider } from "../../../providers/ThemeContext";

describe("Header component", () => {
  afterEach(() => cleanup());
  it("renders Header", () => {
    const { asFragment } = render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
