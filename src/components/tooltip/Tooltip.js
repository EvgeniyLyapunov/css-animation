import './tooltip.css';

class Tooltip {
  constructor(tooltipParent, tooltipText) {
    this.tooltipParent = tooltipParent;
    this.tooltipText = tooltipText;

    this.tooltip = null;

    this.tooltipShow = this.tooltipShow.bind(this);
    this.tooltipHide = this.tooltipHide.bind(this);
    this.tooltipHideOutSide = this.tooltipHideOutSide.bind(this);

    this.tooltipParent.addEventListener('click', this.tooltipShow);
  }

  tooltipShow(e) {
    e.preventDefault();

    if (!this.tooltip) {
      this.tooltip = document.createElement('div');
      this.tooltip.classList.add('tooltip');
      this.tooltip.textContent = `${this.tooltipText}`;
      document.body.appendChild(this.tooltip);
    } else {
      this.tooltip.classList.remove('hide');
    }

    const { left, bottom } = this.tooltipParent.getBoundingClientRect();

    this.tooltip.style.left = `${
      left + this.tooltipParent.offsetWidth / 2 - this.tooltip.offsetWidth / 2
    }px`;
    this.tooltip.style.top = `${bottom + 10}px`;

    window.addEventListener('resize', this.tooltipHide);
    window.addEventListener('click', this.tooltipHideOutSide);

    this.tooltip.classList.add('show');

    this.tooltipParent.removeEventListener('click', this.tooltipShow);
    this.tooltipParent.addEventListener('click', this.tooltipHide);
  }

  tooltipHide() {
    this.tooltip.classList.remove('show');
    this.tooltip.classList.add('hide');
    this.tooltipParent.removeEventListener('click', this.tooltipHide);
    this.tooltipParent.addEventListener('click', this.tooltipShow);
    window.removeEventListener('resize', this.tooltipHide);
  }

  tooltipHideOutSide(e) {
    if (e.target !== this.tooltipParent) {
      window.removeEventListener('click', this.tooltipHideOutSide);
      this.tooltipHide();
    }
  }
}
export default Tooltip;
