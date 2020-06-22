// получить случайное число
function random(max) {
	// случайное число от 1 до максимума
	var rand = 1 + Math.random() * (max + 1);
    // округляем до целого числа
	rand = Math.floor(rand);
    // return - вернуть результат
	return rand;
}
// Движение космического корабля
function moveHero() {
    // Управление кораблем с помощью клавиш влево вправо
    // По событию "движение мышки" определять координату курсора мыши event.clientX относительно левого верхнего угла окна браузера 
	document.addEventListener("mousemove", function(event) {
  		// Если координата курсора мыши меньше чем половина ширины окна браузера document.body.clientWidth / 2 то делаем условие
		if ( event.clientX <= document.body.clientWidth / 2 ) {
			// Смещаем корабль влево на 10 пикселей
			heroOur.style.left = heroOur.offsetLeft - 10 + "px";		  
			fireHero.style.left = fireHero.offsetLeft - 10 + "px";  		
		}
			// Иначе смещаем корабль вправо на 10 пикселей
			else { 
				heroOur.style.left = heroOur.offsetLeft + 10 + "px"; 		  
				fireHero.style.left = fireHero.offsetLeft + 10 + "px";	   
			}	
	});   
}
// Создаем ф-цию проигрыша Конец игры
function gameOver() {
	// запускаем блок проигрыш
	madeOverBlock();
	// при клике на кнопку ""QUARANTINE"" запускаем блок карантина
    overKnopka.onclick = ogidat;
    // при клике на кнопку ""COVID-19 WINS"" запускаем блок старта
    overKnopka2.onclick = function() {
        removeOverBlock();
        nachat();

    }
}
// Ф-ция окончания игры, отображаем окно выиграл или проиграл
function endGame() {
	// меняем статус на конец
	status = "koniec";
	// удаляем блок жизней
	removeLifesBlock();
	// удаляем стартовый блок
	removeStartBlock();
	// удаляем блок очков
	removePointsBlock();
	// удаляем блок формулы
	removeFormulaBlock();
	// удаляем таймер блок
	removeTimerBlock();
	// запускаем ф-цию проигрыша
    gameOver();
	// удаляем космический корабль
    removeSpaceHero();
    // удаляем стрелялку космического корабля
    removefireOurHero();
	// вызываем ф-цию очистки игрового поля
	ochistitMainGame();
}

/*==================================
Функции для создания элементов игры
====================================*/
/*
<div id="start-block">
<h1><b>COVID WARS</b></h1>
<button id="start-knopka">START WARS</button>
<h2><button id="start-knopka2">QUARANTINE</button></h2><h3>Правила игры</h3>
<h4>Управление мышкой влево, вправо. Кликом мышки стреляем. Дается 3 минуты и 5 жизней на уничтожение вируса. Необходимо уничтожать вирус, что бы создать формулу вакцины. Каждое попадание +1 очко. Каждое 19-е очко открывает 1 символ формулы. Полностью составив формулу вакцины против вируса - победа в “COVID WARS”!  
Если Вы пропускаете вирус, потеряв все жизни или не успеваете, создать формулу вакцины за отведенное время -  Game Over! 
После Game Over вы можете посетить “QUARANTINE” и снова начать “START WARS”.</h4>
</div>
*/
// Функция создания стартового блока <div id="start-block"></div>
function madeStartBlock() {
    // создаем блок <div id="start-block"></div>
    startBlock = document.createElement("div");
	startBlock.id = "start-block";
    // создаем блок <h1><b>COVID WARS</b></h1>
    h1 = document.createElement("h1");
    h1.innerText = "COVID WARS";	
    // создаем кнопку <button id="start-knopka">START WARS</button>
    startKnopka = document.createElement("button");
    startKnopka.id = "start-knopka";
    startKnopka.innerText = "START WARS";
    // создаем блок <h2><button id="start-knopka2">QUARANTINE</button></h2>
    h2 = document.createElement("h2");
    // создаем кнопку <button id="start-knopka2">QUARANTINE</button>
    startKnopka2 = document.createElement("button");
	startKnopka2.id = "start-knopka2";
	startKnopka2.innerText = "QUARANTINE";
	// создаем блок <h3>Правила игры</h3>
	h3 = document.createElement("h3");
	h3.innerText = "Правила игры";
	// создаем блок <h4></h4>
	h4 = document.createElement("h4");
	h4.innerText ="Управление мышкой влево, вправо. Кликом мышки стреляем.Дается 3 минуты и 5 жизней на уничтожение вируса. Необходимо уничтожать вирус, что бы создать формулу вакцины. Каждое попадание +1 очко. Каждое 19-е очко открывает 1 символ формулы. Полностью составив формулу вакцины против вируса - победа в “COVID WARS”!"
	"Если Вы пропускаете вирус, потеряв все жизни или не успеваете, создать формулу вакцины за отведенное время -  Game Over! После Game Over вы можете посетить “QUARANTINE” и снова начать “START WARS”.";   
    // добавляем заголовок h1
    startBlock.appendChild(h1);
    // добавляем кнопку Старт
    startBlock.appendChild(startKnopka);
    // добавляем заголовок h2
    startBlock.appendChild(h2);
    // в заголовок добавляем кнопку карантин
    h2.appendChild(startKnopka2);
    // добавляем заголовок h3
    startBlock.appendChild(h3);
    // добавляем заголовок h4
    startBlock.appendChild(h4);
    // добавляем стартовый блок на игровое поле
    mainGame.appendChild(startBlock);
    // устанавливаем звуковой стартовый фон 
    new Audio("sounds/main.mp3").play();
}

