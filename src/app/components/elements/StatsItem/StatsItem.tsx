import React, { useMemo } from 'react';
import classnames from 'classnames';
import { StatsItemStyles } from './styles';

interface IProps {
  name: string;
  value: number;
  max: number;
  pokemonType: string;
}

const StatsItem = ({
  max, value, name, pokemonType,
}: IProps) => {
  const percent = useMemo(() => (value / max) * 100, [value, max]);

  return (
    <StatsItemStyles>
      <div className="name">
        {name}
      </div>
      <div className="stats-value">
        {value}
      </div>
      <div className="progress">
        <div className={classnames('gutter', pokemonType)} style={{ width: `${percent}%` }} />
      </div>
    </StatsItemStyles>
  );
};

export default StatsItem;
