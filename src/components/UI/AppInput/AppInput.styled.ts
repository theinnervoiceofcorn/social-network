import styled from "styled-components";

export const SCInput = styled.div`
  input {
    display: block;
    width: 100%;
    margin-bottom: 20px;
    border: 2px solid ${(props) => props.theme.colors.disabledBgc};
    background-color: transparent;
  }

  input:last-child {
    margin-bottom: 40px;
  }

  input:is(:hover, :focus) {
    border-color: ${(props) => props.theme.colors.primeColor};
  }
`;
