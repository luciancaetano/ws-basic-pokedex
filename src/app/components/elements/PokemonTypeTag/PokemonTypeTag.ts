import styled from 'styled-components';

const PokemonTypeTag = styled.div`
display      : flex;
box-sizing   : border-box;
padding      : 3px 4px;
margin-right : 5px;
border-radius: 3px;
font-size    : 12px;
text-transform: uppercase;

&.normal {
    background-color: var(--pokemon-type-color-normal-darken);
    color           : var(--pokemon-type-color-normal-text);
}

&.fighting {
    background-color: var(--pokemon-type-color-fighting-darken);
    color           : var(--pokemon-type-color-fighting-text);
}

&.flying {
    background-color: var(--pokemon-type-color-flying-darken);
    color           : var(--pokemon-type-color-flying-text);
}

&.poison {
    background-color: var(--pokemon-type-color-poison-darken);
    color           : var(--pokemon-type-color-poison-text);
}

&.ground {
    background-color: var(--pokemon-type-color-ground-darken);
    color           : var(--pokemon-type-color-ground-text);
}

&.rock {
    background-color: var(--pokemon-type-color-rock-darken);
    color           : var(--pokemon-type-color-rock-text);
}

&.bug {
    background-color: var(--pokemon-type-color-bug-darken);
    color           : var(--pokemon-type-color-bug-text);
}

&.ghost {
    background-color: var(--pokemon-type-color-ghost-darken);
    color           : var(--pokemon-type-color-ghost-text);
}

&.steel {
    background-color: var(--pokemon-type-color-steel-darken);
    color           : var(--pokemon-type-color-steel-text);
}

&.fire {
    background-color: var(--pokemon-type-color-fire-darken);
    color           : var(--pokemon-type-color-fire-text);
}

&.water {
    background-color: var(--pokemon-type-color-water-darken);
    color           : var(--pokemon-type-color-water-text);
}

&.grass {
    background-color: var(--pokemon-type-color-grass-darken);
    color           : var(--pokemon-type-color-grass-text);
}

&.electric {
    background-color: var(--pokemon-type-color-electric-darken);
    color           : var(--pokemon-type-color-electric-text);
}

&.psychic {
    background-color: var(--pokemon-type-color-psychic-darken);
    color           : var(--pokemon-type-color-psychic-text);
}

&.ice {
    background-color: var(--pokemon-type-color-ice-darken);
    color           : var(--pokemon-type-color-ice-text);
}

&.dragon {
    background-color: var(--pokemon-type-color-dragon-darken);
    color           : var(--pokemon-type-color-dragon-text);
}

&.dark {
    background-color: var(--pokemon-type-color-dark-darken);
    color           : var(--pokemon-type-color-dark-text);
}

&.fairy {
    background-color: var(--pokemon-type-color-fairy-darken);
    color           : var(--pokemon-type-color-fairy-text);
}

&.unknown {
    background-color: var(--pokemon-type-color-unknown-darken);
    color           : var(--pokemon-type-color-unknown-text);
}

&.shadow {
    background-color: var(--pokemon-type-color-shadow-darken);
    color           : var(--pokemon-type-color-shadow-text);
}
`;

export default PokemonTypeTag;
