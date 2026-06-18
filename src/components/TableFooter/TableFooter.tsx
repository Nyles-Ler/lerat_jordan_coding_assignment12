import styled from "styled-components";
import { TableFooterProps } from "./TableFooter.types";

interface StyledTableFooterProps {
  $disabled?: boolean;
}

const StyledTableFooter = styled.tfoot<StyledTableFooterProps>`
  background-color: ${(props) =>
    props.$disabled ? "#1f2933" : "#050816"};

  color: ${(props) =>
    props.$disabled ? "#8a8f98" : "#00c2ff"};

  border-top: 1px solid
    ${(props) => (props.$disabled ? "#4b5563" : "#8a3ffc")};

  box-shadow: ${(props) =>
    props.$disabled ? "none" : "0 0 10px rgba(0, 194, 255, 0.4)"};

  opacity: ${(props) => (props.$disabled ? 0.7 : 1)};

  td {
    padding: 12px;
    text-align: center;
  }
`;

export const TableFooter = ({
  text = "Table Footer",
  disabled = false,
}: TableFooterProps) => {
  return (
    <StyledTableFooter $disabled={disabled}>
      <tr>
        <td>{text}</td>
      </tr>
    </StyledTableFooter>
  );
};