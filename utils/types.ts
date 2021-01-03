export interface IPower {
  label: string;
  powerPercent: number | null;
}

export interface ICharacter {
  superName: string;
  name: string;
  occupation: string;
  groups: string;
  firstApp: string;
  birthPlace: string;
  powerStats: IPower[];
  alignment: 'bad' | 'good' | 'neutral';
  publisher: string;
  imgSrc: string;
  id: number;
}
