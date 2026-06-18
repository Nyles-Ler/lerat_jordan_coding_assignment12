import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { HeroImage } from "./HeroImage";

test("hero image is visible", () => {
  render(<HeroImage alt="Test Hero Image" />);
  expect(screen.getByAltText("Test Hero Image")).toBeVisible();
});

test("hero image opacity changes when disabled", () => {
  render(<HeroImage alt="Disabled Hero Image" disabled />);
  expect(screen.getByAltText("Disabled Hero Image")).toHaveStyleRule(
    "opacity",
    "0.5"
  );
});