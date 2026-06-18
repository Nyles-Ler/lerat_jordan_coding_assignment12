import styled from "styled-components";
import { TableProps } from "./Table.types";
import { TableHeader } from "../TableHeader/TableHeader";
import { TableRow } from "../TableRow/TableRow";
import { TableFooter } from "../TableFooter/TableFooter";

interface StyledTableProps {
  $disabled?: boolean;
}

const StyledTable = styled.table<StyledTableProps>`
  width: 100%;
  border-collapse: collapse;
  background-color: ${(props) => (props.$disabled ? "#1f2933" : "#050816")};

  border: 1px solid
    ${(props) => (props.$disabled ? "#4b5563" : "#8a3ffc")};

  box-shadow: ${(props) =>
    props.$disabled ? "none" : "0 0 18px rgba(138, 63, 252, 0.6)"};

  border-radius: 10px;
  overflow: hidden;
  opacity: ${(props) => (props.$disabled ? 0.7 : 1)};

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const Table = ({ disabled = false }: TableProps) => {
  return (
    <StyledTable $disabled={disabled}>
      <thead>
        <tr>
          <TableHeader text="Skill" disabled={disabled} />
        </tr>
      </thead>

      <tbody>
        <TableRow text="React" disabled={disabled} />
        <TableRow text="TypeScript" disabled={disabled} />
        <TableRow text="Storybook" disabled={disabled} />
      </tbody>

      <TableFooter text="Component Library" disabled={disabled} />
    </StyledTable>
  );
};