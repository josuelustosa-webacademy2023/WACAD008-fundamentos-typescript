type Info = {
    id: number;
    nome: string;
    descricao?: string;
}

type Categoria = {
    slug: string;
    quatidadeProduto: number;
}


type ProdutoInfo = Info & Categoria;

const novoProduto: ProdutoInfo = {
    id: 5231,
    nome: 'Teclado RGB',
    slug: 'teclado-mecanico',
    quatidadeProduto: 10
};

console.log(novoProduto);
