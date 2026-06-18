import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { TableRow } from "./TableRow";

test("table row is visible", () => {
  render(
    <table>
      <tbody>
        <TableRow text="Test Row" />
      </tbody>
    </table>
  );

  expect(screen.getByText("Test Row")).toBeVisible();
});

test("table row background color changes when disabled", () => {
  render(
    <table>
      <tbody>
        <TableRow text="Disabled Row" disabled />
      </tbody>
    </table>
  );

  expect(screen.getByText("Disabled Row").parentElement).toHaveStyleRule(
    "background-color",
    "#1f2933"
  );
});