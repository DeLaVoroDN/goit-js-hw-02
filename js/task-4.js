'use strict'; // Строгий режим, который помогает выявить и предотвратить ошибки в коде

function getShippingCost(country) {
  // Функция для определения стоимости доставки в зависимости от страны

  let message; // Переменная для хранения сообщения о стоимости доставки

  switch (country.toLowerCase()) {
    // Используем оператор switch для сравнения страны (преобразованной в нижний регистр)
    case 'china':
      message = 'Shipping to China will cost 100 credits'; // Для Китая
      break;
    case 'chile':
      message = 'Shipping to Chile will cost 250 credits'; // Для Чили
      break;
    case 'australia':
      message = 'Shipping to Australia will cost 170 credits'; // Для Австралии
      break;
    case 'jamaica':
      message = 'Shipping to Jamaica will cost 120 credits'; // Для Ямайки
      break;
    default:
      message = 'Sorry, there is no delivery to your country'; // Если страна не совпадает с указанными в case
  }

  return message; // Возвращаем сообщение о стоимости доставки
}

// Вывод результатов вызова функции для нескольких различных стран
console.log(getShippingCost('Australia')); // Выведет сообщение о стоимости доставки в Австралию
console.log(getShippingCost('Germany')); // Выведет сообщение о том, что доставка в Германию недоступна
console.log(getShippingCost('China')); // Выведет сообщение о стоимости доставки в Китай
console.log(getShippingCost('Chile')); // Выведет сообщение о стоимости доставки в Чили
console.log(getShippingCost('Jamaica')); // Выведет сообщение о стоимости доставки на Ямайку
console.log(getShippingCost('Sweden')); // Выведет сообщение о том, что доставка в Швецию недоступна
