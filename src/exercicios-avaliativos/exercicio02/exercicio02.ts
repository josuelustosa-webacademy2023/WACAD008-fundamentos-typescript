import { CATEGORIA } from "./../utils/enums";
import { LIVRO } from "./../utils/types";

console.table(CATEGORIA);

let livrosExercicioII: LIVRO[];

livrosExercicioII = [
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
    //categoria: CATEGORIA.mulher,
  },
  {
    nome: "Uma mulher virtuosa em construção",
    valor: 29.9,
    categoria: CATEGORIA.mulher,
  },
  {
    nome: "Uma mulher corajosa em construção",
    valor: 29.9,
    //categoria: CATEGORIA.mulher,
  },
  {
    nome: "A nossa esperança não se limita a esta vida",
    valor: 31.1,
    // categoria: CATEGORIA.jovens,
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

console.table(livrosExercicioII);
