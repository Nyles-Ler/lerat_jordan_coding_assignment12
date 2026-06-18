import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { Dropdown } from "./Dropdown";

test("dropdown is visible", () => {
  render(<Dropdown />);
  expect(screen.getByRole("combobox")).toBeVisible();
});

test("dropdown background color changes when disabled", () => {
  render(<Dropdown disabled />);
  expect(screen.getByRole("combobox")).toHaveStyleRule(
    "background-color",
    "#1f2933"
  );
});