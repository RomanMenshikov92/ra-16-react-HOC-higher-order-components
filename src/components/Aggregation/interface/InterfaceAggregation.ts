export interface MonthItem {
  month: string;
  amount: number;
}

export interface YearItem {
  year: number;
  amount: number;
}

export interface SortItem {
  date: string;
  amount: number;
}

export type MonthProps = {
  list: MonthItem[];
};

export type YearProps = {
  list: YearItem[];
};

export type SortProps = {
  list: SortItem[];
};

export type GroupByOption = "year" | "month" | undefined;

export interface GroupedListItem {
  year: number;
  month: number;
  date: string;
  amount: number;
}
