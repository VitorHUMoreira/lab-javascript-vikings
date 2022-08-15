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
