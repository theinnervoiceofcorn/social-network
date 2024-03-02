import styled from "styled-components";

export const SCMediaContainer = styled.div `
    display: grid;
    gap: 5px;

    grid-template-columns: repeat(auto-fit, minmax(220px, auto));
    grid-template-rows: minmax(300px, 400px);
    grid-auto-rows: minmax(300px, 400px);

    border-radius: 20px;
    margin-bottom: 40px;
    overflow: hidden;

    .media__item {
      object-fit: cover;
      width: 100%;
      height: 100%;
      border-radius: 5px;
    }

  @media (max-width: 1480px) {
    & {
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      grid-template-rows: minmax(100px, 200px);
      grid-auto-rows: minmax(100px, 200px);
    }
  }
`