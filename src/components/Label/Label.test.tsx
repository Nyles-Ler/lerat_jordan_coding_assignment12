import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { Label } from "./Label";

test("label is visible", () => {
  render(<Label text="Test Label" />);
  expect(screen.getByText("Test Label")).toBeVisible();
});

test("label background color changes when disabled", () => {
  render(<Label text="Disabled Label" disabled />);

  expect(screen.getByText("Disabled Label")).toHaveStyleRule(
    "background-color",
    "#1f2933"
  );
});