class Scene2 extends Phaser.Scene {
  constructor(){
    super("playGame");
  }
  create(){

    this.background=this.add.tileSprite(0,0,config.width,config.height,"background");
    this.background.setOrigin(0,0);
    this.add.text(20,140,"Welcome to Pixopolis!",{font:"20px Arial", fill:"black"});
    this.add.text(20,170,"Use WASD to move around.",{font:"20px Arial", fill:"red"});
    this.add.text(20,200,"Use the arrow keys to brandish your sword.",{font:"20px Arial", fill:"black"});
    this.add.text(20,230,"When you're ready to leave this room,",{font:"20px Arial", fill:"red"});
    this.add.text(20,250,"exit through the door.",{font:"20px Arial", fill:"red"});
    this.player=this.physics.add.sprite(config.width/2+50,config.height/2,"playersheet");

    //this.ship3.setScale(2);
    this.cursorKeys = this.input.keyboard.createCursorKeys();
    this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.input.on('pointerdown', function (pointer) {
        //console.log('down');

        //this.add.sprite(pointer.x, pointer.y, 'sword');
        // s=this.add.sprite(this.player.x,this.player.y, 'sword');
        // s.setOrigin(this.player.x,this.player.y);
    }, this);

    this.player.setCollideWorldBounds(true);
    this.void=this.physics.add.sprite(100,200,"void");
    this.void.play("void_anim");

    //this.physics.add.collider(this.void,this.player);
    this.physics.add.overlap(this.player,this.void,this.gameOver,null,this);


    //this.weapons = this.add.group();
    //this.debug.body(void);
    //this.cameras.main.setBounds(0, 0, this.background.displayWidth, this.background.displayHeight);
    //this.cameras.main.startFollow(this.player);
  }

  gameOver(){
    this.scene.start('gameOver');
  }
  killVoid(){
    this.void.play("void_death_anim")
    this.void.once('animationcomplete', () => {
      this.void.destroy();
    })
  }
  moveShip(ship,speed){
    ship.y+=speed;
    if(ship.y>config.height){
      this.resetShipPos(ship);
    }
  }
  update(){
    this.playerAttack();
    this.movePlayerManager();
    this.moveVoid();
    this.exitRoom();
  }
  exitRoom(){
    if(this.player.y<=120&&this.player.x>=90&&this.player.x<=128){
      //if(typeof this.sword!="undefined"&&this.sword!=null){this.sword.destroy();}
      this.scene.start('world');
    }
  }
  movePlayerManager(){
    if (this.keyS.isDown) {
      this.player.anims.play("player_anim_down",true);this.player.setVelocityY(150);
      if(typeof this.sword!="undefined"&&this.sword!=null){this.sword.setVelocityY(150);}
    }
    if (this.keyW.isDown) {
      this.player.anims.play("player_anim_up",true);this.player.setVelocityY(-150);
      if(typeof this.sword!="undefined"&&this.sword!=null){this.sword.setVelocityY(-150);}
    }
    if (this.keyD.isDown) {
      this.player.flipX=true;this.player.anims.play("player_anim_side",true);this.player.setVelocityX(150);
      if(typeof this.sword!="undefined"&&this.sword!=null){this.sword.setVelocityX(150);}
    }
    if (this.keyA.isDown) {
      this.player.flipX=false;this.player.anims.play("player_anim_side",true);this.player.setVelocityX(-150);
      if(typeof this.sword!="undefined"&&this.sword!=null){this.sword.setVelocityX(-150);}
    }
    if(!this.keyW.isDown&&!this.keyS.isDown){
      this.player.setVelocityY(0);
      if(typeof this.sword!="undefined"&&this.sword!=null){this.sword.setVelocityY(0);}
    }
    if(!this.keyA.isDown&&!this.keyD.isDown){
      this.player.setVelocityX(0);
      if(typeof this.sword!="undefined"&&this.sword!=null){this.sword.setVelocityX(0);}
    }
    if(!this.keyA.isDown&&!this.keyD.isDown&&!this.keyW.isDown&&!this.keyS.isDown)
    {
      this.player.setVelocityX(0);this.player.setVelocityY(0);this.player.anims.stop();
      if(typeof this.sword!="undefined"&&this.sword!=null){this.sword.setVelocityX(0);this.sword.setVelocityY(0);}
    }
    else if(this.player.y<=120&&this.keyW.isDown){
      this.player.setVelocityY(0);
      if(typeof this.sword!="undefined"&&this.sword!=null){this.player.setVelocityY(0);}
    }
  }
  playerAttack(){
    //var sword;//=new Sword(this);
    if(Phaser.Input.Keyboard.JustDown(this.cursorKeys.up)){
      if(typeof this.sword!="undefined"&&this.sword!=null){this.sword.destroy();}
      this.sword=this.physics.add.sprite(this.player.x,this.player.y-35,"sword")//.setOrigin(-1,-0.17);
      this.sword.angle += 90;
      this.sword.play("sword_anim");
      this.physics.add.overlap(this.sword,this.void,this.killVoid,null,this);
      this.sword.setCollideWorldBounds(true);
    }
    else if(Phaser.Input.Keyboard.JustDown(this.cursorKeys.right)){
      if(typeof this.sword!="undefined"&&this.sword!=null){this.sword.destroy();}
      this.sword=this.physics.add.sprite(this.player.x+35,this.player.y+5,"sword")//.setOrigin(.4,1);
      this.sword.angle +=180;
      this.sword.play("sword_anim");
      this.physics.add.overlap(this.sword,this.void,this.killVoid,null,this);
      this.sword.setCollideWorldBounds(true);
    }
    else if(Phaser.Input.Keyboard.JustDown(this.cursorKeys.left)){
      if(typeof this.sword!="undefined"&&this.sword!=null){this.sword.destroy();}
      this.sword=this.physics.add.sprite(this.player.x-35,this.player.y+5,"sword");//.setOrigin(0,-0.5);
      this.sword.play("sword_anim");
      this.physics.add.overlap(this.sword,this.void,this.killVoid,null,this);
      this.sword.setCollideWorldBounds(true);
    }
    else if(Phaser.Input.Keyboard.JustDown(this.cursorKeys.down)){
      if(typeof this.sword!="undefined"&&this.sword!=null){this.sword.destroy();}
      this.sword=this.physics.add.sprite(this.player.x,this.player.y+40,"sword")//.setOrigin(0,0);
      //this.sword.angle += 45;
      this.sword.angle += -90;
      this.sword.play("sword_anim");
      this.physics.add.overlap(this.sword,this.void,this.killVoid,null,this);
      this.sword.setCollideWorldBounds(true);
    }

    else if(!this.cursorKeys.down.isDown&&!this.cursorKeys.up.isDown&&!this.cursorKeys.left.isDown&&!this.cursorKeys.right.isDown&&typeof this.sword!="undefined"&&this.sword!=null){this.sword.destroy();this.sword=undefined;}
  }
  moveVoid(){
    if(this.void.x===100&&this.void.y<400){this.void.y+=2;}
    else if(this.void.x<400&&this.void.y===400){this.void.x+=2;}
    else if(this.void.x===400&&this.void.y>200){this.void.y-=2;}
    else if(this.void.x>100&&this.void.y===200){this.void.x-=2;}
  }

}
