export function getRandomRedToGreenHex() {
    // Генерируем случайное число от 0 до 255 для компонента цвета
    const r = Math.floor(Math.random() * 255);
  
    // Преобразуем число в шестнадцатеричное значение
    const hexR = r.toString(16).padStart(2, "0");
  
    // Возвращаем шестнадцатеричный цвет в формате #RRGGBB
    return `#${hexR}0000`;
  }