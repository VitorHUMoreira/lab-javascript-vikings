// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage;
    // super.receiveDamage(damage)
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    // super.receiveDamage(damage)
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  vikingArmy = [];
  saxonArmy = [];

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    let indexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let randomSaxon = this.saxonArmy[indexSaxon];

    let indexViking = Math.floor(Math.random() * this.vikingArmy.length);
    let randomViking = this.vikingArmy[indexViking];

    let result = randomSaxon.receiveDamage(randomViking.attack());

    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(indexSaxon, 1);
    }

    return result;
  }

  saxonAttack() {
    let indexViking = Math.floor(Math.random() * this.vikingArmy.length);
    let randomViking = this.vikingArmy[indexViking];

    let indexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let randomSaxon = this.saxonArmy[indexSaxon];

    let result = randomViking.receiveDamage(randomSaxon.attack());

    if (randomViking.health <= 0) {
      this.vikingArmy.splice(indexViking, 1);
    }

    return result;
  }
  showStatus() {
    if (!this.saxonArmy.length) {
      return `Vikings have won the war of the century!`;
    }
    if (!this.vikingArmy.length) {
      return `Saxons have fought for their lives and survived another day...`;
    }
    if (this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1) {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }
}

const war = new War();

const saxon1 = new Saxon(100, 50);
const saxon2 = new Saxon(100, 50);
const saxon3 = new Saxon(100, 50);
const saxon4 = new Saxon(100, 50);
const saxon5 = new Saxon(100, 50);

const viking1 = new Viking("Vikin1", 100, 50);
const viking2 = new Viking("Vikin2", 100, 50);
const viking3 = new Viking("Vikin3", 100, 50);
const viking4 = new Viking("Vikin4", 100, 50);
const viking5 = new Viking("Vikin5", 100, 50);

war.addSaxon(saxon1);
war.addSaxon(saxon2);
war.addSaxon(saxon3);
war.addSaxon(saxon4);
war.addSaxon(saxon5);

war.addViking(viking1);
war.addViking(viking2);
war.addViking(viking3);
war.addViking(viking4);
war.addViking(viking5);

war.saxonAttack();
war.vikingAttack();
war.saxonAttack();
war.vikingAttack();
war.saxonAttack();
war.vikingAttack();
war.saxonAttack();
war.vikingAttack();
war.saxonAttack();
war.vikingAttack();
war.saxonAttack();
war.vikingAttack();
war.saxonAttack();
war.vikingAttack();
war.saxonAttack();
war.vikingAttack();
war.saxonAttack();
war.vikingAttack();
war.saxonAttack();
war.vikingAttack();
war.saxonAttack();
war.vikingAttack();
war.saxonAttack();
war.vikingAttack();
war.saxonAttack();
war.vikingAttack();
war.saxonAttack();
war.vikingAttack();
war.saxonAttack();

console.log(war.showStatus());
