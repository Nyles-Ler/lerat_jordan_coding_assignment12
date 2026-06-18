import styled from "styled-components";
import { ImgProps } from "./Img.types";

interface StyledImgProps {
  $disabled?: boolean;
}

const StyledImg = styled.img<StyledImgProps>`
  width: 300px;
  max-width: 100%;
  border-radius: 10px;

  background-color: ${(props) =>
    props.$disabled ? "#1f2933" : "#050816"};

  border: 1px solid
    ${(props) => (props.$disabled ? "#4b5563" : "#8a3ffc")};

  box-shadow: ${(props) =>
    props.$disabled
      ? "none"
      : "0 0 15px rgba(138, 63, 252, 0.6)"};

  opacity: ${(props) => (props.$disabled ? 0.5 : 1)};

  filter: ${(props) =>
    props.$disabled ? "grayscale(100%)" : "none"};

  transition: all 0.3s ease;

  &:hover {
    box-shadow: ${(props) =>
      props.$disabled
        ? "none"
        : "0 0 25px rgba(138, 63, 252, 0.8)"};

    transform: ${(props) =>
      props.$disabled ? "none" : "scale(1.02)"};
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Img = ({
  src = "https://via.placeholder.com/300x200/050816/8a3ffc?text=Image",
  alt = "Image",
  disabled = false,
}: ImgProps) => {
  return (
    <StyledImg
      src={src}
      alt={alt}
      $disabled={disabled}
    />
  );
};