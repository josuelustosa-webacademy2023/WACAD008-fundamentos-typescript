import { CATEGORIA } from "./enums";

export type LIVRO = {
  nome: string;
  valor: number;
  categoria?: CATEGORIA;
};
