import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { TableCell } from "./TableCell";

test("table cell is visible", () => {
  render(
    <table>
      <tbody>
        <tr>
          <TableCell text="Test Cell" />
        </tr>
      </tbody>
    </table>
  );

  expect(screen.getByText("Test Cell")).toBeVisible();
});

test("table cell background color changes when disabled", () => {
  render(
    <table>
      <tbody>
        <tr>
          <TableCell text="Disabled Cell" disabled />
        </tr>
      </tbody>
    </table>
  );

  expect(screen.getByText("Disabled Cell")).toHaveStyleRule(
    "background-color",
    "#1f2933"
  );
});