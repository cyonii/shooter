import Phaser from 'phaser';

export default class extends Phaser.Scene {
  constructor() {
    super({ key: 'GameOver' });
  }

  init(data) {
    this.score = data.score;
  }

  create() {
    const scoreText = this.add.text(0, 0, `Score: ${this.score}`, { fontSize: 24 });
    scoreText.setPosition(
      this.cameras.main.centerX - scoreText.width / 2,
      this.cameras.main.centerY,
    );

    setTimeout(() => {
      this.scene.start('Title');
    }, 2000);
  }
}
