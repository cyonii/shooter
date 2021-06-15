import Phaser from 'phaser';

export default class extends Phaser.Scene {
  constructor() {
    super({ key: 'Credits' });
  }

  preload() {
    this.load.image('button', 'assets/img/blueButton.png');
  }

  create() {
    const creditsText = this.add.text(0, 0, 'Credits: CY Kalu');
    creditsText.setPosition(this.cameras.main.centerX - creditsText.width / 2, 250);

    const backButton = this.add.sprite(this.cameras.main.centerX, 300, 'button').setInteractive();
    const backText = this.add.text(0, 0, 'Main Menu', { fontSize: 24, fill: '#fff' });
    Phaser.Display.Align.In.Center(backText, backButton);

    backButton.on('pointerup', () => {
      this.scene.start('Title');
    });
  }
}
