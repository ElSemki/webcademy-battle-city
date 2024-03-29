(function () {
  'use stcict';

  class Renderer {
    constructor(args = {}) {
      this.canvas = document.createElement('canvas');
      this.context = this.canvas.getContext('2d');

      this.background = args.background || 'black';
      this.canvas.width = args.width || 50;
      this.canvas.height = args.height || 50;
      this.update = args.update || (() => {});

      this.stage = new GameEngine.Container();

      requestAnimationFrame((timestamp) => this.tick(timestamp));
    }

    tick(timestamp) {
      this.update(timestamp);
      this.clear();
      this.render();
      requestAnimationFrame((timestamp) => this.tick(timestamp));
    }

    render() {
      this.stage.draw(this.canvas, this.context);
    }

    draw(callback) {
      callback(this.canvas, this.context);
    }

    clear() {
      this.context.fillStyle = this.background;
      this.context.beginPath();
      this.context.rect(0, 0, this.canvas.width, this.canvas.height);
      this.context.fill();
    }
  }

  window.GameEngine = window.GameEngine || {};
  window.GameEngine.Renderer = Renderer;
})();
