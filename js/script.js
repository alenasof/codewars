
// Учитывая массив целых чисел, ваше решение должно найти наименьшее целое число.
class SmallestIntegerFinder {
    findSmallestInt(args) {
     return Math.min(...args);
    }
  }
  // Напишите вызываемую функцию, repeatStrкоторая повторяет заданную строку stringточное количество n раз.
  
  function repeatStr (n, s) {
    return n > 1 ? s + repeatStr(--n, s) : s;
    }