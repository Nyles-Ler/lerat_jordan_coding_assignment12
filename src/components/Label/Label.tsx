import styled from "styled-components";
import { LabelProps } from "./Label.types";

interface StyledLabelProps {
  $backgroundColor?: string;
  $disabled?: boolean;
}

const StyledLabel = styled.label<StyledLabelProps>`
  display: inline-block;

  background-color: ${(props) =>
    props.$disabled ? "#1f2933" : props.$backgroundColor || "#050816"};

  color: ${(props) =>
    props.$disabled ? "#8a8f98" : "#f5f5f5"};

  border: 1px solid
    ${(props) =>
      props.$disabled ? "#4b5563" : "#8a3ffc"};

  box-shadow: ${(props) =>
    props.$disabled
      ? "none"
      : "0 0 10px rgba(138, 63, 252, 0.6)"};

  padding: 8px 14px;
  border-radius: 6px;
  font-weight: 600;
  letter-spacing: 0.5px;

  cursor: ${(props) =>
    props.$disabled ? "not-allowed" : "default"};

  opacity: ${(props) =>
    props.$disabled ? 0.7 : 1};

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Label = ({
  text = "Label",
  backgroundColor = "#050816",
  disabled = false,
}: LabelProps) => {
  return (
    <StyledLabel
      $backgroundColor={backgroundColor}
      $disabled={disabled}
    >
      {text}
    </StyledLabel>
  );
};