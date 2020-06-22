// Главный файл в котором я буду вызывать необходимые функции и действия игры

// Запускаем функцию при загрузке страницы
function start() {
	// создаем стартовый блок
	madeStartBlock();
	// при клике на кнопку ""START WARS"" запускаем игру
	startKnopka.onclick = nachat;
	// при клике на кнопку карантин запускаем окно "Карантин"
	startKnopka2.onclick = ogidat;
	
}

// В стартовом окне при нажатии на кнопку ""START WARS"" выполняем эту ф-циию
function nachat() {
	// наш статус будет начать
	status = "nachat";

	quantityLifes = 3;

	timeGame = 180;

	pointsCurrent =  0;

	// удаляем стартовый блок
	removeStartBlock();
	// удаляем блок проигрыша
	removeOverBlock();
	// removeWonBlock();
	// создаем блок очков
	madePointsBlock();
	// создаем блок формулы
    madeFormulaBlock();
	// запускаем таймер блок
	madeTimerBlock();
	// создаем блок жизней
	madeLifesBlock();
	// создаем врага 1
	madeEnemy1();
	// запускаем блок таймера
    timerGame();
    // создаем космический корабль
    spaceHero();
    // создаем стрелялку космического корабля
    fireOurHero();
    // создаем перемещение космического корабля C
    moveHero();
    // запускаем звук
    new Audio("sounds/space.mp3").play();
}

// В стартовом окне при нажатии на кнопку ""Карантин"" выполняем эту ф-циию
function ogidat() {
	// наш статус будет ожидать
	status = "ogidat";
	// удаляем стартовый блок
	removeStartBlock();
	// удаляем блок проигрыша
	removeOverBlock();
	// открываем карантин
	madeQuarantineBlock();
	// запускаем таймер обратного отсчета
	timerQuarantineBlock();
}

// запускаем ф-цию старта
start();


// функция для обратного отсчета времени игры
function timerGame() {
    // переменная clock - в ней храним таймер, чтобы потом можно было его остановить
    var clock = setInterval(function(){
    // меняем текст в таймер блоке, уменьшая значения таймера на 1
    timeGame = timeGame - 1;
    if (timeGame < 180 & timeGame >= 120) {
        if ((timeGame-120) < 10) { timerBlock.innerText = "02:0" + (timeGame-120); }
        else { timerBlock.innerText = "02:" + (timeGame-120); }
    }
    else if (timeGame < 120 & timeGame >= 60) {
        if ((timeGame-60) < 10) { timerBlock.innerText = "01:0" + (timeGame-60); }
        else { timerBlock.innerText = "01:" + (timeGame-60); }
    }
    else if (timeGame < 60) {
        if (timeGame < 10) { timerBlock.innerText = "00:0" + timeGame; }        
        else { timerBlock.innerText = "00:" + timeGame; }
    }
        // если таймер дошел до нуля
        if(timeGame == 0 || quantityLifes == 0) {
	        // удаляем таймер
	        clearInterval(clock);
	        // завершаем игру
	        endGame();  
	        // запуск проигрыша
	        gameOver();  
	        // запускаем звук
	        new Audio("sounds/game-over.mp3").play();
        }
    }, 1000); //каждую секунду выполнять функцию    
}

// Ф-ция таймера обратного отсчета времени в карантине
function timerQuarantineBlock() {
	// ф-ция таймера
	var chasy = setInterval(function() {
	// уменьшаем отсчет времени
	timerKarantin.innerText = timerKarantin.innerText - 1;
	    // если таймер равен 0 то возвращаемся на начальный экран
		if(timerKarantin.innerText == 0) {
		    // обнуляем часы
			clearInterval(chasy);
			// запуск блока карантина
			removeQuarantineBlock();
			// создаем стартовый блок
			madeStartBlock();
			// при клике на кнопку ""START WARS"" запускаем игру
			startKnopka.onclick = nachat;
			// при клике на кнопку карантин запускаем окно "Карантин"
			startKnopka2.onclick = ogidat;
	    }
	}, 1400);
}
// запускаем ф-цию проигрыш
gameOver();



