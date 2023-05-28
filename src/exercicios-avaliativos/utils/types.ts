import { CATEGORIA } from "./enums";

type LIVRO = {
  nome: string;
  valor: number;
  categoria?: CATEGORIA;
};

type AUTOR = {
  nome_autor: string;
  idade?: number;
  // livro_escrito: LIVRO;
};

export type { LIVRO, AUTOR };
