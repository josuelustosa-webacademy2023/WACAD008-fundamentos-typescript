/*
Crie um map de um tipo união entre os tipos autor e livro.
Acesse cada biblioteca e imprima os livros de cada uma
*/

import { LIVRO, AUTOR } from "../utils/types";
import constantes from "../utils/variables";

type AutorLivro = LIVRO | AUTOR;

console.table(constantes.BIBLIOTECAS[0].livros);
