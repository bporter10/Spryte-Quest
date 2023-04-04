class GameOverScene extends Phaser.Scene {
  //var score;
  constructor(score){
    super("gameOver");
    this.score = score;
    //super({ key: 'gameOver', active: false});
  }

  create(){
    this.add.text(20,20,"Game",{font:"180px Arial", fill:"green"});
    this.add.text(20,170,"Over",{font:"180px Arial", fill:"green"});
    this.add.text(180,400,"Enemies Slain: " + this.score,{font:"20px Arial", fill:"green"});

    this.add.text(180,450,"Click to start over",{font:"20px Arial", fill:"green"});

    this.input.on('pointerdown', function (pointer) {
        this.scene.start("playGame");
    }, this);
  }
  update(){

  }

}
