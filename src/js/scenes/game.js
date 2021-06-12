import Phaser from 'phaser';

export default class extends Phaser.Scene {
  constructor() {
    super({ key: 'Game' });
  }

  preload() {
    this.load.image('player', 'assets/img/playerShip.png');
    this.load.image('enemy', 'assets/img/enemyShip001.png');
  }

  create() {
    // Player
    this.player = this.physics.add
      .sprite(0, 0, 'player')
      .setPosition(this.cameras.main.centerX, this.cameras.main.centerY)
      .setScale(0.8);
    this.player.setBounce(0.1);
    this.player.setCollideWorldBounds(true);

    // Platform
    this.platform = this.add.rectangle(
      this.cameras.main.centerX,
      this.cameras.main.height,
      this.cameras.main.width,
      10,
      0x000000,
    );
    this.physics.add.staticGroup(this.platform);

    // Enemies
    this.enemies = this.physics.add.group();
    this.time.addEvent({
      delay: 300,
      callback: () => {
        this.enemies
          .create(Math.random() * this.cameras.main.width, -20, 'enemy')
          .setScale(0.3)
          .setFlipY();
      },
      callbackScope: this,
      loop: true,
    });

    // Player and enemy collider
    this.physics.add.collider(this.enemies, this.player, () => {});
    this.physics.add.collider(this.enemies, this.platform, function (_, enemy) {
      enemy.destroy();
    });

    // Cursor
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    if (this.cursors.left.isDown) {
      // this.player.x -= 5;
      this.player.setVelocityX(-200);
    } else if (this.cursors.right.isDown) {
      // this.player.x += 5;
      this.player.setVelocityX(200);
    } else if (this.cursors.down.isDown) {
      this.player.setVelocityY(+160);
    } else if (this.cursors.up.isDown) {
      this.player.setVelocityY(-160);
    } else {
      this.player.setVelocityX(0);
    }
  }
}