/*
<div id="quarantine-block"> 
<h1>TIMER: <span id="timerKarantin">14</span></h1>
<video src="images/Wash.mp4" width="200" height="190" controls="controls"></video>
<h3>Wash your hands</h3>   
</div> 
*/ 
// Функция создания блока Карантина <div id="quarantine-block"></div>
function madeQuarantineBlock() {
	// создаем блок карантина <div id="quarantine"> </div>
    quarantineBlock = document.createElement("div");
    quarantineBlock.id = "quarantine-block";
    // создаем <h1>TIMER: <span id="timer">14</span></h1>
    h1 = document.createElement("h1");
    h1.innerText = "TIMER: ";
    // создаем таймер <span id="timer">14</span></h1>
    timerKarantin = document.createElement("span");
	timerKarantin.id = "timer-karantin";
	timerKarantin.innerText = "14";
	//  создаем <video src="images/Wash.mp4" width="200" height="190" controls="controls"></video>
    var video = document.createElement("video");
        video.preload = "auto";
        video.src = "Wash.mp4";
        video.play();
    // создаем <h3>Wash your hands</h3>  
	h3 = document.createElement("h3");
	h3.innerText = "Wash your hand";
	// добавляем заголовок h1
    quarantineBlock.appendChild(h1);
    // в заголовок h2 добавляем таймер карантина
    h1.appendChild(timerKarantin);
    // добавляем видео
    quarantineBlock.appendChild(video);
    // добавляем заголовок h3
    quarantineBlock.appendChild(h3);
    // // добавляем блок Карантина на игровое поле
    mainGame.appendChild(quarantineBlock);
    // устанавливаем звуковой фон карантина
    new Audio("sounds/quarantine.mp3").play();
}

/*
<div id="over-block"> 
<h1><b>GAME OVER?</b></h1>
<h2><i>Вы заработали: <span id="timer">0 </span><p>рулонов туалетной бумаги</p></i></h2>
<button id="over-knopka">QUARANTINE</button>
<h3><button id="over-knopka2">COVID-19 WINS</button></h3>
</div>
*/
// Функция создания блока Проигрыша <div id="over-block"></div>
function madeOverBlock() {
    // создаем блок проигрыша <div id="over-block"></div>
    overBlock = document.createElement("div");
    overBlock.id = "over-block";
    // создаем <h1><b>GAME OVER?</b></h1> 
    h1 = document.createElement("h1");
    h1.innerText = "GAME OVER?";
    // создаем <h2><i>Вы заработали: <span id="points2">0 </span><p>рулонов туалетной бумаги</p></i></h2>
    h2 = document.createElement("h2");
	h2.innerText = "Вы заработали: ";
    // создаем <span id="points2">0 </span>
	points2 = document.createElement("span");
	points2.id = "points2";
	points2.innerText = (pointsCurrent);
    // создаем <p>рулонов туалетной бумаги</p>
	p = document.createElement("p");
	p.innerText = "рулонов туалетной бумаги";
    // создаем <button id="over-knopka">QUARANTINE</button>
    overKnopka = document.createElement("button");
    overKnopka.id = "over-knopka";
	overKnopka.innerText = "QUARANTINE";
    // создаем <h3><button id="over-knopka2">COVID-19 WINS</button></h3>
    h3 = document.createElement("h3");
    // создаем <button id="over-knopka2">COVID-19 WINS</button>
    overKnopka2 = document.createElement("button");
	overKnopka2.id = "over-knopka2";
	overKnopka2.innerText = "COVID-19 WINS";
    // добавляем заголовок h1
    overBlock.appendChild(h1);
    // добавляем заголовок h2
    overBlock.appendChild(h2);
    // в заголовок h2 добавляем очки
    h2.appendChild(points2);
    // в заголовок h2 добавляем p
    h2.appendChild(p);
    // добавляем кнопку карантин
    overBlock.appendChild(overKnopka);
    // добавляем заголовок h3
    overBlock.appendChild(h3);
    // в заголовок h3 добавляем кнопку covid
    h3.appendChild(overKnopka2)
    // добавляем блок Проигрыша на Игровое поле
    mainGame.appendChild(overBlock);
    // устанавливаем звуковой фон проигрыша
}

