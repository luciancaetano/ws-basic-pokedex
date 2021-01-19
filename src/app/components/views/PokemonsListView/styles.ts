import styled from 'styled-components';

export const PokemonListViewContainer = styled.div`
  display       : flex;
  font-family   : 'Roboto';
  flex-direction: column;
  flex          : 1;

  padding-top: 60px;


  .heading-container {
      display       : flex;
      flex-direction: column;

      .title {
          h1 {
              font-family   : sans-serif;
              font-style    : normal;
              font-weight   : bold;
              font-size     : 32px;
              line-height   : 38px;
              color         : #17171B;
              padding-bottom: 10px;
          }

          h2 {
              font-family: sans-serif;
              font-style : normal;
              font-weight: normal;
              font-size  : 14px;
              line-height: 17px;
              color      : #747476;
          }
      }

      .search-container {
          display       : flex;
          padding-top   : 25px;
          padding-bottom: 15px;

          input {
              box-sizing      : border-box;
              height          : 60px;
              width           : 100%;
              font-family     : SF Pro Display;
              font-size       : 14px;
              line-height     : 19px;
              padding-left    : 40px;
              padding-right   : 10px;
              color           : #747476;
              border-radius   : 10px;
              border          : 0;
              background-color: #DCDCDC;
          }
      }
  }

  .list-container {
      display       : flex;
      flex-direction: column;
      flex          : 1;
  }
`;

export const PokedexItem = styled.div`
  margin-bottom      : 30px;
  height             : 115px;
  border-radius      : 5px;
  background-image   : url('/images/pokeball.png');
  background-repeat  : no-repeat;
  background-position: right;
  position           : relative;
  padding            : 20px;
  box-sizing         : border-box;
  cursor             : pointer;

  .id {
      color      : #36363a;
      font-family: sans-serif;
      font-style : normal;
      font-weight: bold;
      font-size  : 12px;
      line-height: 14px;
  }

  .pokemon-name {
      font-family: sans-serif;
      font-style : normal;
      font-weight: bold;
      font-size  : 26px;
      line-height: 31px;
  }

  .types-container {
    display: flex;
    flex-direction: row;
  }

  .pokemon-image{
    position: absolute;
    z-index: 9;
    right: 7px;
    top: -23px;
    width: 130px;
    height: 130px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  &.type-normal {
      background-color: var(--pokemon-type-color-normal);
      color           : var(--pokemon-type-color-normal-text);
  }

  &.type-fighting {
      background-color: var(--pokemon-type-color-fighting);
      color           : var(--pokemon-type-color-fighting-text);
  }

  &.type-flying {
      background-color: var(--pokemon-type-color-flying);
      color           : var(--pokemon-type-color-flying-text);
  }

  &.type-poison {
      background-color: var(--pokemon-type-color-poison);
      color           : var(--pokemon-type-color-poison-text);
  }

  &.type-ground {
      background-color: var(--pokemon-type-color-ground);
      color           : var(--pokemon-type-color-ground-text);
  }

  &.type-rock {
      background-color: var(--pokemon-type-color-rock);
      color           : var(--pokemon-type-color-rock-text);
  }

  &.type-bug {
      background-color: var(--pokemon-type-color-bug);
      color           : var(--pokemon-type-color-bug-text);
  }

  &.type-ghost {
      background-color: var(--pokemon-type-color-ghost);
      color           : var(--pokemon-type-color-ghost-text);
  }

  &.type-steel {
      background-color: var(--pokemon-type-color-steel);
      color           : var(--pokemon-type-color-steel-text);
  }

  &.type-fire {
      background-color: var(--pokemon-type-color-fire);
      color           : var(--pokemon-type-color-fire-text);
  }

  &.type-water {
      background-color: var(--pokemon-type-color-water);
      color           : var(--pokemon-type-color-water-text);
  }

  &.type-grass {
      background-color: var(--pokemon-type-color-grass);
      color           : var(--pokemon-type-color-grass-text);
  }

  &.type-electric {
      background-color: var(--pokemon-type-color-electric);
      color           : var(--pokemon-type-color-electric-text);
  }

  &.type-psychic {
      background-color: var(--pokemon-type-color-psychic);
      color           : var(--pokemon-type-color-psychic-text);
  }

  &.type-ice {
      background-color: var(--pokemon-type-color-ice);
      color           : var(--pokemon-type-color-ice-text);
  }

  &.type-dragon {
      background-color: var(--pokemon-type-color-dragon);
      color           : var(--pokemon-type-color-dragon-text);
  }

  &.type-dark {
      background-color: var(--pokemon-type-color-dark);
      color           : var(--pokemon-type-color-dark-text);
  }

  &.type-fairy {
      background-color: var(--pokemon-type-color-fairy);
      color           : var(--pokemon-type-color-fairy-text);
  }

  &.type-unknown {
      background-color: var(--pokemon-type-color-unknown);
      color           : var(--pokemon-type-color-unknown-text);
  }

  &.type-shadow {
      background-color: var(--pokemon-type-color-shadow);
      color           : var(--pokemon-type-color-shadow-text);
  }
`;
