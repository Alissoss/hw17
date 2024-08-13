/*intervalRac.Створіть функцію intervalRace, яка прийматиме масив функцій та інтервал часу t у мілісекундах.
 Функція intervalRace має викликати кожну функцію з масиву по черзі через заданий інтервал часу t.
 Коли всі функції виконано, intervalRace має повернути масив із результатами.
*/
function intervalRace(functions, t) {
    return new Promise((resolve) => {
        const results = [];
        let index = 0;

        const intervalId = setInterval(() => {
            const result = functions[index]();
            results.push(result);
            
            index++;

            if (index >= functions.length) {
                clearInterval(intervalId);
                resolve(results);
            }
        }, t);
    });
}

const functions = [
    () => 1,
    () => 2,
    () => 3
];

intervalRace(functions, 1000).then(results => {
    console.log(results); 
});

