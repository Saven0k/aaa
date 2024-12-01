// const fs = require('fs');

export function writeJson(data) {
    const filePath = '../dataDb/data.json'
    // Преобразуем данные в строку формата JSON
    const jsonData = JSON.stringify(data, null, 2); // 'null' и '2' для форматирования

    // Записываем данные в файл
    fs.writeFile(filePath, jsonData, (err) => {
        if (err) {
            console.error('Ошибка при записи файла:', err);
        } else {
            console.log('Данные успешно записаны в файл:', filePath);
        }
    });
};

