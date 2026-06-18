import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { RadioButton } from "./RadioButton";

test("radio button is visible", () => {
  render(<RadioButton label="Test Radio" />);
  expect(screen.getByText("Test Radio")).toBeVisible();
});

test("radio button background color changes when disabled", () => {
  render(<RadioButton label="Disabled Radio" disabled />);

  expect(screen.getByText("Disabled Radio")).toHaveStyleRule(
    "background-color",
    "#1f2933"
  );
});