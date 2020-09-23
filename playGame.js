class playGame extends Phaser.Scene {
    constructor() {
      super("PlayGame");
    }
    create() {
      // create an tiled sprite with the size of our game screen
      this.plx_1 = this.add.tileSprite(0, 0, this.game.config.width, this.game.config.height, "plx_1");
      // Set its pivot to the top left corner
      this.plx_1.setOrigin(0, 0);
      // fixe it so it won't move when the camera moves.
      // Instead we are moving its texture on the update
      this.plx_1.setScrollFactor(0);
  
      // Add a second background layer. Repeat as in bg_1
      this.plx_2 = this.add.tileSprite(0, 0, this.game.config.width, this.game.config.height, "plx_2");
      this.plx_2.setOrigin(0, 0);
      this.plx_2.setScrollFactor(0);

      this.plx_2 = this.add.tileSprite(0, 0, this.game.config.width, this.game.config.height, "plx_3");
      this.plx_2.setOrigin(0, 0);
      this.plx_2.setScrollFactor(0);

      this.plx_2 = this.add.tileSprite(0, 0, this.game.config.width, this.game.config.height, "plx_4");
      this.plx_2.setOrigin(0, 0);
      this.plx_2.setScrollFactor(0);

      this.plx_2 = this.add.tileSprite(0, 0, this.game.config.width, this.game.config.height, "plx_5");
      this.plx_2.setOrigin(0, 0);
      this.plx_2.setScrollFactor(0);
  
      // add the ground layer which is only 48 pixels tall
      this.ground = this.add.tileSprite(0, 0, game.config.width, 48, "ground");
      this.ground.setOrigin(0, 0);
      this.ground.setScrollFactor(0);
      // sinc this tile is shorter I positioned it at the bottom of he screen
      this.ground.y = 12 * 15;
  
      // add player
      this.player = this.add.sprite(50, 180, "player", 0);
      this.player.setScale(2);
      // create an animation for the player
      this.anims.create({
        key: "run",
        frames: this.anims.generateFrameNumbers("player", {start: 18, end: 24}),
        frameRate: 20,
        repeat: -1
      });
      this.player.play("run");
  
      // allow key inputs to control the player
      this.cursors = this.input.keyboard.createCursorKeys();
  
  
      // set workd bounds to allow camera to follow the player
      this.myCam = this.cameras.main;
      this.myCam.setBounds(0, 0, game.config.width * 3, game.config.height);
  
      // making the camera follow the player
      this.myCam.startFollow(this.player);
  
  
    //   // scroll the texture of the tilesprites proportionally to the camera scroll
      this.plx_1.tilePositionX = this.myCam.scrollX * .2;
      this.plx_2.tilePositionX = this.myCam.scrollX * .4;
      this.plx_2.tilePositionX = this.myCam.scrollX * .6;
      this.plx_2.tilePositionX = this.myCam.scrollX * .8;
      this.plx_2.tilePositionX = this.myCam.scrollX * .10;
      this.ground.tilePositionX = this.myCam.scrollX;
  
  
    }
  }
  