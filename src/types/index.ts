export interface HeroesProps {
  id: number;
  name: string;
  age: number;
  biography: string;
  image: string;
}
export interface PopUpProps {
  hero: HeroesProps;
  onClose: () => void;
}
export interface CardProps {
  hero: HeroesProps;
  onClick?: () => void;
}
export interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export interface FilterButtonProps {
  active: boolean;
  onClick: () => void;
}
