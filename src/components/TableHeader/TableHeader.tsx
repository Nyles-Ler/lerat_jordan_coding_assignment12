import styled from "styled-components";
import { TableHeaderProps } from "./TableHeader.types";

interface StyledTableHeaderProps {
  $disabled?: boolean;
}

const StyledTableHeader = styled.th<StyledTableHeaderProps>`
  background-color: ${(props) =>
    props.$disabled ? "#1f2933" : "#050816"};

  color: ${(props) =>
    props.$disabled ? "#8a8f98" : "#b84dff"};

  border: 1px solid
    ${(props) => (props.$disabled ? "#4b5563" : "#8a3ffc")};

  box-shadow: ${(props) =>
    props.$disabled ? "none" : "0 0 10px rgba(138, 63, 252, 0.5)"};

  padding: 12px;
  letter-spacing: 1px;
  opacity: ${(props) => (props.$disabled ? 0.7 : 1)};
`;

export const TableHeader = ({
  text = "Table Header",
  disabled = false,
}: TableHeaderProps) => {
  return <StyledTableHeader $disabled={disabled}>{text}</StyledTableHeader>;
};