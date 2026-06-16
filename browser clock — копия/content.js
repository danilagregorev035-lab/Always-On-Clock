console.log('Clock script injected');

const clock = document.createElement('div');
clock.id = 'ext-alwayson-clock';
clock.textContent = new Date().toLocaleTimeString('ru-RU', {
  hour: '2-digit', minute: '2-digit', second: '2-digit'
});
clock.style.position = 'fixed';
clock.style.top = '10px';
clock.style.left = '10px';
clock.style.zIndex = '2147483647';
clock.style.color = 'black';                 // чёрный текст
clock.style.fontSize = '30px';
clock.style.fontWeight = 'bold';
clock.style.background = 'rgba(255,255,255,0.8)'; // белый полупрозрачный для читаемости
clock.style.padding = '10px';
clock.style.borderRadius = '8px';

// Обновление времени каждую секунду
setInterval(() => {
  clock.textContent = new Date().toLocaleTimeString('ru-RU', {
    hour: '2-digit', minute: '2-digit', second: '2-digit'
  });
}, 1000);

// Вставка в DOM
if (document.body) {
  document.body.appendChild(clock);
} else {
  document.addEventListener('DOMContentLoaded', () => {
    document.body.appendChild(clock);
  });
}