/*
<div id="won-block">
<h1><i>You</i></h1>
<h2><b>WON ! ! !</b></h2>
</div>
*/
// Функция создания блока Выигрыша <div id="won-block"></div>
function madeWonBlock() {
	// создаем блок выиграша <div id="won-block"></div>
    wonBlock = document.createElement("div");
    wonBlock.id = "won-block";
    // создаем <h1><i>You</i></h1>
    h1 = document.createElement("h1");
    h1.innerText = "You";
    // создаем <h2><b>WON ! ! !</b></h2>
    h2 = document.createElement("h2");
    h2.innerText = "WON ! ! !";
    // добавляем заголовок h1
    wonBlock.appendChild(h1);
    // добавляем заголовок h2
    wonBlock.appendChild(h2);
    // добавляем блок Выигрыша на Игровое поле
    mainGame.appendChild(wonBlock);
    // устанавливаем звуковой фон победы
    new Audio("sounds/win.mp3").play();
}

// функция создания блока 
function madePointsBlock() {
    // создаем блок <div id="points">0</div>
	points = document.createElement("div")
	points.id = "points";
	points.innerText = 0;
    // добавляем блок очков на игровое поле
	mainGame.appendChild(points);
}

/*
<div id="formula"><span></span><span></span><span></span><span></span><span></span></div>
*/
// Функция создания блока формулы
function madeFormulaBlock() {
    // создаем блок <div id="formula"></div>
    formula = document.createElement("div");
	formula.id = "formula";
	// переменная в которой храним текущее колличество отображенной формулы
    var currentFormula = 0;
    // переменная в которой храним колличество отображенной формулы
    var quantityFormula = 11;

    // пока текущее колличество формулы на игровом поле меньше чем мы хотим видеть
    while(currentFormula < quantityFormula) {
	    // создаем тег span
	    var span = document.createElement("span");
	    span.id = "span" + currentFormula;
	    // помещаем тег span в блок формулы
	    formula.appendChild(span);
	    // увеличиваем колличество текущей отображенной формулы на 1
	    currentFormula = currentFormula + 1;
	}
	// добавляем блок формулы на игровом поле
	mainGame.appendChild(formula);
}

// Функция проверки формулы
function proverkaFormula() {

    // для проявления формулы
    if(pointsCurrent == 7) {
    span0.innerText = "C";
    span0.style.background = "yellow";
    new Audio("sounds/formula.wav").play();
    }
    if(pointsCurrent == 14) {
    span1.innerText = "O";
    span1.style.background = "yellow";
    new Audio("sounds/formula.wav").play();
    }
    if(pointsCurrent == 21) {
    span2.innerText = "V";
    span2.style.background = "yellow";
    new Audio("sounds/formula.wav").play();
    }
    if(pointsCurrent == 28) {
    span3.innerText = "I";
    span3.style.background = "yellow";
    new Audio("sounds/formula.wav").play();
    }
    if(pointsCurrent == 35) {
    span4.innerText = "D";
    span4.style.background = "yellow";
    new Audio("sounds/formula.wav").play();
    }
    if(pointsCurrent == 42) {
     span5.innerText = "=";
     span5.style.background = "yellow";
    new Audio("sounds/formula.wav").play();
    }
    if(pointsCurrent == 49) {
    span6.innerText = "L";
    span6.style.background = "yellow";
    new Audio("sounds/formula.wav").play();
    }
    if(pointsCurrent == 56) {
    span7.innerText = "O";
    span7.style.background = "yellow";
    new Audio("sounds/formula.wav").play();
    }
    if(pointsCurrent == 63) {
    span8.innerText = "S";
    span8.style.background = "yellow";
    new Audio("sounds/formula.wav").play();
    }
    if(pointsCurrent == 70) {
    span9.innerText = "E";
    span9.style.background = "yellow";
    new Audio("sounds/formula.wav").play();
    }
    if(pointsCurrent == 77) {
    span10.innerText = "R";
    span10.style.background = "yellow";
    new Audio("sounds/formula.wav").play();
    }
}

