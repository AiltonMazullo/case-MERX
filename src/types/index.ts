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
  order: "AZ" | "ZA";
  onClick: (order: "AZ" | "ZA") => void;
}
export interface Comic {
  id: number;
  title: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}
export interface Thumbnail {
  path: string;
  extension: string;
}
export interface Comics {
  available: number;
  collectionURI: string;
  items: Comic[];
  returned: number;
}
export interface HeroInfos {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  comics: {
    items: { resourceURI: string }[]; 
  };
}
