import styled from "styled-components";
import { TableCellProps } from "./TableCell.types";

interface StyledTableCellProps {
  $disabled?: boolean;
}

const StyledTableCell = styled.td<StyledTableCellProps>`
  background-color: ${(props) =>
    props.$disabled ? "#1f2933" : "#050816"};

  color: ${(props) =>
    props.$disabled ? "#8a8f98" : "#f5f5f5"};

  border: 1px solid
    ${(props) => (props.$disabled ? "#4b5563" : "#8a3ffc")};

  padding: 12px;
  opacity: ${(props) => (props.$disabled ? 0.7 : 1)};
`;

export const TableCell = ({
  text = "Table Cell",
  disabled = false,
}: TableCellProps) => {
  return <StyledTableCell $disabled={disabled}>{text}</StyledTableCell>;
};