/*<div id="lifes"><span></span><span></span><span></span><span></span><span></span></div>*/
// Функция создания блока жизней
function madeLifesBlock() {
    // создаем блок <div id="lifes"></div>
    lifes = document.createElement("div");
    lifes.id = "lifes";
    // переменная в которой храним текущее колличество отображенных жизней
    var currentLifes = 0;
    // пока текущее колличество жизней на игровом поле меньше чем мы хотим видеть
    while(currentLifes < quantityLifes) {
        // создаем тег span 
    	var span = document.createElement("span");
        // помещаем тег span в блок жизней
    	lifes.appendChild(span);
       	// считаем текущее количество жизней
    	currentLifes = currentLifes + 1;
        // добавляем блок жизней на игровом поле
        mainGame.appendChild(lifes);
    }
}

/*<div id="timer">03:00</div>*/
// Функция создания блока с таймером
function madeTimerBlock() {
    // создаем блок <div id="timer">03:00</div>
    timerBlock = document.createElement("div");
	timerBlock.id = "timer";
	timerBlock.innerText = "03:00";
    // добавляем блок таймера на игровое поле
    mainGame.appendChild(timerBlock);
}

/* ===============================================
Космический корабль и стрелялка
=========================================================*/

// Функция создания космического корабля
function spaceHero() {
	heroOur = document.createElement("div");
	heroOur.id = "heroOur";
	mainGame.appendChild(heroOur);
}
// Функция создания стрелялки корабля
function fireOurHero() {
	    fireHero = document.createElement("div");
    	fireHero.id = "fireHero";
    	fireHero.style.left = heroOur.style.left  + 309 + "px";
    	fireHero.style.opacity = 0;
	mainGame.appendChild(fireHero);	
}
/*======================================================
Создаем врагов
========================================================*/

