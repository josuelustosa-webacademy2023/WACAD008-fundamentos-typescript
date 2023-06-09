import { LIVRO } from "../utils/types";
import constantes from "../utils/variables";

const livrosExercicioIII: LIVRO[] = constantes.LIVROS;

function verificarPropriedades(arr: LIVRO[], propriedade: string): string[] {
  const propriedadeSemEspaco: string[] = arr.map((item) => {
    let nome: string;
    item[propriedade].indexOf(" ") === -1
      ? (nome = item[propriedade].toUpperCase())
      : (nome = item[propriedade].toLowerCase());

    return nome;
  });

  return propriedadeSemEspaco;
}

console.log(verificarPropriedades(livrosExercicioIII, "nome"));
