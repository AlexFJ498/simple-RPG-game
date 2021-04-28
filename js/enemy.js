let enemy;

class Enemy{
    constructor(enemyType, health, mana, strength, agility, speed){
        this.enemyType = enemyType;
        this.health = health;
        this.mana = mana;
        this.strength = strength;
        this.agility = agility;
        this.speed = speed;
    }

    getEnemyType(){
        return this.enemyType;
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
        let enemyAttackValues = enemy.attackValues();
        let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
        player.setHealth(player.getHealth() - totalDamage);
        return "El enemigo ha infligido " + enemyAttackValues[0] + " puntos de daño " + enemyAttackValues[1] + " veces.";
    }
}