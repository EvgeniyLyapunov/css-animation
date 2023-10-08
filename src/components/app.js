import Tooltip from './tooltip/Tooltip';

const tooltipParent = document.querySelector('.page-btn');
const tooltipText =	'Очень интересная тема. Задания со звёздочкой тоже супер. Но нет времени. Поэтому делаю обязательное задание и перехожу к следующей теме.';

const tooltip = new Tooltip(tooltipParent, tooltipText);

console.log(tooltip);
