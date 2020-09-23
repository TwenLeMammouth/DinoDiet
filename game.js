var game;

  let gameConfig = {
    type: Phaser.CANVAS,
    width: 384,
    height: 216,
    pixelArt: true,
    physics: {
      default: 'arcade',
      arcade: {
          gravity: {
            y: 100
          }
      }
    },
    scene: [preloadGame, playGame]
  }
  game = new Phaser.Game(gameConfig);

