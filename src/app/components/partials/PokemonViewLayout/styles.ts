import styled from 'styled-components';

export const AboutPageContainerStyles = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  height: 100vh;
  background: #E5E5E5;
  box-sizing: border-box;
  background-position: top right;
  background-repeat: no-repeat;
  overflow-y: scroll;

  .actions {
    display: flex;
    height: 50px;
    padding: 5px;
    z-index: 9;
  }

  .heading-container{
    display: flex;
    padding: 40px;
    position: relative;
    background-image: url('/images/pokeball_full.png');
    background-position: bottom left;
    background-repeat: no-repeat;
    background-size: 100px;

    .pokemon-image{
      width: 130px;
      height: 130px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      z-index: 5;
    }

    .description{
      display: flex;
      flex-direction: column;
      padding-left: 25px;

      .id {
          color      : #17171B;
          font-family: sans-serif;
          font-style : normal;
          font-weight: bold;
          font-size  : 12px;
          line-height: 14px;
          z-index: 5;
      }

      .pokemon-name {
          font-family: sans-serif;
          font-style : normal;
          font-weight: bold;
          font-size  : 32px;
          line-height: 38px;
          z-index: 5;
      }

      .pokemon-name-bg {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        font-family: sans-serif;
        font-style : normal;
        font-weight: bold;
        font-size  : 97px;
        z-index: 1;
        line-height: 31px;
        padding-top: 30px;
        padding-left: 20px;
        opacity: 0.2;
        background-position: top right;
        background-repeat: no-repeat;

        &.loading {
          opacity: 0.5;
          color: #333;
        }
      }

      .types-container {
        display: flex;
        flex-direction: row;
        z-index: 5;
        padding-top: 10px;
      }
    }
  }

  .content-body {
    color: #747476;
    display: flex;
    flex-direction: column;
    flex: 1;
    display: flex;
    background-color: #fff;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    padding: 40px;
  }

  &.normal {
      background-color: var(--pokemon-type-color-normal);
      color           : var(--pokemon-type-color-normal-text);
  }

  &.fighting {
      background-color: var(--pokemon-type-color-fighting);
      color           : var(--pokemon-type-color-fighting-text);
  }

  &.flying {
      background-color: var(--pokemon-type-color-flying);
      color           : var(--pokemon-type-color-flying-text);
  }

  &.poison {
      background-color: var(--pokemon-type-color-poison);
      color           : var(--pokemon-type-color-poison-text);
  }

  &.ground {
      background-color: var(--pokemon-type-color-ground);
      color           : var(--pokemon-type-color-ground-text);
  }

  &.rock {
      background-color: var(--pokemon-type-color-rock);
      color           : var(--pokemon-type-color-rock-text);
  }

  &.bug {
      background-color: var(--pokemon-type-color-bug);
      color           : var(--pokemon-type-color-bug-text);
  }

  &.ghost {
      background-color: var(--pokemon-type-color-ghost);
      color           : var(--pokemon-type-color-ghost-text);
  }

  &.steel {
      background-color: var(--pokemon-type-color-steel);
      color           : var(--pokemon-type-color-steel-text);
  }

  &.fire {
      background-color: var(--pokemon-type-color-fire);
      color           : var(--pokemon-type-color-fire-text);
  }

  &.water {
      background-color: var(--pokemon-type-color-water);
      color           : var(--pokemon-type-color-water-text);
  }

  &.grass {
      background-color: var(--pokemon-type-color-grass);
      color           : var(--pokemon-type-color-grass-text);
  }

  &.electric {
      background-color: var(--pokemon-type-color-electric);
      color           : var(--pokemon-type-color-electric-text);
  }

  &.psychic {
      background-color: var(--pokemon-type-color-psychic);
      color           : var(--pokemon-type-color-psychic-text);
  }

  &.ice {
      background-color: var(--pokemon-type-color-ice);
      color           : var(--pokemon-type-color-ice-text);
  }

  &.dragon {
      background-color: var(--pokemon-type-color-dragon);
      color           : var(--pokemon-type-color-dragon-text);
  }

  &.dark {
      background-color: var(--pokemon-type-color-dark);
      color           : var(--pokemon-type-color-dark-text);
  }

  &.fairy {
      background-color: var(--pokemon-type-color-fairy);
      color           : var(--pokemon-type-color-fairy-text);
  }

  &.unknown {
      background-color: var(--pokemon-type-color-unknown);
      color           : var(--pokemon-type-color-unknown-text);
  }

  &.shadow {
      background-color: var(--pokemon-type-color-shadow);
      color           : var(--pokemon-type-color-shadow-text);
  }
`;
