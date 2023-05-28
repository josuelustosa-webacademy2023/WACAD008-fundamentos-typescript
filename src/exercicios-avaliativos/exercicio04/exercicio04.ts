import { LIVRO, AUTOR } from "../utils/types";
import constantes from "../utils/variables";

type AutorLivro = LIVRO | AUTOR;

console.table(constantes.BIBLIOTECAS[0].livros);
