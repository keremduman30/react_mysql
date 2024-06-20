export type Book = {
  id?: number;
  title: string;
  desc: string;
};
export type BookCardProp = {
  item: Book;
};

export type InitialStateType = {
  open: boolean;
  update: boolean;
  add: boolean;
  item: Book;
};
