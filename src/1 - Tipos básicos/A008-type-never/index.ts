// Não retorna nada
const createError = (): never => {
    throw new Error('Erro!');
};
createError();
