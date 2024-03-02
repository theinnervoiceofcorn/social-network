import styled from "styled-components";

export const SCAppPost = styled.div.attrs((props) => ({
  className: props.className,
}))`
  box-shadow: 0 0 10px var(--light-gray);
  padding: calc(1vw + 11px);
  background-color: var(--elems-bgc);
  border-radius: 20px;
  margin-bottom: 20px;

  position: relative;

  &._liked {
    .icon-wrapper {
      .icon-like {
        fill: var(--red);
        stroke: 0;
        stroke-width: 0;
      }

      .likes-count {
        color: var(--red);
      }
    }
  }

  &._marked {
    .icon-wrapper {
      .icon-mark {
        fill: var(--prime-color);
        stroke: 0;
        stroke-width: 0;
      }
    }
  }

  .UserElem {
    cursor: default;
    padding: 0;
    margin-bottom: 30px;

    &:hover {
      background-color: initial;
      scale: 1;
    }

    &::after {
      display: none; //? нижняя полоса в списке
    }

    img {
      flex: 0 0 60px;
      height: 60px;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  &__text {
    margin-bottom: 20px;
  }

  .icon-more {
    cursor: pointer;
    position: absolute;
    top: calc(1vw + 11px);
    right: calc(1vw + 11px);
    width: 25px;
    padding: 15px;
    box-sizing: content-box;
    border-radius: 15px;

    fill: var(--dark-gray);
    transition: 200ms;

    &:hover {
      background-color: var(--light-gray);
    }

    &:active {
      transition: 100ms;
      background-color: var(--prime-color);
      fill: white;
    }
  }
`;
