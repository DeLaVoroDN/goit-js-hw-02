'use strict'; // Строгий режим, который помогает выявить и предотвратить ошибки в коде

function formatMessage(message, maxLength) {
  // Функция для форматирования сообщения, чтобы оно не превышало указанную максимальную длину

  if (message.length <= maxLength) {
    // Проверка, если длина сообщения меньше или равна максимальной длине, то возвращаем сообщение без изменений
    return message;
  } else {
    // Если длина сообщения превышает максимальную длину, то обрезаем его и добавляем многоточие
    return `${message.slice(0, maxLength)}...`;
  }
}

// Вывод результатов вызова функции для шести различных наборов параметров
console.log(formatMessage('Curabitur ligula sapien', 16)); // Выведет отформатированное сообщение для первого набора параметров
console.log(formatMessage('Curabitur ligula sapien', 23)); // Выведет отформатированное сообщение для второго набора параметров
console.log(formatMessage('Vestibulum facilisis purus nec', 20)); // Выведет отформатированное сообщение для третьего набора параметров
console.log(formatMessage('Vestibulum facilisis purus nec', 30)); // Выведет отформатированное сообщение для четвертого набора параметров
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 15)); // Выведет отформатированное сообщение для пятого набора параметров
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 41)); // Выведет отформатированное сообщение для шестого набора параметров
