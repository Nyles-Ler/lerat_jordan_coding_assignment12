import styled from "styled-components";
import { TableRowProps } from "./TableRow.types";

interface StyledTableRowProps {
  $disabled?: boolean;
}

const StyledTableRow = styled.tr<StyledTableRowProps>`
  background-color: ${(props) =>
    props.$disabled ? "#1f2933" : "#050816"};

  color: ${(props) =>
    props.$disabled ? "#8a8f98" : "#f5f5f5"};

  border: 1px solid
    ${(props) => (props.$disabled ? "#4b5563" : "#8a3ffc")};

  opacity: ${(props) => (props.$disabled ? 0.7 : 1)};
`;

export const TableRow = ({
  text = "Table Row",
  disabled = false,
}: TableRowProps) => {
  return (
    <StyledTableRow $disabled={disabled}>
      <td>{text}</td>
    </StyledTableRow>
  );
};