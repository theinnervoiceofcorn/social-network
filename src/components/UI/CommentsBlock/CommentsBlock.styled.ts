import styled from "styled-components";

export const SCCommentsBlock = styled.div`
  cursor: pointer;
  position: relative;
  list-style: none;

  display: flex;
  gap: 15px;

  margin-top: 20px;
  padding: 15px;
  border-radius: 15px;

  transition: 200ms;

  &:hover {
    background-color: var(--light-gray);
  }

  &::before {
    content: "";
    height: 1px;
    width: 100%;
    background-color: var(--light-gray);

    position: absolute;
    top: -8px;
    left: 50%;
    transform: translateX(-50%);
  }

  img {
    flex: 0 0 60px;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    object-fit: cover;
  }

  .comment__description {
    flex: 1 1 auto;

    .comment__owner {
      margin-bottom: 10px;
      display: inline-block;
    }

    .comment__text {
      font-size: calc(0.4vw + 8px); //? 14 - 1440 | 16 - 1920
      font-weight: 300;
      margin-bottom: 10px;
    }

    .reply {
      color: var(--prime-color);
      font-size: calc(0.4vw + 8px); //? 14 - 1440 | 16 - 1920
    }
  }

  .date {
    position: absolute;
    top: 15px;
    right: 15px;
    color: var(--gray);
    font-size: calc(0.4vw + 8px); //? 14 - 1440 | 16 - 1920
  }

  .icon-like {
    position: absolute;
    bottom: 15px;
    right: 15px;

    overflow: visible;
    width: 22px;

    fill: none;
    stroke: var(--dark-gray);
    stroke-width: 2px;

    transition: 200ms;

    &._active {
      fill: var(--prime-color);
      stroke: none;
    }

    &:hover {
      stroke: none;
      fill: var(--prime-color);
    }
  }
`;
