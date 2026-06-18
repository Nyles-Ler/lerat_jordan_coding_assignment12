import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { Img } from "./Img";

test("image is visible", () => {
  render(<Img alt="Test Image" />);
  expect(screen.getByAltText("Test Image")).toBeVisible();
});

test("image opacity changes when disabled", () => {
  render(<Img alt="Disabled Image" disabled />);

  expect(screen.getByAltText("Disabled Image")).toHaveStyleRule(
    "opacity",
    "0.5"
  );
});