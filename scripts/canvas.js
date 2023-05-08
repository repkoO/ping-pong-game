export default class Canvas {
  constructor(setting) {
    this.set = setting;
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = this.set.boxWidth;
    this.canvas.height = this.set.boxHeigth;
    document.querySelector('#game').append(this.canvas);
  }

  drawText(text, x, y, fontSize, color = this.set.textColor, align = 'center', baseline = 'middle') {
    this.ctx.fillStyle = color;
    this.ctx.font = `bold ${fontSize} 'Fira Mono', monospace`;
    this.ctx.textAlign = align;
    this.ctx.textBaseline = baseline;
    this.ctx.fillText(text, x, y);
  }

  drawLine(xS, yS, xF, yF, lineWidth, color) {
    this.ctx.lineCap = 'round';
    this.ctx.beginPath();
    this.ctx.moveTo(xS, yS);
    this.ctx.lineTo(xF, yF);
    this.ctx.lineWidth = lineWidth;
    this.ctx.strokeStyle = color;
    this.ctx.stroke();
    this.ctx.closePath();
  }
}
