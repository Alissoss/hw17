/*debounce. Створіть функцію debounce, яка приймає функцію зворотного виклику і затримку (в мілісекундах)
 як аргументи. Функція debounce повинна повертати нову функцію, яка викликає вихідну функцію тільки після того,
  як минула вказана кількість часу без викликів.
 Це дасть змогу ігнорувати часті виклики функції та виконувати її лише один раз через зазначену затримку після останнього виклику.
*/
function debounce(callback, delay) {
    let timeoutId;

    return function(...args) {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            callback.apply(this, args);
        }, delay);
    };
}

const handleInput = debounce((event) => {
    console.log(`Input value: ${event.target.value}`);
}, 500);

const inputField = document.querySelector('input');
inputField.addEventListener('input', handleInput);
