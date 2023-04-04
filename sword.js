class Sword extends Phaser.GameObjects.Sprite{
  //var instance;
  constructor(scene){

    var x=scene.player.x;
    var y=scene.player.y;

    super(scene,x,y,"sword");
    scene.weapons.add(this);
  }
}
