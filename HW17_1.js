/*randomDelayPrint. Створіть функцію randomDelayPrint, яка прийматиме рядок message як аргумент і виводитиме
 кожну букву цього рядка з довільною затримкою від 0 до 1 секунди. Використовуйте setTimeout, 
 щоб додати випадкову затримку перед виведенням кожної літери.
*/
function randomDelayPrint(message) {
    for (let i = 0; i < message.length; i++) {
        const delay = Math.random() * 1000;
        setTimeout(() => {
            process.stdout.write(message[i]);
        }, delay * i); 
    }
}

randomDelayPrint("Hello, world!");
