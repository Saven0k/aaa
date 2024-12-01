import data from '../dataDb/data.json'

export const readJSON = () => {
    try {
        console.log("Чтение прошло успешно")
        return data;
    } catch (error) {
        console.error(`Ошибка при чтении файла ${'../dataDb/data.json'}: ${error.message}`);
        return null;
    }
};