import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { Table } from "./Table";

test("table is visible", () => {
  render(<Table />);
  expect(screen.getByText("Skill")).toBeVisible();
});

test("table background color changes when disabled", () => {
  const { container } = render(<Table disabled />);

  expect(container.firstChild).toHaveStyleRule(
    "background-color",
    "#1f2933"
  );
});