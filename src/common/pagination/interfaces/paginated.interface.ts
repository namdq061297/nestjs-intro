export interface Paginated<T> {
  data: T[];
  meta: {
    perPage: number;
    total: number;
    current: number;
    totalPages: number;
  };
  links: {
    first: string;
    last: string;
    current: string;
    next: string;
    previous: string;
  };
}
