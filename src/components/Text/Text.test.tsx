import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { Text } from "./Text";

test("text is visible", () => {
  render(<Text text="Test Text" />);
  expect(screen.getByText("Test Text")).toBeVisible();
});

test("text background color changes when disabled", () => {
  render(<Text text="Disabled Text" disabled />);

  expect(screen.getByText("Disabled Text")).toHaveStyleRule(
    "background-color",
    "#1f2933"
  );
});