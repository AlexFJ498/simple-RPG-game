let player;

class Player{
    constructor(classType, health, mana, strength, agility, speed){
        this.classType = classType;
        this.health = health;
        this.mana = mana;
        this.strength = strength;
        this.agility = agility;
        this.speed = speed;
    }

    getClassType(){
        return this.classType;
    }

    getHealth(){
        return this.health;
    }

    getMana(){
        return this.mana;
    }

    getStrength(){
        return this.strength;
    }

    getAgility(){
        return this.agility;
    }

    getSpeed(){
        return this.speed;
    }

    setHealth(health){
        this.health = health;
    }

    attackValues(){
        let calcBaseDamage;

        // Damage
        if(this.mana > 0){
            calcBaseDamage = this.getStrength() * this.getMana() / 1000;
        } else{
            calcBaseDamage = this.getStrength() * this.getAgility() / 1000;
        }

        let offsetDamage = Math.floor(Math.random() * Math.floor(10));
        let calcOutputDamage = calcBaseDamage + offsetDamage;

        // Number of hits
        let numberOfHits = Math.floor(Math.random() * Math.floor(this.getAgility() / 10) / 2) + 1;
        let attackValues = [calcOutputDamage, numberOfHits];
        
        return attackValues;       
    }

    attack(){
        let playerAttackValues = player.attackValues();
        let totalDamage = playerAttackValues[0] * playerAttackValues[1];
        enemy.setHealth(enemy.getHealth() - totalDamage);

        return "Has infligido " + playerAttackValues[0] + " puntos de daño " + playerAttackValues[1] + " veces.";
    }
}