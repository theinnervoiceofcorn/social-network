import styled from "styled-components";

export const SCAppNavbar = styled.nav`
  box-shadow: 0 0 10px var(--light-gray);
  border-radius: 20px;
  margin-bottom: 20px;
  padding: calc(1vw + 11px);
  background-color: var(--elems-bgc);
  color: var(--text-color);

  .navbar__list {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .navbar__item {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 20px;

    border-radius: 10px;
    padding: 10px 15px;
    list-style: none;
    transition: 200ms;

    .icon {
      flex: 0 1 25px;
      height: calc(1vw + 5px); //? 1440 - 20 | 1920 - 25
      object-fit: contain;
      fill: var(--prime-color);
    }

    .item__name {
      flex: 1 1 auto;
    }

    &:hover {
      background-color: var(--light-gray);
    }

    &:active {
      transition: 100ms;
      background-color: var(--prime-color);
      color: white;

      .icon {
        fill: white;
      }

      .Badge {
        background-color: white;
        color: var(--text-color);
      }
    }
  }

  @media (max-width: 1100px) {
    /* & {
      grid-template-columns: min-content auto;

      .LeftSide {
        .List {
          display: none;
        }
      }
    } */

    & {
      .navbar__item {
        display: inline-block;

        .icon {
          height: 25px;
        }

        .item__name {
          display: none;
        }

        .Badge {
          display: none;
        }
      }
    }
  }
`;