// Функция создания врага 1 (красный или зеленый КОВИД)
function madeEnemy1() {
	// Создаем переменную enemy1 и создаем блок div для нее
    var enemy1 = document.createElement("div");
    // Устанавливаем id переменной enemy1    
    enemy1.id = "enemy1";
    // устанавливаем случайное значение координаты, куда будет перемещаться из начальной точки враг после создания
    setTimeout(function() {
    enemy1.style.top = random(350) + "px";
    enemy1.style.left = random(350) + "px";
    }, 200);
    // Случайно определяем направление, откуда вылетает враг: лево или право; внешний вид врага: зеленый или красный
    var napravlenie = random(2);
        // если направление = 1, то вылетает слева 
        if(napravlenie == 1) {
        enemy1.className = "enemy1 left";
        // меняем цвет
        enemy1.style.background = "url(images/enemy1.png)";
            // иначе вылетает справа 
        } else {
        // иначе вылетает слева 
        enemy1.className = "enemy1 right";
        // меняем цвет
        enemy1.style.background = "url(images/enemy2.png)";
    }   
        // Задаем движения врага вниз и что будет потом
        setTimeout(function() {
        // убираем свойство с задержкой изменения стилей
        enemy1.style.transition = "all 0s"; 
        // Запускаем мутацию вируса
        setTimeout(function() { 
            enemy1.style.transitionDelay = "0.0001s";
            if( enemy1.style.background == "url(\"images/enemy1.png\")" ) {
                enemy1.style.background = "url(\"images/enemy2.png\")";
        } else {
            enemy1.style.background = "url(\"images/enemy1.png\")";
        }
        }, 2000); 

        // создаем таймер, который каждые 50 милисекунд опускает врага ниже
        var timerenemy1 = setInterval(function() {
            // меняем позицию врага, опуская его на 1 пиксель вниз
            enemy1.style.top = enemy1.offsetTop + 1 + "px";
            // делаем проверку, если враг вышел за пределы поля
            if(enemy1.offsetTop > 400 || (enemy1.offsetTop > 350 && parseInt(enemy1.style.left) > parseInt(heroOur.style.left)  ) ) {
                // звуковое сопровождение
                new Audio("sounds/lost.mp3").play();
                // удаляем врага
                enemy1.remove();
                // создаем нового врага
                for(i = 0; i < random(5); i++)
                {
                madeEnemy1();
                }
                // уменьшаем к-во жизней на 1
                quantityLifes = quantityLifes - 1;
                // удаляем жизнь
                removeLifesBlock();
                // создаем блок с жизнями
                madeLifesBlock();
                // условие проверки кол-ва жизней, если жизней не осталось
                if(quantityLifes == 0) {
                	// завершить игру
                    endGame();
                    // запускаем блок проигрыша
                    gameOver();
                    // запускаем звук
                    new Audio("sounds/game-over.mp3").play();
                }
                // очищаем таймер жизни врага 1
                clearInterval(timerenemy1);
            }
        }, 50) // постепенное падение вниз
    }, 1000); // интервал падения врага 1 секунда
	// уловие проверки статуса врага
	if(status != "koniec") {
		// добавляем врага в игровое поле <div id="igra"></div>
	    mainGame.appendChild(enemy1);
	}

    // Создаем переменную k, в которую заносим номер id врага
    var k;
    // Функция по клику убиваем или не убиваем врага
    onclick = function() { 
        // звук лазера
        new Audio("sounds/Lazer.mp3").play();  
        k = 1;
        // Стрелялка непрозрачная                                         
        fireHero.style.opacity = 1;  
        // Устанавливаем случайно длину лазерного луча          
        fireHero.style.height = 200 + random(300) + "px";
        // Создаем переменную, в которую заносим врага с классом enemy1
        var sushestvuyetenemy1 = document.querySelector(".enemy" + k);
        // создаем проверку: если враги с классом enemy1 еще существуют, то делаем
        if (sushestvuyetenemy1 != null) {
            // Создаем переменную enemyCurrent и заносим туда всех врагов с id enemy1
            var enemyCurrent = document.querySelectorAll("#enemy1");  
            // Перебираем циклом всех врагов с id enemy1
            for ( i=0; i < enemyCurrent.length; i++ ) {
                // Создаем переменную enemyLeftNumber куда заносим число: левая координата элемента enemyCurrent[i] 
                var enemyLeftNumber = parseInt(enemyCurrent[i].style.left);
                // Создаем переменную fireHeroLeftNumber куда заносим число: левая координата элемента fireHero 
                var fireHeroLeftNumber = parseInt(fireHero.style.left); 
                // Создаем проверку: если луч лазера попадает по врагу, то убиваем его и т.д.
                if ( (fireHeroLeftNumber >= enemyLeftNumber) && (fireHeroLeftNumber <= (enemyLeftNumber + 50)) ) {           
                // звук взрыва врага
                new Audio("sounds/boom.mp3").play();
                enemyCurrent[i].remove();
                    // Добавляем очки за уничтожение врага
                    pointsCurrent =  pointsCurrent + 1;
                    // меняем текст счета игры, текст будет из переменной pointsCurrent
                    points.innerText = pointsCurrent;
                    // проверяем, нужно ли открывать формулу
                    proverkaFormula();                        
                    // присваиваем переменной sushestvuyetenemy1 в качестве содержания нового врага с классом enemy1
                    sushestvuyetenemy1 = document.querySelector(".enemy1");
                }
            }           
        }    
            // Функция задержки для стрелялки по клику
            setTimeout(function() { 
                // Стрелялка пропадает после задержки     
                fireHero.style.opacity = 0;
                // вводим в игру мега врага если очки равны
                if (pointsCurrent == 77) {
                    for(i=0; i < enemyCurrent.length; i++) {
                        enemyCurrent[i].remove();
                    }
                    madeMegaEnemy();
                }   else {
                        // Если все еще есть враги с классом enemy1 то выполняем
                        if (sushestvuyetenemy1 == null) {  
                            var chisloVragov = random(5);
                            // В цикле от 0 до случайного числа до chisloVragov с шагом 1 выполняем
                            for(i = 0; i < chisloVragov; i++)
                                {                      
                                    madeEnemy1();                     
                                }
                        }
                    }
            }, 70); // Конец блока задержки
    } // Конец функции onclick      
}// Заканчиваем создавать врага

