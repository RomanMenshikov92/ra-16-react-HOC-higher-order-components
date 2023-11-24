export interface ItemProps {
  type: string;
  url?: string;
  title?: string;
  views?: number;
}

export interface ListProps {
  list: ItemProps[];
}
