'use strict'; // Строгий режим, который помогает выявить и предотвратить ошибки в коде

function makeTransaction(quantity, pricePerDroid, customerCredits) {
  // Функция для создания транзакции на основе количества и цены за дроид, а также доступных средств клиента

  const totalPrice = quantity * pricePerDroid; // Вычисление общей стоимости путем умножения количества на цену за дроид

  // Проверка, достаточно ли средств у клиента для совершения покупки
  if (totalPrice > customerCredits) {
    return 'Insufficient funds!'; // Возврат сообщения об отсутствии достаточных средств
  } else {
    // Возврат сообщения о заказе, если средств достаточно
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
  }
}

// Вывод результатов вызова функции для пяти различных наборов параметров
console.log(makeTransaction(5, 3000, 23000)); // Выведет результат для первого набора параметров
console.log(makeTransaction(3, 1000, 15000)); // Выведет результат для второго набора параметров
console.log(makeTransaction(10, 5000, 8000)); // Выведет результат для третьего набора параметров
console.log(makeTransaction(8, 2000, 10000)); // Выведет результат для четвертого набора параметров
console.log(makeTransaction(10, 500, 5000)); // Выведет результат для пятого набора параметров
