/**
 * Class => Item(name)
 * -----------------------------
 * Creates an item.
 *
 * @name Item
 * @param {string} name     The item's name.
 * @property {string} name
 */
 class Item {
  constructor (name){
    this._name = name;
  }
  get name(){
    return this._name;
  }
}

/**
 * Class => Weapon(name, damage)
 * -----------------------------
 * Creates a weapon item.
 * Weapon items can be equipped for use in battle.
 *
 * The Weapon class constructor will call
 *   the super class (Item) constructor
 *   while passing in the 1 Item constructor param
 *
 * @name Weapon
 * @param {string} name     The weapon's name.
 * @param {number} damage   The weapon's damage.
 * @property {number} damage
 */
 class Weapon extends Item {
  constructor (name, damage){
    super(name);
    this._damage = damage;
  }
  get damage(){
    return this._damage;
  }

}


/**
 * Weapon Extends Item Class
 * -----------------------------
 */



/**
 * Class => Food(name, energy)
 * -----------------------------
 * Creates a food item.
 * Food items give energy, restoring health to the player.
 *
 * The Food class constructor will call
 *   the super class (Item) constructor
 *   while passing in the 1 Item constructor param
 *
 * @name Food
 * @param {string} name       The food's name.
 * @param {number} energy     The energy the food provides.
 * @property {number} energy
 */
 class Food extends Item {
  constructor (name, energy){
    super(name);
    this._energy = energy;
  }
  get energy(){
    return this._energy;
  }
}


/**
 * Food Extends Item Class
 * -----------------------------
 */



/**
 * Class => Player(name, health, strength, speed)
 * -----------------------------
 * Creates a player in a zombie-infested world.
 *
 * @name Player
 * @param {string} name                    The player's name.
 * @param {number} health                  The player's health.
 * @param {number} strength                The player's strength.
 * @param {number} speed                   The player's speed.
 * @private {array} pack                   Default value should be empty.
 * @private {number} maxHealth             Default value should be set to `health`.
 * @property {string} name
 * @property {number} health
 * @property {number} strength
 * @property {number} speed
 * @property {boolean} isAlive             Default value should be `true`.
 * @property {Weapon/boolean} equipped     Default value should be `false`.
 * @property {method} getPack              Returns private variable `pack`.
 * @property {method} getMaxHealth         Returns private variable `maxHealth`.
 */
 class Player {
  constructor (name, health, strength, speed){
    this._pack = [];
    this._maxHealth = health;
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.speed = speed;
    this.isAlive = true;
    this.equipped = false;

  }

  getPack(){
    var pack = this._pack;
    return pack;
  }

  getMaxHealth(){
    return this._maxHealth;
  }

  checkPack(){
   var check= this.getPack();
   console.log("items"+ check);
 }



 takeItem(item){


  if(this._pack.length>=3){
    console.log("pack is full");

    return false;
  }else{
    this._pack.push(item);
    return true;
  }
}




discardItem(item){
  var itemPosition= this.getPack().indexOf(item);
  if(itemPosition === -1){
    console.log("nothing was discarded");
    return false;
  }else{
    var removeItem = this.getPack().splice(itemPosition,1);
    console.log("item was discarded");
    return true;
  }
}

/**
 * Player Class Method => equip(itemToEquip)
 * -----------------------------
 * Player equips a weapon item.
 *
 * Player can only equip Weapon instances.
 * Player can only equip weapon items from their pack.
 *
 * If the player already has a weapon equipped (the equipped property
 *   is set to an Item), find the itemToEquip in the pack and replace
 *   it with the currently equipped item.  Then set the equipped property
 *   to the itemToEquip.
 * However, if the player doesn't already have a weapon equipped, simply
 *   equip that item and remove it from the pack.
 * You should be able to invoke this function on a Player instance.
 *
 * @name equip
 * @param {Weapon} itemToEquip  The weapon item to equip.
 */

 equip(itemToEquip){
  var itemPosition = this.getPack().indexOf(itemToEquip);
  if(this.equipped !== false){
    this._pack[ itemPosition ] = this.equipped;
    this.equipped = itemToEquip;
  }else if(this._pack.indexOf(itemToEquip) === -1 || itemToEquip instanceof Weapon === false){
    return false;
  }else {
    this.equipped = itemToEquip;
    this.discardItem(itemToEquip);
  }
}



eat(itemToEat){

  if(this._pack.indexOf(itemToEat) !== -1 && itemToEat instanceof Food === true){

    this.health += itemToEat.energy;
    this.discardItem( itemToEat );
  }

  if (this.health > this.getMaxHealth()) {
    this.health = this.getMaxHealth();
  }
}




useItem(item){
  if (item instanceof Food === true ){
    this.eat(item);
    this.discardItem( item );
  } else if(item instanceof Weapon === true ){
    this.equip(item);
  }


}

equippedWith(){
if(this.equipped === false){
   console.log("You have nothing");
  return false;
}else{
  console.log(this.name + "has equipped with" + this.equipped.name);
  return this.equipped.name;
}
}

}




