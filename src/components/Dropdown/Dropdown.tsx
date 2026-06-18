import styled from "styled-components";
import { DropdownProps } from "./Dropdown.types";

interface StyledDropdownProps {
  $disabled?: boolean;
}

const StyledDropdown = styled.select<StyledDropdownProps>`
  background-color: ${(props) =>
    props.$disabled ? "#1f2933" : "#050816"};

  color: ${(props) =>
    props.$disabled ? "#8a8f98" : "#f5f5f5"};

  border: 1px solid
    ${(props) => (props.$disabled ? "#4b5563" : "#8a3ffc")};

  box-shadow: ${(props) =>
    props.$disabled
      ? "none"
      : "0 0 12px rgba(138, 63, 252, 0.6)"};

  border-radius: 6px;
  padding: 12px 20px;
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.$disabled ? 0.7 : 1)};

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Dropdown = ({
  options = ["Option 1", "Option 2", "Option 3"],
  disabled = false,
}: DropdownProps) => {
  return (
    <StyledDropdown $disabled={disabled} disabled={disabled}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </StyledDropdown>
  );
};