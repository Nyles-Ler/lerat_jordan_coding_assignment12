import styled from "styled-components";
import { HeroImageProps } from "./HeroImage.types";

interface StyledHeroImageProps {
  $disabled?: boolean;
}

const StyledHeroImage = styled.img<StyledHeroImageProps>`
  width: 100%;
  height: 400px;
  object-fit: cover;

  background-color: ${(props) =>
    props.$disabled ? "#1f2933" : "#050816"};

  border: 1px solid
    ${(props) => (props.$disabled ? "#4b5563" : "#8a3ffc")};

  box-shadow: ${(props) =>
    props.$disabled
      ? "none"
      : "0 0 18px rgba(138, 63, 252, 0.7)"};

  border-radius: 10px;
  opacity: ${(props) => (props.$disabled ? 0.5 : 1)};
  filter: ${(props) => (props.$disabled ? "grayscale(100%)" : "none")};
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "default")};

  @media (max-width: 768px) {
    height: 250px;
  }
`;

export const HeroImage = ({
  src = "https://via.placeholder.com/1200x400/050816/8a3ffc?text=Hero+Image",
  alt = "Hero Image",
  disabled = false,
}: HeroImageProps) => {
  return <StyledHeroImage src={src} alt={alt} $disabled={disabled} />;
};