export type Book = {
  id: number;
  title: string;
  author: string;
  publisher: string;
  year: number;
  pages: number;
  plot: string;
  audience: number;
  color: string;
};

export type ApiStatus = "idle" | "pending" | "error" | "success";
