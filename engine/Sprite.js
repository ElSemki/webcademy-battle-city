(function () {
  'use strict';

  class Sprite {
    constructor(texture, args = {}) {
      this.texture = texture;

      const frame = args.frame || {};

      this.frame = {
        x: frame.x || 0,
        y: frame.y || 0,
        width: frame.width || texture.width,
        height: frame.height || texture.height,
      };

      this.x = args.x || 0;
      this.y = args.y || 0;
      this.width = args.width || this.frame.width;
      this.height = args.height || this.frame.height;
    }

    draw(canvas, context) {
      context.drawImage(
        this.texture,

        this.frame.x,
        this.frame.y,
        this.frame.width,
        this.frame.height,

        this.x,
        this.y,
        this.width,
        this.height
      );
    }
  }

  window.GameEngine = window.GameEngine || {};
  window.GameEngine.Sprite = Sprite;
})();
