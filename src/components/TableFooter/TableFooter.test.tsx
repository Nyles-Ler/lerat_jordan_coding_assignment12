import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { TableFooter } from "./TableFooter";

test("table footer is visible", () => {
  render(
    <table>
      <TableFooter text="Test Footer" />
    </table>
  );

  expect(screen.getByText("Test Footer")).toBeVisible();
});

test("table footer background color changes when disabled", () => {
  render(
    <table>
      <TableFooter text="Disabled Footer" disabled />
    </table>
  );

  expect(screen.getByText("Disabled Footer").closest("tfoot")).toHaveStyleRule(
    "background-color",
    "#1f2933"
  );
});