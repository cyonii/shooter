import Phaser from 'phaser';

export default class extends Phaser.Scene {
  constructor() {
    super({ key: 'Preload' });
  }

  preload() {
    this.load.image('playerShip', 'assets/img/playerShip.png');

    this.cameraX = this.cameras.main.centerX;
    this.cameraY = this.cameras.main.centerY;
    this.cameraHeight = this.cameras.main.height;
    const loadingText = this.add.text(0, 0, '', { fontSize: 24 });

    // update progress percentage
    this.load.on('progress', (value) => {
      loadingText.setText(`Loading... ${value * 100}%`);
      loadingText.setPosition(
        this.cameraX - loadingText.width / 2,
        this.cameraY + this.cameraHeight * 0.05,
      );
    });

    setTimeout(() => {
      this.scene.start('Title');
    }, 1500);
  }

  create() {
    const { cameraX, cameraY, cameraHeight } = this;

    this.add.image(cameraX, cameraY - cameraHeight * 0.05, 'playerShip');
  }
}
