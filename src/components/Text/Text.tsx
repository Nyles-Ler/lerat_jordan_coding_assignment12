import styled from "styled-components";
import { TextProps } from "./Text.types";

interface StyledTextProps {
  $backgroundColor?: string;
  $disabled?: boolean;
}

const StyledText = styled.p<StyledTextProps>`
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

  padding: 10px 14px;
  border-radius: 6px;
  line-height: 1.5;
  letter-spacing: 0.5px;

  cursor: ${(props) =>
    props.$disabled ? "not-allowed" : "default"};

  opacity: ${(props) =>
    props.$disabled ? 0.7 : 1};

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Text = ({
  text = "Text Component",
  backgroundColor = "#050816",
  disabled = false,
}: TextProps) => {
  return (
    <StyledText
      $backgroundColor={backgroundColor}
      $disabled={disabled}
    >
      {text}
    </StyledText>
  );
};