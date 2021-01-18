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

export interface IProkeMonListItem {
  id: number;
  name: string;
  image: string;
  isFull: boolean;
  types: Array<TPokemonTypes>;
  weaknesses: Array<TPokemonTypes>;
  strongAgainst: Array<TPokemonTypes>;
  height: number; // 1...99...2000
  weight: number; // 1...4999...9999
  stats: IPokemonStats;
}

export interface IPokeDexState {
  loading: boolean;
  items: Record<number, IProkeMonListItem>;
  error: boolean;
  loadingItems: Record<number, boolean>;
  count: number;
  generationsSpecies: Record<number, Array<string>>;
  loadingGenerations: boolean;
}

export interface IAppState{
  pokeList: IPokeDexState;
}
