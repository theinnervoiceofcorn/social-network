import styled from "styled-components";

export const SCMusicBlock = styled.div`
  box-shadow: 0 0 10px var(--light-gray);
  background-color: var(--elems-bgc);
  padding: calc(1vw + 11px);
  border-radius: 20px;

  .MusicBlock__title {
    margin-bottom: 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      color: var(--prime-color);
      font-weight: 400;
    }
  }
`;
