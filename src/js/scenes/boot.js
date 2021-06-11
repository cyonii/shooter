import Phaser from 'phaser';

export default class extends Phaser.Scene {
  constructor() {
    super({ key: 'Boot' });
  }

  preload() {
    this.load.image('phaserLogo', 'assets/phaserLogo.png');
  }

  create() {
    this.add
      .image(this.cameras.main.centerX, this.cameras.main.centerY - 100, 'phaserLogo')
      .setScale(0.8);

    this.add;
    const title = this.add.text(0, 0, 'Space Shooter');

    setTimeout(() => {
      // this.scene.start('Preload');
    }, 3000);
  }
}
