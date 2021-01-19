import styled from 'styled-components';

export const PokemonAbility = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    padding-bottom: 10px;

    .name {
      display: flex;
      flex: 1;
      font-family: sans-serif;
      color: #17171B;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;
      font-weight: bold;
      padding-bottom: 5px;
    }

    .description{
      display: flex;
      flex: 1;
      font-family: sans-serif;
      color: #17171B;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;
      padding-left: 10px;
    }
`;

export const PageContentContainer = styled.div`
  display: flex;
  flex-direction: column;

`;

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    padding-bottom: 30px;
`;

export const Title = styled.h1`
  width: 100%;
  color: #62B957;
  font-family: sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;

  &.normal {
      color           : var(--pokemon-type-color-normal);
  }

  &.fighting {
      color           : var(--pokemon-type-color-fighting);
  }

  &.flying {
      color           : var(--pokemon-type-color-flying);
  }

  &.poison {
      color           : var(--pokemon-type-color-poison);
  }

  &.ground {
      color           : var(--pokemon-type-color-ground);
  }

  &.rock {
      color           : var(--pokemon-type-color-rock);
  }

  &.bug {
      color           : var(--pokemon-type-color-bug);
  }

  &.ghost {
      color           : var(--pokemon-type-color-ghost);
  }

  &.steel {
      color           : var(--pokemon-type-color-steel);
  }

  &.fire {
      color           : var(--pokemon-type-color-fire);
  }

  &.water {
      color           : var(--pokemon-type-color-water);
  }

  &.grass {
      color           : var(--pokemon-type-color-grass);
  }

  &.electric {
      color           : var(--pokemon-type-color-electric);
  }

  &.psychic {
      color           : var(--pokemon-type-color-psychic);
  }

  &.ice {
      color           : var(--pokemon-type-color-ice);
  }

  &.dragon {
      color           : var(--pokemon-type-color-dragon);
  }

  &.dark {
      color           : var(--pokemon-type-color-dark);
  }

  &.fairy {
      color           : var(--pokemon-type-color-fairy);
  }

  &.unknown {
      color           : var(--pokemon-type-color-unknown);
  }

  &.shadow {
      color           : var(--pokemon-type-color-shadow);
  }
`;