/**
 * Class => Zombie(health, strength, speed)
 * -----------------------------
 * Creates a normal zombie.
 *
 * @name Zombie
 * @param {number} health           The zombie's health.
 * @param {number} strength         The zombie's strength.
 * @param {number} speed            The zombie's speed.
 * @private {number} maxHealth      Default value should be set to `health`.
 * @property {number} health
 * @property {number} strength
 * @property {number} speed
 * @property {boolean} isAlive      Default value should be `true`.
 */
 class Zombie {
  constructor (health, strength, speed){
    this._maxHealth = health;
    this.health = health;
    this.strength = strength;
    this.speed = speed;
    this.isAlive = true;

  }
}

/**
 * Class => FastZombie(health, strength, speed)
 * -----------------------------
 * Creates a fast zombie.
 *
 * The FastZombie class constructor will call
 *   the super class (Zombie) constructor
 *   while passing in the 3 Zombie constructor params
 *
 * @name FastZombie
 * @param {number} health           The zombie's health.
 * @param {number} strength         The zombie's strength.
 * @param {number} speed            The zombie's speed.
 */
 class FastZombie extends Zombie{
  constructor (health, strength, speed){
    super(health, strength, speed);

  }
}


/**
 * FastZombie Extends Zombie Class
 * -----------------------------
 */



/**
 * Class => StrongZombie(health, strength, speed)
 * -----------------------------
 * Creates a strong zombie.
 *
 * The StrongZombie class constructor will call
 *   the super class (Zombie) constructor
 *   while passing in the 3 Zombie constructor params
 *
 * @name StrongZombie
 * @param {number} health           The zombie's health.
 * @param {number} strength         The zombie's strength.
 * @param {number} speed            The zombie's speed.
 */
 class StrongZombie extends Zombie{
  constructor (health, strength, speed){
    super(health, strength, speed);

  }
}

/**
 * StrongZombie Extends Zombie Class
 * -----------------------------
 */



/**
 * Class => RangedZombie(health, strength, speed)
 * -----------------------------
 * Creates a ranged zombie.
 *
 * The RangedZombie class constructor will call
 *   the super class (Zombie) constructor
 *   while passing in the 3 Zombie constructor params
 *
 * @name RangedZombie
 * @param {number} health           The zombie's health.
 * @param {number} strength         The zombie's strength.
 * @param {number} speed            The zombie's speed.
 */

 class RangedZombie extends Zombie{
  constructor (health, strength, speed){
    super(health, strength, speed);

  }
}
/**
 * RangedZombie Extends Zombie Class
 * -----------------------------
 */



/**
 * Class => ExplodingZombie(health, strength, speed)
 * -----------------------------
 * Creates an exploding zombie.
 *
 * The ExplodingZombie class constructor will call
 *   the super class (Zombie) constructor
 *   while passing in the 3 Zombie constructor params
 *
 * @name ExplodingZombie
 * @param {number} health           The zombie's health.
 * @param {number} strength         The zombie's strength.
 * @param {number} speed            The zombie's speed.
 */
 class ExplodingZombie extends Zombie{
  constructor (health, strength, speed){
    super(health, strength, speed);

  }
}

/**
 * ExplodingZombie Extends Zombie Class
 * -----------------------------
 */




/**
 * Sample run.
 * Feel free to edit this and check your game logic.
 */
 function runGame() {
  /*  var player = new Player("Joan", 500, 30, 70);*/
  // var zombie = new Zombie(40, 50, 20);
  // var charger = new FastZombie(175, 25, 60);
  // var tank = new StrongZombie(250, 100, 15);
  // var spitter = new RangedZombie(150, 20, 20);
  // var boomer = new ExplodingZombie(50, 15, 10);

  // var shovel = new Weapon("shovel", 15);
  // var sandwich = new Food("sandwich", 30);
  // var chainsaw = new Weapon("chainsaw", 25);

  // player.takeItem(shovel);
  // player.takeItem(sandwich);
  // player.takeItem(chainsaw);
  // player.discardItem(new Weapon("scythe", 21));
  // player.discardItem(shovel);
  // player.checkPack();
  // player.takeItem(shovel);
  // player.checkPack();

  // player.equippedWith();
  // player.useItem(chainsaw);
  // player.equippedWith();
  // player.checkPack();

  // player.useItem(shovel);
  // player.equippedWith();
  // player.checkPack();

  // player.health = 487;
  // console.log("Before health: " + player.health);
  // player.useItem(sandwich);
  // console.log("After health: " + player.health);
  // player.checkPack();
}
