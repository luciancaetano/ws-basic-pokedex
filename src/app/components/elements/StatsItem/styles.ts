import styled from 'styled-components';

export const StatsItemStyles = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 20px;
  width: 100%;

  .name {
    font-family: sans-serif;
    color: #17171B;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    width: 100px;
    font-weight: bold;
  }

  .stats-value {
    font-family: sans-serif;
    color: #17171B;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    width: 30px;
  }

  .progress {
    width: 100%;
    height: 5px;
    background-color: #f3f3f3;
    margin-top: 5px;
    border-radius: 2px;
    overflow: hidden;

    .gutter {
      background-color: #333;
      height: 5px;

      &.normal {
          background-color           : var(--pokemon-type-color-normal);
      }

      &.fighting {
          background-color           : var(--pokemon-type-color-fighting);
      }

      &.flying {
          background-color           : var(--pokemon-type-color-flying);
      }

      &.poison {
          background-color           : var(--pokemon-type-color-poison);
      }

      &.ground {
          background-color           : var(--pokemon-type-color-ground);
      }

      &.rock {
          background-color           : var(--pokemon-type-color-rock);
      }

      &.bug {
          background-color           : var(--pokemon-type-color-bug);
      }

      &.ghost {
          background-color           : var(--pokemon-type-color-ghost);
      }

      &.steel {
          background-color           : var(--pokemon-type-color-steel);
      }

      &.fire {
          background-color           : var(--pokemon-type-color-fire);
      }

      &.water {
          background-color           : var(--pokemon-type-color-water);
      }

      &.grass {
          background-color           : var(--pokemon-type-color-grass);
      }

      &.electric {
          background-color           : var(--pokemon-type-color-electric);
      }

      &.psychic {
          background-color           : var(--pokemon-type-color-psychic);
      }

      &.ice {
          background-color           : var(--pokemon-type-color-ice);
      }

      &.dragon {
          background-color           : var(--pokemon-type-color-dragon);
      }

      &.dark {
          background-color           : var(--pokemon-type-color-dark);
      }

      &.fairy {
          background-color           : var(--pokemon-type-color-fairy);
      }

      &.unknown {
          background-color           : var(--pokemon-type-color-unknown);
      }

      &.shadow {
          background-color           : var(--pokemon-type-color-shadow);
      }
    }
  }
`;
