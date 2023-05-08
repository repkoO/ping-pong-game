export default class Setting {
  constructor() {
    // Основные параметры
    this.boxWidth = 800;
    this.boxHeight = 500; // Высота и ширина игрового поля, и всех слоев канваса
    this.boxRound = 20; // Радиус закругления углов игрового поля
    this.boxColor = '#333333'; // Серый цвет заливки игрового поля.
    this.lineWidth = 6; // Толщина линий
    this.lineColor = '#232323'; // Цвет линий. Темно-серый, как основной фон окна брузера в CSS
    this.textColor = '#EBEBEB'; // Светло-серый цвет, используется для текста таймера и бегунка
    this.supportColorRed = '#FA0556';
    this.supportColorYellow = '#FAC405'; // Вспомогательные красный и желтый цвета
    // Параметры мяча
    this.ballSpeed = 7; // Параметры мяча
    this.ballRadius = 8; // Радиус мяча
    this.ballXDefault = (this.boxWidth / 2);
    this.ballYDefault = (this.boxHeight / 2); // Координаты мячика по умолчанию
    this.ballColor = '#EBEBEB'; // Цвет мяча
    this.ballHitScore = 0; // Количество отбитий мяча
    this.ball = {
      x: this.ballXDefault,
      y: this.ballYDefault, // Текущие координаты мячика
      dx: 0,
      dy: 0,
      speed: this.ballSpeed,
    };
    // Параметры игрока
    this.playerRadius = 7; // Радиус игрока
    this.playerHeight = 80; // Высота игрока
    this.playerSpeed = 8; // Скорость игрока
    this.playerBroder = this.playerRadius * 3;// Пространство от краев игрока до стенки сверху/снизу
    this.playerSpace = this.playerRadius * 6; // Пространство от центра платформы игрока до стенки
    this.playerYDefault = (this.boxHeight / 2) - (this.playerHeight / 2);
    this.playerL = {
      score: 0, // Счетчик очков
      goalPointX: this.boxWidth - this.playerSpace * 2,
      align: 'right',
      x: this.playerSpace,
      y: this.playerYDefault,
      yDefault: ((this.boxHeight / 2) - (this.playerHeight / 2)),
      color: '#A55F02',
      keys: [[87, 'up'], [83, 'down']], // Создаем массив с парами ключ-значение.
    };
    this.playerR = {
      score: 0,
      goalPointX: this.playerSpace * 2,
      align: 'left',
      x: this.boxWidth - (this.playerSpace),
      // Координата X для правого игрока равна всей ширине поля,
      // минус заданное растояние playerSpace
      y: this.playerYDefault,
      color: '#38887A',
      // Голубой
      keys: [[38, 'up'], [40, 'down']],
    };
  }
}
