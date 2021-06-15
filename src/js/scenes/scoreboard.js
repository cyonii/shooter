import Phaser from 'phaser';
import { getScores } from '../api/leaderboard';

export default class extends Phaser.Scene {
  constructor() {
    super({ key: 'GameOver' });
  }

  init(data) {
    this.score = data.score;
  }

  preload() {
    this.load.image('button', 'assets/img/blueButton.png');
  }

  create() {
    // Score
    this.add.text(5, 5, `Score: ${this.score}`);

    const leaderboardList = this.add.text(0, 0, '');
    let leaderboardText = 'LEADERBOARD\n==============\n\n';

    getScores()
      .then((data) => {
        data.result
          .sort((a, b) => a.score - b.score)
          .reverse()
          .splice(0, 6)
          .forEach((entry) => {
            leaderboardText += `${entry.user}: ${entry.score}\n`;
            leaderboardList.setText(leaderboardText);
            leaderboardList.setPosition(
              this.cameras.main.centerX - leaderboardList.width / 2,
              this.cameras.main.centerY - leaderboardList.height / 2,
            );
          });
      })
      .catch((err) => err);

    // Play again button
    const playButton = this.add
      .sprite(this.cameras.main.centerX, this.cameras.main.centerY + 150, 'button')
      .setInteractive();
    const text = this.add.text(0, 0, 'Play', { fontSize: 24, fill: '#fff' });
    Phaser.Display.Align.In.Center(text, playButton);

    playButton.setInteractive();
    playButton.on('pointerup', () => this.scene.start('Game'));
  }
}
