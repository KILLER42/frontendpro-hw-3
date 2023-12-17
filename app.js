// Запрашиваем у юзера два операнда
var operand1 = prompt("Введите первый операнд:");
var operand2 = prompt("Введите второй операнд:");

// Преобразуем введенные значения в числа
operand1 = parseFloat(operand1);
operand2 = parseFloat(operand2);

// Проверяем, что введенные значения являются числами
if (isNaN(operand1) || isNaN(operand2)) {
  console.log("Ошибка: Введите корректные числовые значения.");
} else {
  // Выполняем операции и выводим результат в консоль
  console.log("Результат: " + operand1 + " + " + operand2 + " = " + (operand1 + operand2));
  console.log("Результат: " + operand1 + " - " + operand2 + " = " + (operand1 - operand2));
  console.log("Результат: " + operand1 + " * " + operand2 + " = " + (operand1 * operand2));

  // Проверяем деление на ноль
  if (operand2 !== 0) {
    console.log("Результат: " + operand1 + " / " + operand2 + " = " + (operand1 / operand2));
  } else {
    console.log("Ошибка: Делить на ноль НЕЛЬЗЯ.");
  }
}
