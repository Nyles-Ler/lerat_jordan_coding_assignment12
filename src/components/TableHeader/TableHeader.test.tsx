import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { TableHeader } from "./TableHeader";

test("table header is visible", () => {
  render(
    <table>
      <thead>
        <tr>
          <TableHeader text="Test Header" />
        </tr>
      </thead>
    </table>
  );

  expect(screen.getByText("Test Header")).toBeVisible();
});

test("table header background color changes when disabled", () => {
  render(
    <table>
      <thead>
        <tr>
          <TableHeader text="Disabled Header" disabled />
        </tr>
      </thead>
    </table>
  );

  expect(screen.getByText("Disabled Header")).toHaveStyleRule(
    "background-color",
    "#1f2933"
  );
});