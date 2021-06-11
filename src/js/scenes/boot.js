import Phaser from 'phaser';

export default class extends Phaser.Scene {
  constructor() {
    super({ key: 'Boot' });
  }

  preload() {
    this.load.image('phaserLogo', 'assets/phaserLogo.png');
  }

  create() {
    const cameraX = this.cameras.main.centerX;
    const cameraY = this.cameras.main.centerY;

    this.add.image(cameraX, cameraY - 100, 'phaserLogo').setScale(0.8);

    const gameTitle = this.add.text(0, 0, 'Space Shooter', { fontSize: 32 });
    gameTitle.setPosition(cameraX - gameTitle.width / 2, cameraY + 100);

    setTimeout(() => {
      // this.scene.start('Preload');
    }, 3000);
  }
}
