import styled from "styled-components";
import { CardProps } from "./Card.types";

interface StyledCardProps {
  $disabled?: boolean;
}

const StyledCard = styled.div<StyledCardProps>`
  background-color: ${(props) =>
    props.$disabled ? "#1f2933" : "#050816"};

  color: ${(props) =>
    props.$disabled ? "#8a8f98" : "#f5f5f5"};

  border: 1px solid
    ${(props) =>
      props.$disabled ? "#4b5563" : "#8a3ffc"};

  box-shadow: ${(props) =>
    props.$disabled
      ? "none"
      : "0 0 15px rgba(138, 63, 252, 0.6)"};

  border-radius: 10px;
  padding: 20px;

  transition: all 0.3s ease;

  &:hover {
    box-shadow: ${(props) =>
      props.$disabled
        ? "none"
        : "0 0 25px rgba(138, 63, 252, 0.8)"};

    transform: ${(props) =>
      props.$disabled ? "none" : "translateY(-2px)"};
  }

  h3 {
    color: #b84dff;
    margin-top: 0;
    margin-bottom: 12px;
    letter-spacing: 1px;
  }

  p {
    margin: 0;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Card = ({
  title = "Card Title",
  content = "Card Content",
  disabled = false,
}: CardProps) => {
  return (
    <StyledCard $disabled={disabled}>
      <h3>{title}</h3>
      <p>{content}</p>
    </StyledCard>
  );
};