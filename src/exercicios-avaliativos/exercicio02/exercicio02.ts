import LIVROS from "../utils/variables";
import LIVRO from "../utils/types";

const livrosExercicioII: LIVRO[] = LIVROS.map((item, index) => {
  const indicesComCategoriaVazia = [2, 3, 9, 14];

  if (indicesComCategoriaVazia.includes(index))
    return {
      ...item,
      categoria: null,
    };
  else
    return {
      ...item,
    };
});

console.table(livrosExercicioII);
