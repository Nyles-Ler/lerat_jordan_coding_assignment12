import styled from "styled-components";
import { ButtonProps } from "./Button.types";

interface StyledButtonProps {
  $backgroundColor?: string;
  $disabled?: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${(props) =>
    props.$disabled ? "#1f2933" : props.$backgroundColor || "#050816"};

  color: ${(props) => (props.$disabled ? "#8a8f98" : "#f5f5f5")};

  border: 1px solid
    ${(props) => (props.$disabled ? "#4b5563" : "#8a3ffc")};

  box-shadow: ${(props) =>
    props.$disabled
      ? "none"
      : "0 0 12px rgba(138, 63, 252, 0.7)"};

  border-radius: 6px;
  padding: 12px 20px;
  font-weight: 600;
  letter-spacing: 1px;

  cursor: ${(props) =>
    props.$disabled ? "not-allowed" : "pointer"};

  opacity: ${(props) => (props.$disabled ? 0.7 : 1)};

  transition: all 0.3s ease;

  &:hover {
    box-shadow: ${(props) =>
      props.$disabled
        ? "none"
        : "0 0 20px rgba(138, 63, 252, 0.9)"};

    transform: ${(props) =>
      props.$disabled ? "none" : "translateY(-1px)"};
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Button = ({
  text = "Button",
  backgroundColor = "#050816",
  disabled = false,
}: ButtonProps) => {
  return (
    <StyledButton
      $backgroundColor={backgroundColor}
      $disabled={disabled}
      disabled={disabled}
    >
      {text}
    </StyledButton>
  );
};