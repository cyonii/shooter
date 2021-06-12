import Phaser from 'phaser';

export default class extends Phaser.Scene {
  constructor() {
    super({ key: 'Title' });
  }

  preload() {
    this.load.image('button', 'assets/img/blueButton.png');
  }

  create() {
    const button = this.add
      .sprite(this.cameras.main.centerX, this.cameras.main.centerY, 'button')
      .setInteractive();
    const text = this.add.text(0, 0, 'Play', { fontSize: 24, fill: '#fff' });
    Phaser.Display.Align.In.Center(text, button);

    button.setInteractive();
    button.on('pointerup', () => this.scene.start('Game'));
  }
}
