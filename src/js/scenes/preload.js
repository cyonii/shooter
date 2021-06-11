import Phaser from 'phaser';

const state = {};

export default class extends Phaser.Scene {
  constructor() {
    super({ key: 'Preload' });
  }

  preload() {
    this.load.image('playerShip', 'assets/ships/playerSpaceship.png');

    const cameraX = (state.cameraX = this.cameras.main.centerX);
    const cameraY = (state.cameraY = this.cameras.main.centerY);
    const cameraHeight = (state.cameraHeight = this.cameras.main.height);
    const loadingText = this.add.text(0, 0, '', { fontSize: 24 });

    // update progress percentage
    this.load.on('progress', (value) => {
      loadingText.setText('Loading... ' + value * 100 + '%');
      loadingText.setPosition(cameraX - loadingText.width / 2, cameraY + cameraHeight * 0.05);
    });

    setTimeout(() => {
      // this.scene.start('Game');
    }, 1500);
  }

  create() {
    const { cameraX, cameraY, cameraHeight } = state;

    this.add.image(cameraX, cameraY - cameraHeight * 0.05, 'playerShip');
  }
}
