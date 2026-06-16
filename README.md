(RU/ENG) ENG: # ⏰ Always-On Clock

> *Minimalist transparent clock always in sight.*  
> *Simple, elegant, unobtrusive.*

═══════════════════════════════════════

## 🚀 Features

- 🕐 **Always visible** — clock fixed in the top-left corner on all websites  
- 👻 **Transparent background** — doesn't block page content  
- ⌨️ **Hotkey** — toggle on/off by pressing the `C` key  
- 📝 **Smart key** — doesn't trigger in text input fields  
- 🔒 **Privacy** — no data collection, works completely locally  
- 🌐 **All websites** — works on any HTTP/HTTPS pages  

═══════════════════════════════════════

## 🎮 How to Use

| Action | Key |
|--------|-----|
| Hide clock | Press `C` |
| Show clock | Press `C` again |

> ⚠️ The `C` key **does not work** when the cursor is in a text input field (`input`, `textarea`, `contentEditable`).  
> This is intentional to avoid interrupting your typing.

═══════════════════════════════════════

## 🎨 Customization

Want to change the appearance? Open `content.js` and adjust:

| Setting | Code |
|---------|------|
| Text color | `clock.style.color = 'black';` |
| Font size | `clock.style.fontSize = '30px';` |
| Background (none = transparent) | `clock.style.background = 'none';` |
| Top offset | `clock.style.top = '10px';` |
| Left offset | `clock.style.left = '10px';` |
| Hotkey (replace `C`) | `if (e.key === 'c' \|\| e.key === 'C')` |

═══════════════════════════════════════

## ❓ FAQ

**Q:** Clock doesn't appear. What should I do?  
**A:** Check that the extension is enabled in `chrome://extensions`. Open a regular website (HTTP/HTTPS), not a system page. Press `C` — the clock may have been hidden. Check the console (`F12 → Console`) for errors.

**Q:** The `C` key doesn't work.  
**A:** Make sure the cursor isn't in a text input field.

**Q:** Can I change the hotkey?  
**A:** Yes, in `content.js` find the line with `'c'` and replace it with your preferred key.

═══════════════════════════════════════

## 📄 License

**MIT License** — free to use, modify, and distribute.

═══════════════════════════════════════

## ⭐ Support the Project

If this extension was useful, give it a star on GitHub!  
Made with ❤️ for convenience and minimalism.



RU: # ⏰ Always-On Clock

> *Минималистичные прозрачные часы, которые всегда перед глазами.*  
> *Просто, элегантно, ненавязчиво.*

═══════════════════════════════════════

## 🚀 Возможности

- 🕐 **Всегда на виду** — часы в левом верхнем углу на всех сайтах  
- 👻 **Прозрачный фон** — не перекрывает контент страницы  
- ⌨️ **Горячая клавиша** — вкл/выкл по нажатию клавиши `C`  
- 📝 **Умная клавиша** — не срабатывает в полях ввода текста  
- 🔒 **Приватность** — не собирает данные, работает локально  
- 🪶 **Лёгкость** — меньше 2 КБ, не нагружает браузер  
- 🌐 **Все сайты** — работает на любых HTTP/HTTPS страницах  

═══════════════════════════════════════

## 🎮 Как пользоваться

| Действие | Клавиша |
|----------|---------|
| Скрыть часы | Нажмите `C` |
| Показать часы | Нажмите `C` ещё раз |

> ⚠️ Клавиша `C` **не работает**, когда курсор находится в поле ввода текста (`input`, `textarea`, `contentEditable`).  
> Это сделано специально, чтобы не мешать печати.

═══════════════════════════════════════

## 🎨 Кастомизация

Хотите изменить внешний вид? Откройте `content.js` и настройте:

| Параметр | Код |
|----------|-----|
| Цвет текста | `clock.style.color = 'black';` |
| Размер шрифта | `clock.style.fontSize = '30px';` |
| Фон (none = прозрачный) | `clock.style.background = 'none';` |
| Отступ сверху | `clock.style.top = '10px';` |
| Отступ слева | `clock.style.left = '10px';` |
| Горячая клавиша (замените `C`) | `if (e.key === 'c' \|\| e.key === 'C')` |

═══════════════════════════════════════

## ❓ FAQ

**В:** Часы не появляются. Что делать?  
**О:** Проверьте, что расширение включено в `chrome://extensions`. Откройте обычный сайт (HTTP/HTTPS), не системную страницу. Нажмите `C` — возможно, часы были скрыты. Проверьте консоль (`F12 → Console`) на ошибки.

**В:** Клавиша `C` не работает.  
**О:** Убедитесь, что курсор не в поле ввода текста.

**В:** Можно ли изменить горячую клавишу?  
**О:** Да, в файле `content.js` найдите строку с `'c'` и замените на нужную.

═══════════════════════════════════════

## 📄 Лицензия

**MIT License** — свободное использование, модификация и распространение.

═══════════════════════════════════════

## ⭐ Поддержите проект

Если расширение оказалось полезным, поставьте звёздочку на GitHub!  
Сделано с ❤️ для удобства и минимализма.
