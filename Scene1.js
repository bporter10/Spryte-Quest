class Scene1 extends Phaser.Scene {
  constructor(){
    super("bootGame");
  }
  preload(){
    this.load.image("background","assets/images/background.png");
    this.load.image("world","assets/images/world.png");
    this.load.image("player","assets/images/ship3.png");
    this.load.image("title_sword","assets/images/sword_title.png");


    this.load.image("oldHouse","assets/images/oldhouse.png");
    this.load.image("blueHouse","assets/images/bluehouse.png");
    this.load.image("redHouse","assets/images/redhouse.png");
    this.load.image("orangeHouse","assets/images/orangehouse.png");
    this.load.image("purpleHouse","assets/images/purplehouse.png");
    this.load.image("whiteHouse","assets/images/whitehouse.png");
    this.load.image("greenHouse","assets/images/greenhouse.png");
    this.load.image("yellowHouse","assets/images/yellowhouse.png");
    this.load.image("ship", "assets/images/ship.png")





    this.load.spritesheet("sword","assets/images/sword2.png",{
      frameWidth:82,
      frameHeight:19
    });
    this.load.spritesheet("void","assets/images/void.png",{
      frameWidth:36,
      frameHeight:37
    });
    this.load.spritesheet("playersheet","assets/images/sssss.png",{
      frameWidth:17,
      frameHeight:48
    });

    this.load.spritesheet("eggu","assets/images/eggu.png",{
      frameWidth:32,
      frameHeight:39
    });
    this.load.spritesheet("pinkwing","assets/images/pinkwing.png",{
      frameWidth:31,
      frameHeight:9
    });
    this.load.spritesheet("unvert","assets/images/unvert.png",{
      frameWidth:21,
      frameHeight:45
    });
    // this.load.spritesheet("attackD","assets/images/attackD.png",{
    //   frameWidth:48,
    //   frameHeight:48
    // });
    this.load.audio("audio","assets/music/music.mp3");
  }
  create(){
    this.anims.create({
      key:"player_anim_down",
      frames:this.anims.generateFrameNumbers("playersheet",{ start: 0, end: 2 }),
      frameRate:5,
      repeat:1
    });
    this.anims.create({
      key:"player_anim_up",
      frames:this.anims.generateFrameNumbers("playersheet",{ start: 5, end: 7 }),
      frameRate:5,
      repeat:1
    });
    this.anims.create({
      key:"player_anim_side",
      frames:this.anims.generateFrameNumbers("playersheet",{ start: 3, end: 4 }),
      frameRate:5,
      repeat:1
    });
    this.anims.create({
      key:"player_attack_l",
      frames:this.anims.generateFrameNumbers("playersheet",{ start: 11, end: 11 }),
      frameRate:5,
      repeat:1
    });
    this.anims.create({
      key:"void_anim",
      frames:this.anims.generateFrameNumbers("void",{ start: 0, end: 1 }),
      frameRate:5,
      repeat:-1
    });
    this.anims.create({
      key:"void_death_anim",
      frames:this.anims.generateFrameNumbers("void",{ start: 2, end: 3 }),
      frameRate:10,
      repeat:0
    });
    this.anims.create({
      key:"eggu_anim",
      frames:this.anims.generateFrameNumbers("eggu",{ start: 0, end: 1 }),
      frameRate:5,
      repeat:-1
    });
    this.anims.create({
      key:"eggu_death_anim",
      frames:this.anims.generateFrameNumbers("eggu",{ start: 2, end: 3 }),
      frameRate:20,
      repeat:0
    });
    this.anims.create({
      key:"pinkwing_anim",
      frames:this.anims.generateFrameNumbers("pinkwing",{ start: 0, end: 1 }),
      frameRate:5,
      repeat:-1
    });
    this.anims.create({
      key:"pinkwing_death_anim",
      frames:this.anims.generateFrameNumbers("pinkwing",{ start: 2, end: 3 }),
      frameRate:10,
      repeat:0
    });
    this.anims.create({
      key:"unvert_anim",
      frames:this.anims.generateFrameNumbers("unvert",{ start: 0, end: 2 }),
      frameRate:5,
      repeat:-1
    });
    this.anims.create({
      key:"unvert_death_anim",
      frames:this.anims.generateFrameNumbers("unvert",{ start: 3, end: 4 }),
      frameRate:10,
      repeat:0
    });

    this.anims.create({
      key:"sword_anim",
      frames:this.anims.generateFrameNumbers("sword"),
      frameRate:1,
      repeat:1
    });
    this.music = this.sound.add("audio");
    this.music.loop = true;
    this.music.play();
    this.add.text(50,100,"SpryteQuest",{font:"75px Georgia",fill:"purple"});
    this.add.text(215,330,"Click to play",{font:"20px Georgia", fill:"purple"});
    this.add.image(75,280,"title_sword")

    this.input.on('pointerdown', function (pointer) {
        this.scene.start("playGame");
    }, this);



  }
}
