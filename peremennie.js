// формула на игровом поле
var formula = document.querySelector("#formula");
// жизни на игровом поле
var lifes = document.querySelector("#lifes");
// очки в конце игры
var points2 = document.querySelector("#points2");
// колличество жизней
var quantityLifes = 3;
// таймер на поле карантин
var timerKarantin = document.querySelector("#timer-karantin");
// таймер на игровом поле С
var timerBlock = document.querySelector("#timer");
// Переменная максимального времени игры в секундах С
var timeGame = 180;
// очки - счет игры С
var pointsCurrent = 0;
// статус открыто
var status = "open";
// колличество символов формулы
var quantityformula = 11;
// стартовый блок
var startBlock = null;
// помещаем в переменную кнопку старта игры
var startKnopka = null;
// помещаем в переменную кнопку2 старт карантин
var startKnopka2 = null;
// главное игровое поле
var mainGame = document.querySelector("#mainGame");
// информационный блок
var infoBlock = document.querySelector("#info-block");
// проигрыш
var overBlock = null;
// блок карантин
var quarantineBlock = null;
// помещаем в переменную кнопку карантина
var overKnopka = null;
// помещаем в переменную кнопку2 старта
var overKnopka2 = null;
// блок победы
var wonBlock = null;
// heroOur - наш герой, космический корабль
var heroOur = null;
// fireHero - Стрелялка космического корабля 
var fireHero = null;