// Створити розмітку з формою, що містить список (select) з трьома варіантами вибору: "Кава", "Чай" та "Сік". При виборі кожного варіанту виводити відповідне повідомлення в блок на сторінці.

const selectDrink = prompt("Введіть напій (кава, чай, сік)").trim().toLowerCase();

switch (selectDrink) {
    case "кава":
        alert('Ви обрали каву');
        break;
    case "чай":
        alert('Ви обрали чай');
        break;
    case "сік":
        alert('Ви обрали сік');
        break;
}

//* Створити розмітку з полем введення, що приймає рядок та кнопкою. При натисканні на кнопку перевіряти, чи введений рядок є днем тижня (наприклад: "понеділок", "вівторок" і т.д.), виводити відповідне повідомлення про робочий день або вихідний.

const day = prompt("Введіть день тижня:").trim().toLowerCase();

let message;
switch (day) {
    case "понеділок":
    case "вівторок":
    case "середа":
    case "четвер":
    case "п’ятниця":
        message = "Це робочий день.";
        break;
    case "субота":
    case "неділя":
        message = "Це вихідний день.";
        break;
    default:
        message = "Ви ввели неправильний день.";
}

alert(message);

//* Створити розмітку з полем введення, що приймає номер місяця та кнопкою. При натисканні на кнопку виводити повідомлення про пору року, до якої належить цей місяць.

const month = Number(prompt("Введіть номер місяця").trim());

switch (month) {
    case 12:
    case 1:
    case 2:
        message = "Зима";
        break;
    case 3:
    case 4:
    case 5:
        message = "Весна";
        break;
    case 6:
    case 7:
    case 8:
        message = "Літо";
        break;
    case 9:
    case 10:
    case 11:
        message = "Осінь";
        break;
    default:
        message = "Ви ввели невірне число!";
        break;
}

alert(message);

//* Створити розмітку з полем введення, що приймає номер місяця та кнопкою. При натисканні на кнопку виводити кількість днів у цьому місяці.

const month2 = Number(prompt("Введіть номер місяця знов:)").trim());
switch (month2) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        message = "У цьому місяці 31 день!";
        break;
    case 2:
        message = "У цьому місяці 28 днів!";
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        message = "У цьому місяці 30 днів!";
        break;
    default:
        message = "Ви ввели невірне число!";
        break;
}

alert(message);

//* Створити розмітку з полем введення, що приймає назву кольору (наприклад, "червоний", "синій" і т.д.) та кнопкою. При натисканні на кнопку виводити відповідне повідомлення про дію: якщо це "червоний" — "стоп", якщо "зелений" — "йти", якщо "жовтий" — "чекати".

const color = prompt("Введіть день колір (наприклад, червоний, жовтий, зелений)").trim().toLowerCase();
switch (color) {
    case "червоний":
        message = "Стій!"
        break;
    case "жовтий":
        message = "Чекай!"
        break;
    case "зелений":
        message = "Йди!"
        break;

    default:
        message = "Такого кольору немає!"
        break;
}

alert(message);

//* Створити розмітку з двома полями введення, що приймають числа та список (select) з варіантами вибору операцій: "+", "-", "*", "/". При натисканні на кнопку виводити результат обраної операції над цими числами. Користувач повинен бути попереджений про можливість ділення на нуль.

const num1 = parseFloat(prompt("Введіть перше число:"));
const num2 = parseFloat(prompt("Введіть друге число:"));
const operation = prompt("Виберіть операцію: +, -, *, /");
let result;

switch (operation) {
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        if (num2 === 0) {
            result = "Помилка: ділення на нуль!";
        } else {
            result = num1 / num2;
        }
        break;
    default:
        result = "Невірна операція.";
}

alert(`Результат: ${result}`);
