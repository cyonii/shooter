import Phaser from 'phaser';

export default class extends Phaser.Scene {
  constructor() {
    super({ key: 'Game' });
  }

  preload() {
    this.load.image('player', 'assets/img/playerShip.png');
    this.load.image('enemy', 'assets/img/enemyShip001.png');
    this.load.image('laser', 'assets/img/laserBlue.png');
  }

  create() {
    // Player
    this.player = this.physics.add
      .sprite(0, 0, 'player')
      .setPosition(this.cameras.main.centerX, this.cameras.main.centerY)
      .setScale(0.8);
    this.player.setBounce(0.1);
    this.player.setCollideWorldBounds(true);

    // Platform (Ground and Sky)
    this.ground = this.add.rectangle(
      this.cameras.main.centerX,
      this.cameras.main.height,
      this.cameras.main.width,
      10,
      'transparent',
    );
    this.sky = this.add.rectangle(
      this.cameras.main.centerOnX,
      -10,
      this.cameras.main.width,
      10,
      'transparent',
    );

    this.physics.add.staticGroup(this.sky);
    this.physics.add.staticGroup(this.ground);

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

    // Lasers - Weapons
    this.lasers = this.physics.add.group();
    this.time.addEvent({
      delay: 200,
      callback: () => {
        const laser = this.lasers
          .create(this.player.x, this.player.y - this.player.height / 2, 'laser')
          .setScale(0.3)
          .setFlipY();
        laser.setVelocityY(-1200);
        laser.setScale(1.25);
      },
      callbackScope: this,
      loop: true,
    });

    // Colliders
    this.physics.add.collider(this.enemies, this.lasers, (enemy, laser) => {
      enemy.destroy();
      laser.destroy();
    });
    this.physics.add.collider(this.sky, this.lasers, (_, laser) => {
      laser.destroy();
    });
    this.physics.add.collider(this.player, this.enemies, () => {});
    this.physics.add.collider(this.ground, this.enemies, function (_, enemy) {
      enemy.destroy();
    });

    // Cursor
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-200);
    } else if (this.cursors.right.isDown) {
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
