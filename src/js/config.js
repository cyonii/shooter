import BootScene from './scenes/boot';
import PreloadScene from './scenes/preload';
import GameScene from './scenes/game';

const gameContainer = document.getElementById('game');

export default (() => {
  return {
    type: Phaser.AUTO,
    width: gameContainer.clientWidth,
    height: gameContainer.clientHeight,
    parent: 'game',
    title: 'Shooter',
    scene: [BootScene, PreloadScene, GameScene],
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 100 },
        debug: false,
      },
    },
  };
})();
