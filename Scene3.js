class Scene3 extends Phaser.Scene {
  constructor(){
    super("world");
    //super({ key: 'gameOver', active: false});
  }
  //var score = 0;
  //var scoreText;
  create(){
    //this.world=this.add.tileSprite(0,0,config.width,config.height,"world");
    this.world=this.add.image(0,0,"world").setOrigin(0, 0);
    this.oldHouse=this.add.image(3910,160,"oldHouse");
    this.blueHouse=this.add.image(1340,2130,"blueHouse");
    this.redHouse=this.add.image(2200,3700,"redHouse");

    this.yellowHouse=this.add.image(2200,2730,"yellowHouse");
    this.orangeHouse=this.add.image(1740,2970,"orangeHouse");
    this.purpleHouse=this.add.image(1840,2480,"purpleHouse");
    this.whiteHouse=this.add.image(1340,2460,"whiteHouse");
    this.greenHouse=this.add.image(1340,2970,"greenHouse");
    this.ship=this.add.image(3750,3350,"ship");


    // this.physics.add.collider(this.oldHouse,this.player);
    // this.physics.add.collider(this.blueHouse,this.player);
    // this.physics.add.collider(this.redHouse,this.player);






    this.player=this.physics.add.sprite(2048,2048,"playersheet");

    // this.void=this.physics.add.sprite(100,200,"void");
    // this.void.play("void_anim");

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
    //this.player.setCollideWorldBounds(true);

    this.cameras.main.setBounds(0, 0, this.world.displayWidth, this.world.displayHeight);
    this.cameras.main.startFollow(this.player);



    this.void=this.physics.add.sprite(1300,1700,"void");
    this.void.play("void_anim");
    this.physics.add.overlap(this.player,this.void,this.gameOver,null,this);

    this.eggu=this.physics.add.sprite(100,4000,"eggu");
    this.eggu.play("eggu_anim");
    this.physics.add.overlap(this.player,this.eggu,this.gameOver,null,this);

    this.pinkwing=this.physics.add.sprite(3300,3200,"pinkwing");
    this.pinkwing.play("pinkwing_anim");
    this.physics.add.overlap(this.player,this.pinkwing,this.gameOver,null,this);

    this.unvert=this.physics.add.sprite(3700,100,"unvert");
    this.unvert.play("unvert_anim");
    this.physics.add.overlap(this.player,this.unvert,this.gameOver,null,this);
    this.score=0;
  }
  gameOver(){
    this.scene.start('gameOver', this.score);
  }
  killVoid(){
    this.void.play("void_death_anim")
    this.void.once('animationcomplete', () => {
      if(typeof this.void!="undefined"&&this.void!=null){
        this.void.destroy();
        this.void=undefined;
      }
    })
    this.score += 1;
    //scoreText.setText('Enemies slain: ' + score);
  }
  moveVoid(){
    if(this.void==undefined){
      this.void=this.physics.add.sprite(1300,1700,"void");
      this.void.play("void_anim");
      this.physics.add.overlap(this.player,this.void,this.gameOver,null,this);
    }
    if(typeof this.void!="undefined"&&this.void!=null){
      if(this.player.x>this.void.x){
        if(typeof this.void!="undefined"&&this.void!=null)this.void.setVelocityX(50);
      }else if(this.player.x<this.void.x){
        if(typeof this.void!="undefined"&&this.void!=null)this.void.setVelocityX(-50);
      }
      if(this.player.y>this.void.y){
        if(typeof this.void!="undefined"&&this.void!=null)this.void.setVelocityY(50);
      }else if(this.player.y<this.void.y){
        if(typeof this.void!="undefined"&&this.void!=null)this.void.setVelocityY(-50);
      }
    }
  }
  killEggu(){
    this.eggu.play("eggu_death_anim")
    this.eggu.once('animationcomplete', () => {
      if(typeof this.eggu!="undefined"&&this.eggu!=null){
        this.eggu.destroy();
        this.eggu=undefined;
      }
    })
    this.score += 1;
    //scoreText.setText('Enemies slain: ' + score);
    // this.eggu=this.physics.add.sprite(100,4000,"eggu");
    // this.eggu.play("eggu_anim");
    // this.physics.add.overlap(this.player,this.eggu,this.gameOver,null,this);
  }
  moveEggu(){
    if(this.eggu==undefined){
      this.eggu=this.physics.add.sprite(100,4000,"eggu");
      this.eggu.play("eggu_anim");
      this.physics.add.overlap(this.player,this.eggu,this.gameOver,null,this);
    }
    if(typeof this.eggu!="undefined"&&this.eggu!=null){
      if(this.player.x>this.eggu.x){
        if(typeof this.eggu!="undefined"&&this.eggu!=null)this.eggu.setVelocityX(200);
      }else if(this.player.x<this.eggu.x){
        if(typeof this.eggu!="undefined"&&this.eggu!=null)this.eggu.setVelocityX(-200);
      }
      if(this.player.y>this.eggu.y){
        if(typeof this.eggu!="undefined"&&this.eggu!=null)this.eggu.setVelocityY(200);
      }else if(this.player.y<this.eggu.y){
        if(typeof this.eggu!="undefined"&&this.eggu!=null)this.eggu.setVelocityY(-200);
      }
    }
  }
  killPinkwing(){
    this.pinkwing.play("pinkwing_death_anim")
    this.pinkwing.once('animationcomplete', () => {
      if(typeof this.pinkwing!="undefined"&&this.pinkwing!=null){
        this.pinkwing.destroy();
        this.pinkwing=undefined;
      }
    })
    this.score += 1;
    //scoreText.setText('Enemies slain: ' + score);
  }
  movePinkwing(){
    if(this.pinkwing==undefined){
      this.pinkwing=this.physics.add.sprite(3300,3200,"pinkwing");
      this.pinkwing.play("pinkwing_anim");
      this.physics.add.overlap(this.player,this.pinkwing,this.gameOver,null,this);
    }
    if(this.pinkwing.x>=3300){this.pinkwing.setVelocityX(-75)}
    else if(this.pinkwing.x<=3000){this.pinkwing.setVelocityX(75)}
  }
  killUnvert(){
    this.unvert.play("unvert_death_anim")
    this.unvert.once('animationcomplete', () => {
      if(typeof this.unvert!="undefined"&&this.unvert!=null){
        this.unvert.destroy();
        this.unvert=undefined;
      }
    })
    this.score += 1;
    //scoreText.setText('Enemies slain: ' + score);
  }
  moveUnvert(){
    if(this.unvert==undefined){
      this.unvert=this.physics.add.sprite(3700,100,"unvert");
      this.unvert.play("unvert_anim");
      this.physics.add.overlap(this.player,this.unvert,this.gameOver,null,this);
    }
    if(typeof this.unvert!="undefined"&&this.unvert!=null){
      //if(Phaser.Math.Distance.Between(this.player.x,this.player.y,this.unvert.x,this.unvert.y)<300){
              if(this.player.x>this.unvert.x){
                if(typeof this.unvert!="undefined"&&this.unvert!=null)this.unvert.setVelocityX(100);
              }else if(this.player.x<this.unvert.x){
                if(typeof this.unvert!="undefined"&&this.unvert!=null)this.unvert.setVelocityX(-100);
              }
              if(this.player.y>this.unvert.y){
                if(typeof this.unvert!="undefined"&&this.unvert!=null)this.unvert.setVelocityY(100);
              }else if(this.player.y<this.unvert.y){
                if(typeof this.unvert!="undefined"&&this.unvert!=null)this.unvert.setVelocityY(-100);
              }

      //}
    }
    // if(typeof this.unvert!="undefined"&&this.vert!=null){
    //   if(this.player.x-this.unvert.x<=300||this.unvert.x-this.player.x<=300||this.unvert.y-this.player.y<=300||this.player.y-this.unvert.y<=300){
    //     if(typeof this.unvert!="undefined"&&this.unvert!=null){
    //       if(this.player.x>this.unvert.x){
    //         if(typeof this.unvert!="undefined"&&this.unvert!=null)this.unvert.setVelocityX(100);
    //       }else if(this.player.x<this.unvert.x){
    //         if(typeof this.unvert!="undefined"&&this.unvert!=null)this.unvert.setVelocityX(-100);
    //       }
    //       if(this.player.y>this.unvert.y){
    //         if(typeof this.unvert!="undefined"&&this.unvert!=null)this.unvert.setVelocityY(100);
    //       }else if(this.player.y<this.unvert.y){
    //         if(typeof this.unvert!="undefined"&&this.unvert!=null)this.unvert.setVelocityY(-100);
    //       }
    //     }
    //   }
    // }
  }


  update(){
    this.playerAttack();
    this.movePlayerManager();
    this.moveVoid();
    this.moveEggu();
    this.movePinkwing();
    this.moveUnvert();
    if(typeof this.sword!="undefined"&&this.sword!=null){

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
  }
  playerAttack(){
    //var sword;//=new Sword(this);
    if(Phaser.Input.Keyboard.JustDown(this.cursorKeys.up)){
      if(typeof this.sword!="undefined"&&this.sword!=null){this.sword.destroy();}
      this.sword=this.physics.add.sprite(this.player.x,this.player.y-35,"sword");//.setOrigin(-1,-0.17);
      this.sword.angle += 90;
      this.sword.play("sword_anim");
      this.physics.add.overlap(this.sword,this.void,this.killVoid,null,this);
      this.physics.add.overlap(this.sword,this.eggu,this.killEggu,null,this);
      this.physics.add.overlap(this.sword,this.pinkwing,this.killPinkwing,null,this);
      this.physics.add.overlap(this.sword,this.unvert,this.killUnvert,null,this);
      //this.sword.setCollideWorldBounds(true);
    }
    else if(Phaser.Input.Keyboard.JustDown(this.cursorKeys.right)){
      if(typeof this.sword!="undefined"&&this.sword!=null){this.sword.destroy();}
      this.sword=this.physics.add.sprite(this.player.x+35,this.player.y+5,"sword");//.setOrigin(.4,1);
      this.sword.angle +=180;
      this.sword.play("sword_anim");
      this.physics.add.overlap(this.sword,this.void,this.killVoid,null,this);
      this.physics.add.overlap(this.sword,this.eggu,this.killEggu,null,this);
      this.physics.add.overlap(this.sword,this.pinkwing,this.killPinkwing,null,this);
      this.physics.add.overlap(this.sword,this.unvert,this.killUnvert,null,this);
      //this.sword.setCollideWorldBounds(true);
    }
    else if(Phaser.Input.Keyboard.JustDown(this.cursorKeys.left)){
      if(typeof this.sword!="undefined"&&this.sword!=null){this.sword.destroy();}
      this.sword=this.physics.add.sprite(this.player.x-35,this.player.y+5,"sword");//.setOrigin(0,-0.5);
      this.sword.play("sword_anim");
      this.physics.add.overlap(this.sword,this.void,this.killVoid,null,this);
      this.physics.add.overlap(this.sword,this.eggu,this.killEggu,null,this);
      this.physics.add.overlap(this.sword,this.pinkwing,this.killPinkwing,null,this);
      this.physics.add.overlap(this.sword,this.unvert,this.killUnvert,null,this);
      //this.sword.setCollideWorldBounds(true);
    }
    else if(Phaser.Input.Keyboard.JustDown(this.cursorKeys.down)){
      if(typeof this.sword!="undefined"&&this.sword!=null){this.sword.destroy();}
      this.sword=this.physics.add.sprite(this.player.x,this.player.y+40,"sword");//.setOrigin(0,0);
      //this.sword.angle += 45;
      this.sword.angle += -90;
      this.sword.play("sword_anim");
      this.physics.add.overlap(this.sword,this.void,this.killVoid,null,this);
      this.physics.add.overlap(this.sword,this.eggu,this.killEggu,null,this);
      this.physics.add.overlap(this.sword,this.pinkwing,this.killPinkwing,null,this);
      this.physics.add.overlap(this.sword,this.unvert,this.killUnvert,null,this);
      //this.sword.setCollideWorldBounds(true);
    }
    else if(!this.cursorKeys.down.isDown&&!this.cursorKeys.up.isDown&&!this.cursorKeys.left.isDown&&!this.cursorKeys.right.isDown&&typeof this.sword!="undefined"&&this.sword!=null){this.sword.destroy();this.sword=undefined;}
  }

}
