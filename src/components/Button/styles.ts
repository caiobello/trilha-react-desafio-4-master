import styled from 'styled-components';

export const ButtonContainer = styled.button`
    width: 100%;
    height: 42px;
    background-color: #81259D;
    color: #FFF;

    border: 1px solid #81259D;
    border-radius: 21px;

    &:hover {
        opacity: 0.6;
        cursor: pointer;
    }

    /* Estilos para botão desabilitado */
    &:disabled {
        background-color: #ccc; /* Cor de fundo mais clara */
        border: 1px solid #ccc; /* Borda mais clara */
        color: #888; /* Cor de texto mais clara */
        cursor: not-allowed; /* Altera o cursor para indicar que está desabilitado */
    }
`
