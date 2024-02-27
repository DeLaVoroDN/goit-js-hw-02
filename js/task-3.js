'use strict'; // Строгий режим, который помогает выявить и предотвратить ошибки в коде

function checkForSpam(message) {
  // Функция для проверки сообщения на наличие спама или рекламы

  const lowerCaseMessage = message.toLowerCase(); // Преобразование сообщения в нижний регистр для облегчения сравнения

  // Проверка, содержит ли сообщение слово "spam" или "sale" (реклама)
  return lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale');
}

// Вывод результатов вызова функции для семи различных сообщений
console.log(checkForSpam('Latest technology news')); // Выведет результат проверки для первого сообщения
console.log(checkForSpam('JavaScript weekly newsletter')); // Выведет результат проверки для второго сообщения
console.log(checkForSpam('Get best sale offers now!')); // Выведет результат проверки для третьего сообщения
console.log(checkForSpam('Amazing SalE, only tonight!')); // Выведет результат проверки для четвертого сообщения
console.log(checkForSpam('Trust me, this is not a spam message')); // Выведет результат проверки для пятого сообщения
console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!')); // Выведет результат проверки для шестого сообщения
console.log(checkForSpam('[SPAM] How to earn fast money?')); // Выведет результат проверки для седьмого сообщения
