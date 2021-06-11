import Boot from './scenes/boot';
import Preload from './scenes/preload';
// import GameScene from './scenes/game';

const gameContainer = document.getElementById('game');

export default (() => {
  return {
    type: Phaser.AUTO,
    width: gameContainer.clientWidth,
    height: gameContainer.clientHeight,
    parent: 'game',
    title: 'Shooter',
    scene: [Boot, Preload],
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 200 },
        debug: false,
      },
    },
  };
})();
