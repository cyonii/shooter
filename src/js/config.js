import Boot from './scenes/boot';

const gameContainer = document.getElementById('game');

export default (() => {
  return {
    type: Phaser.AUTO,
    width: gameContainer.clientWidth,
    height: gameContainer.clientHeight,
    parent: 'game',
    title: 'Shooter',
    scene: [Boot],
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 200 },
        debug: false,
      },
    },
  };
})();