// Функция создания мега врага (источник КОВИД)
function madeMegaEnemy() {
    // Создаем переменную enemy1 и создаем блок div для нее
    var enemyMega = document.createElement("div");
    // Устанавливаем id переменной enemy1    
    enemyMega.id = "enemyMega";       
    // устанавливаем случайное значение координаты, куда будет перемещаться из начальной точки враг после создания
    setTimeout(function() {
        enemyMega.style.top = 0 + "px";
        enemyMega.style.left = 225 + "px";
    }, 200);
    // Добавляем врага на игровое поле
    mainGame.appendChild(enemyMega);  
    // запускаем звук
    new Audio("sounds/boss.mp3").play();
    // создаем таймер, который каждые 5 секунд изменяет положение мега врага
    var timerEnemyMega = setInterval(function() {
        setTimeout(function() {
            enemyMega.style.left = enemyMega.offsetLeft - 70 + "px";
        }, 1000);
        setTimeout(function() {
            enemyMega.style.top = enemyMega.offsetTop + 70 + "px";
        }, 2000);
        setTimeout(function() {
            enemyMega.style.left = enemyMega.offsetLeft + 70 + "px";
        }, 3000);
        setTimeout(function() {
            enemyMega.style.top = enemyMega.offsetTop - 70 + "px";
        }, 4000);
           
        enemyMega.style.top = random(200) + "px";
        enemyMega.style.left = random(450) + "px";
            // условие проверки кол-ва жизней мега врага, если жизней не осталось
            if (enemyMega == null ) {                     
                // очищаем таймер жизни мега врага
                clearInterval(timerEnemyMega);
            }
    }, 5000); // 
    // Создаем переменую для подсчета попаданий в мегаврага
    var megaHeroFight = 0;
    // Функция по клику убиваем или не убиваем врага
    onclick = function() {  
        // звук лазера
        new Audio("sounds/Lazer.mp3").play();
        // Стрелялка непрозрачная                               
        fireHero.style.opacity = 1;
        // Устанавливаем случайно длину лазерного луча          
        fireHero.style.height = 200 + random(300) + "px";                    
        // Создаем переменную enemyMegaLeftNumber куда заносим число: левая координата элемента enemyMega 
        var enemyMegaLeftNumber = parseInt(enemyMega.style.left);
        // Создаем переменную fireHeroLeftNumber куда заносим число: левая координата элемента fireHero 
        var fireHeroLeftNumber = parseInt(fireHero.style.left); 
        // Создаем проверку: если луч лазера попадает по мега врагу, то убиваем его и т.д.
        if ( (fireHeroLeftNumber >= enemyMegaLeftNumber) && (fireHeroLeftNumber <= (enemyMegaLeftNumber + 150)) ) {              
            // Изменяем счетчик при попадании в мега врага
            megaHeroFight = megaHeroFight + 1;                        
            // Добавляем очки за уничтожение врага
            pointsCurrent =  pointsCurrent + 1;
            // меняем текст счета игры, текст будет из переменной pointsCurrent
            points.innerText = pointsCurrent;
            // проверяем, нужно ли открывать формулу
            proverkaFormula();                     
        } 
        // Функция задержки для стрелялки по клику
        setTimeout(function() { 
            // Стрелялка пропадает после задержки 
            fireHero.style.opacity = 0;
            // Если в мега врага попали 5 раз, то он умирает
            if (megaHeroFight >= 19) {
                // звук взрыва босса
                new Audio("sounds/boom2.mp3").play();
                // Убиваем врага
                enemyMega.remove();
                // завершить игру
                endGame();
                // запускаем блок выигрыша
                madeWonBlock(); 
            }       
        }, 70); // Конец блока задержки
    } // Конец функции onclick
}// Заканчиваем создавать врага

/*=======================
Удаление элементов
=========================*/
// Удаляем стартовый блок
function removeStartBlock() {
	// удаляем выбранный блок
	startBlock.remove();
}
// Удаляем блок очков
function removePointsBlock() {
	points.remove();
}
// Удаляем блок с жизнями
function removeLifesBlock () {
	lifes.remove();
}
// Удаляем блок таймера
function removeTimerBlock() {
	timerBlock.remove();
}
// Удаляем блок формулы
function removeFormulaBlock() {
	formula.remove();
}
// Удаляем космический корабль
function removeSpaceHero() {
	heroOur.remove();
}
// Удаляем стрелялки космического корабля
function removefireOurHero() {
	fireHero.remove();
}
// Удаляем блок конца игры
function removeOverBlock() {
	overBlock.remove();
}
// Удаляем блок Победы
function removeWonBlock() {
	wonBlock.remove();
}
// Удаляем блок Карантина
function removeQuarantineBlock() {
	quarantineBlock.remove();
}
//Очищаем игровое поле
function ochistitMainGame() {
	mainGame.innerText = "";
}