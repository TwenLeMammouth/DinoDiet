class preloadGame extends Phaser.Scene{
    constructor(){
      super("PreloadGame");
    }
    preload(){
      // this.game.time.advancedTiming = true;
      // load all assets tile sprites
      this.load.image("plx_1", "assets/plx-1.png");
      this.load.image("plx_2", "assets/plx-2.png");
      this.load.image("plx_3", "assets/plx-3.png");
      this.load.image("plx_4", "assets/plx-4.png");
      this.load.image("plx_5", "assets/plx-5.png");
      this.load.image("ground", "assets/ground.png");
      // load spritesheet
      this.load.spritesheet("player", "assets/DinoGreen.png",{
        frameWidth: 24,
        frameHeight: 24
      });
    }
    create(){
      this.scene.start("PlayGame");
      
    }
    render()
    {
        //this.game.debug.text(this.game.time.fps || '--', 20, 70, "#00ff00", "40px Courier");   
    }
}
