import { CATEGORIA } from "../utils/enums";

const LIVROS = [
  {
    nome: "Resiliência – A trajetória de Dong Yu Lan",
    valor: 107.9,
    categoria: CATEGORIA.vida_crista,
  },
  {
    nome: "Fundamentos da fé cristã – volume 1",
    valor: 44.0,
    categoria: CATEGORIA.vida_crista,
  },
  {
    nome: "Fundamentos da fé cristã – volume 2",
    valor: 44.0,
    categoria: CATEGORIA.vida_crista,
  },
  {
    nome: "Fundamentos da fé cristã – volume 3",
    valor: 44.0,
    categoria: CATEGORIA.vida_crista,
  },
  {
    nome: "Fundamentos da fé cristã – volume 4",
    valor: 44.0,
    categoria: CATEGORIA.vida_crista,
  },
  {
    nome: "Filhos… Como conduzi-los a Deus",
    valor: 20.3,
    categoria: CATEGORIA.familia,
  },
  {
    nome: "Casamento: Um jardim de sonhos? ou um lugar sem cor?",
    valor: 48.2,
    categoria: CATEGORIA.familia,
  },
  {
    nome: "Mulheres da Bíblia: suas histórias e legados (Antigo Testamento)",
    valor: 30.0,
    categoria: CATEGORIA.mulher,
  },
  {
    nome: "Mulheres da Bíblia: suas histórias e legados (Novo Testamento)",
    valor: 39.9,
    categoria: CATEGORIA.mulher,
  },
  {
    nome: "Uma mulher virtuosa em construção",
    valor: 29.9,
    categoria: CATEGORIA.mulher,
  },
  {
    nome: "Uma mulher corajosa em construção",
    valor: 29.9,
    categoria: CATEGORIA.mulher,
  },
  {
    nome: "A nossa esperança não se limita a esta vida",
    valor: 31.1,
    categoria: CATEGORIA.jovens,
  },
  {
    nome: "Atitude: Um jovem vencedor!",
    valor: 20.3,
    categoria: CATEGORIA.jovens,
  },
  {
    nome: "O nome acima de todo nome",
    valor: 19.6,
    categoria: CATEGORIA.jovens,
  },
  { nome: "#partiu", valor: 13.6, categoria: CATEGORIA.jovens },
  {
    nome: "Amar a vinda do Senhor",
    valor: 25.0,
    categoria: CATEGORIA.escatalogia,
  },
];

const BIBLIOTECAS = [
  {
    nome_biblioteca: "Igreja em Manaus - Matriz",
    livros: [
      {
        nome: LIVROS[0].nome,
        valor: LIVROS[0].valor,
        categoria: CATEGORIA.vida_crista,
        nome_autor: "Dong Yu Lan",
        idade: null,
      },
      {
        nome: LIVROS[15].nome,
        valor: LIVROS[15].valor,
        categoria: CATEGORIA.escatalogia,
        nome_autor: "Miguel Ma",
        idade: 78,
      },
    ],
  },
  {
    nome_biblioteca: "Shopping Manauara",
    livros: [
      {
        nome: LIVROS[1].nome,
        valor: LIVROS[1].valor,
        categoria: CATEGORIA.familia,
        nome_autor: "Corpo redatorial (Editora Árvore da Vida)",
        idade: null,
      },
      {
        nome: LIVROS[2].nome,
        valor: LIVROS[2].valor,
        categoria: CATEGORIA.familia,
        nome_autor: "Corpo redatorial (Editora Árvore da Vida)",
        idade: null,
      },
      {
        nome: LIVROS[3].nome,
        valor: LIVROS[3].valor,
        categoria: CATEGORIA.familia,
        nome_autor: "Corpo redatorial (Editora Árvore da Vida)",
        idade: null,
      },
      {
        nome: LIVROS[4].nome,
        valor: LIVROS[4].valor,
        categoria: CATEGORIA.familia,
        nome_autor: "Corpo redatorial (Editora Árvore da Vida)",
        idade: null,
      },
    ],
  },
];

export default { LIVROS, BIBLIOTECAS };
