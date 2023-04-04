const gameState = {};
var config={
  type: Phaser.AUTO,
  width:512,
  height:544,
  backgroundColor:0x000000,
  physics:{
    default:'arcade', arcade:{debug:false, enableBody:true}
  },
  scene: [Scene1,Scene2,GameOverScene,Scene3],
  pixelArt:true
}

var game = new Phaser.Game(config);
