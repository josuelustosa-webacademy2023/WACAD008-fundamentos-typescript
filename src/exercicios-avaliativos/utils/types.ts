import CATEGORIA from "./enums";

type LIVRO = {
  nome: string;
  valor: number;
  categoria?: CATEGORIA;
};

export default LIVRO;
