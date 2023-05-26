import { CATEGORIA } from "../utils/enums";
import { LIVRO, AUTOR } from "../utils/types";

const autor1: AUTOR = {
  nome: "Autor 1",
  idade: 56,
  livro_escrito: {
    nome: "Livro 1",
    valor: 10,
    categoria: CATEGORIA.familia,
  },
};

const autor2: AUTOR = {
  nome: "Autor 2",
  idade: 48,
  livro_escrito: {
    nome: "Livro 2",
    valor: 15,
    categoria: CATEGORIA.familia,
  },
};

const autor3: AUTOR = {
  nome: "Autor 3",
  idade: 29,
  livro_escrito: {
    nome: "Livro 3",
    valor: 20,
    categoria: CATEGORIA.escatalogia,
  },
};

console.log("Autor 1", autor1);
console.log("Autor 2", autor2);
console.log("Autor 3", autor3);
