import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { Button } from "./Button";

test("button is visible", () => {
  render(<Button text="Test Button" />);
  expect(screen.getByText("Test Button")).toBeVisible();
});

test("button background color changes when disabled", () => {
  render(<Button text="Disabled Button" disabled />);
  expect(screen.getByText("Disabled Button")).toHaveStyleRule(
    "background-color",
    "#1f2933"
  );
});