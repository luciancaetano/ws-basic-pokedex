import { pokeDexActions } from '@redux/actions/pokedex.actions';
import { IAppState } from '@types';
import {
  capitalize, first, get, map,
} from 'lodash';
import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useDidMount } from '@components/hooks';
import { PokemonViewLayout } from '@components/partials';
import { StatsItem } from '@components/elements';
import {
  PageContentContainer, Section, Title, PokemonAbility,
} from './styles';

const PokemonInfo = () => {
  const { id } = useParams<any>();
  const dispatch = useDispatch();

  const isLoading = useSelector((state: IAppState) => get(state, ['pokeList', 'loadingItems', id]));
  const pokemonInfo = useSelector((state: IAppState) => get(state, ['pokeList', 'items', id], null));

  useDidMount(() => {
    dispatch(pokeDexActions.getPokemonsFullInfo(id));
  });

  const pokemonAbilities = useMemo(() => map(pokemonInfo?.abilities, (item) => (
    <PokemonAbility>
      <div className="name">{capitalize(item.name)}</div>
      <div className="description">{item.description}</div>
    </PokemonAbility>
  )), [pokemonInfo?.abilities]);

  const baseType = useMemo(() => first(pokemonInfo?.types) || 'unknown', [pokemonInfo?.types]);

  return (
    <>
      <PokemonViewLayout
        name={pokemonInfo?.name}
        id={pokemonInfo?.id}
        image={pokemonInfo?.image}
        types={pokemonInfo?.types}
        isLoading={isLoading || !pokemonInfo}
      >
        <PageContentContainer>
          <Section>
            <Title className={baseType}>Base Stats</Title>

            <StatsItem max={200} name="HP" value={pokemonInfo?.stats.hp || 0} pokemonType={baseType} />
            <StatsItem max={200} name="Attack" value={pokemonInfo?.stats.attack || 0} pokemonType={baseType} />
            <StatsItem max={200} name="Defense" value={pokemonInfo?.stats.defense || 0} pokemonType={baseType} />
            <StatsItem max={200} name="Sp. Atk" value={pokemonInfo?.stats.specialAttack || 0} pokemonType={baseType} />
            <StatsItem max={200} name="Sp. Def" value={pokemonInfo?.stats.specialDefense || 0} pokemonType={baseType} />
            <StatsItem max={200} name="Speed" value={pokemonInfo?.stats.speed || 0} pokemonType={baseType} />
          </Section>

          <Section>
            <Title className={baseType}>Abilities</Title>
            {pokemonAbilities}
          </Section>

        </PageContentContainer>
      </PokemonViewLayout>
    </>
  );
};

export default PokemonInfo;
