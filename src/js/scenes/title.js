import Phaser from 'phaser';

export default class extends Phaser.Scene {
  constructor() {
    super({ key: 'Title' });
  }

  preload() {
    this.load.image('button', 'assets/img/blueButton.png');
  }

  create() {
    // Play button
    const playButton = this.add
      .sprite(this.cameras.main.centerX, this.cameras.main.centerY - 50, 'button')
      .setInteractive();
    const playText = this.add.text(0, 0, 'Play', { fontSize: 24, fill: '#fff' });
    Phaser.Display.Align.In.Center(playText, playButton);

    playButton.setInteractive();
    playButton.on('pointerup', () => {
      if (localStorage.getItem('playerName')) {
        this.scene.start('Game');
      } else {
        const playerForm = document.getElementById('playerForm');
        playerForm.style.display = 'flex';
        playerForm.onsubmit = (e) => {
          e.preventDefault();

          const playerName = document.getElementById('playerName').value;

          localStorage.setItem('playerName', playerName);
          playerForm.style.display = 'none';

          this.scene.start('Game');
        };
      }
    });

    // Credits button
    const creditsButton = this.add
      .sprite(this.cameras.main.centerX, this.cameras.main.centerY + 50, 'button')
      .setInteractive();
    const creditsText = this.add.text(0, 0, 'Credits', { fontSize: 24, fill: '#fff' });
    Phaser.Display.Align.In.Center(creditsText, creditsButton);
    creditsButton.on('pointerup', () => {
      this.scene.start('Credits');
    });
  }
}
