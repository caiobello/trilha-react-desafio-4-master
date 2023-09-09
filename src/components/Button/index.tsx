// components/Button.tsx
import { ButtonContainer } from "./styles"; // Verifique se o caminho está correto

import React from "react";

interface IButtonProps {
  title: string;
  onClick?: () => void;
  disabled?: boolean; // Adicione a propriedade disabled
}

const Button: React.FC<IButtonProps> = ({ title, onClick, disabled }) => (
  <ButtonContainer onClick={onClick} disabled={disabled}>
    {title}
  </ButtonContainer>
);


export default Button;
