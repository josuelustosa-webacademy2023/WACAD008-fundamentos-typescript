/*
function cadastrarUsuario(nome: any): void {
    console.log(`Usuário ${
        nome.toUpperCase()
    } cadastrado!`);
} cadastrarUsuario("Josué Lustosa");
*/

function cadastrarUsuario(nome: unknown): void {
    if (typeof nome === 'string') {
        console.log(`Usuário ${
            nome.toUpperCase()
        } cadastrado!`);
    } else {
        console.log(`Não cadastrado!`);
    }

} cadastrarUsuario("Josué Lustosa");
cadastrarUsuario({});
