export type TPokemonTypes = 'normal' | 'fighting' | 'flying' | 'poison' | 'ground' | 'rock' |
'bug' | 'ghost' | 'steel' | 'fire' | 'water' | 'grass' |
'electric' | 'psychic' | 'ice' | 'dragon' | 'dark' |
'fairy' | 'unknown' | 'shadow';

export interface IPokemonStats {
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
  accuracy: number;
  evasion: number;
}

export interface IPokemonAbility{
  name: string;
  description: string;
}
export interface IPokemonListItem {
  id: number;
  name: string;
  image: string;
  isFull: boolean;
  types: Array<TPokemonTypes>;
  height: number; // 1...99...2000
  weight: number; // 1...4999...9999
  stats: IPokemonStats;
  abilities?: Array<IPokemonAbility>;
  description?: string;
}
export interface IPokeDexState {
  loading: boolean;
  items: Record<number, IPokemonListItem>;
  error: boolean;
  loadingItems: Record<number, boolean>;
  count: number;
}

export interface IAppState{
  pokeList: IPokeDexState;
}
