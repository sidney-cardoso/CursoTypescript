// Não retorna nada
export const createError = (): never => {
    throw new Error('Erro!');
};
createError();
