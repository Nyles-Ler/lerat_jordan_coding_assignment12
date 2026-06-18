import styled from "styled-components";
import { RadioButtonProps } from "./RadioButton.types";

interface StyledRadioWrapperProps {
  $disabled?: boolean;
}

const RadioWrapper = styled.label<StyledRadioWrapperProps>`
  display: inline-flex;
  align-items: center;
  gap: 8px;

  background-color: ${(props) =>
    props.$disabled ? "#1f2933" : "#050816"};

  color: ${(props) =>
    props.$disabled ? "#8a8f98" : "#f5f5f5"};

  border: 1px solid
    ${(props) => (props.$disabled ? "#4b5563" : "#8a3ffc")};

  box-shadow: ${(props) =>
    props.$disabled ? "none" : "0 0 10px rgba(138, 63, 252, 0.6)"};

  padding: 8px 14px;
  border-radius: 6px;
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.$disabled ? 0.7 : 1)};

  input {
    accent-color: #8a3ffc;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const RadioButton = ({
  label = "Radio Button",
  name = "radio-button",
  disabled = false,
}: RadioButtonProps) => {
  return (
    <RadioWrapper $disabled={disabled}>
      <input type="radio" name={name} disabled={disabled} />
      {label}
    </RadioWrapper>
  );
};