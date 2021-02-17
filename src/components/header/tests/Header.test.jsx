global.fetch = require("node-fetch");
import React from "react";
import { render, cleanup } from "@testing-library/react";
import Header from "../Header";
import { ThemeProvider } from "../../../providers/ThemeContext";
import { MemoryRouter as Router } from "react-router-dom";

describe("Header component", () => {
  afterEach(() => cleanup());
  it("renders Header", () => {
    const { asFragment } = render(
      <Router>
        <ThemeProvider>
          <Header />
        </ThemeProvider>
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
