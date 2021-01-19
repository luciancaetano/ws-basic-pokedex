import { first, map } from 'lodash';
import React, { Children, PropsWithChildren, useCallback } from 'react';
import { PokemonTypeTag } from '@components/elements';
import classnames from 'classnames';
import { IoIosArrowBack } from 'react-icons/io';
import { useHistory } from 'react-router-dom';
import Loader from 'react-loading';
import { AboutPageContainerStyles } from './styles';

interface IProps {
  name?: string;
  image?: string;
  id?: number;
  types?: Array<string>;
  isLoading?: boolean;
}

const PokemonViewLayout = ({
  children, types, id, image, name, isLoading,
}: PropsWithChildren<IProps>) => {
  const history = useHistory();

  const handleBackClick = useCallback(() => {
    history.replace('/list');
  }, [history]);

  return (
    <AboutPageContainerStyles className={first(types)}>
      <div className="actions">
        <div className="action" onClick={handleBackClick}><IoIosArrowBack size={30} />

        </div>
      </div>
      <div className={classnames('heading-container', { loading: isLoading })}>
        <div className="pokemon-image" style={{ backgroundImage: `url('${image}')` }} />
        <div className="description">
          {!isLoading && (
            <div className="id">
              #{String(id).padStart(3, '0')}
            </div>
          )}
          {!isLoading && (
            <div className="pokemon-name">
              {name}
            </div>
          )}

          <div className={classnames('pokemon-name-bg', { loading: isLoading })}>
            {isLoading ? 'Loading...' : name}
          </div>
          {!isLoading && (
            <div className="types-container">
              {map(types, (type) => (<PokemonTypeTag className={type}>{type}</PokemonTypeTag>))}
            </div>
          )}
        </div>
      </div>

      <div className="content-body">
        {!isLoading && Children.map(children, (el) => el)}
        {isLoading && (
          <Loader type="bubbles" color={`var(--pokemon-type-color-${first(types)})`} />
        )}
      </div>
    </AboutPageContainerStyles>
  );
};

export default PokemonViewLayout;
