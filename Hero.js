import Character from "./Character.js";

class Hero extends Character {

    constructor(name, marbles, malus, bonus) {
        super(name, marbles);
        this.malus = malus;
        this.bonus = bonus;
    }

    // permet au hero de choisir si pair ou impair
    chooseOddOrEven() {
        return Utils.userInput("Votre ennemi a-t-il un nombr de billes pair ou impair? > (0) pair, (1) impair", 0, 1);
    }

    // permet au hero de choisir si il veut tricher ou pas
    cheat() {
        return confirm("Votre ennemi a " + enemy.age + " ans, souhaitez profiter de lui en trichant?");
    }

    sePresenter() {
        alert(`Vous avez choisis de combattre avec ${this.name}, vous commencez le jeu avec ${this.marbles} billes, un malus de ${this.malus} billes et un bonus de ${this.bonus} billes`);
    }

    toString() {

    }


}

export default Hero;