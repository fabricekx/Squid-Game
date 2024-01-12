import Hero from "./Hero.js";
import Utils from "./Utils.js";
import Enemy from "./enemy.js";

class Game {

    constructor(listHeroes, listEnemies, listLevels) {
        this.listHeroes = this.createHeroes(listHeroes);
        this.listEnemies = this.createEnemies(listEnemies);
        this.hero = {};
        this.listLevels = listLevels;
        this.nbrEncounter;
    }

    createHeroes(listHeroes) {

        let listObjHeroes = [];

        for (let i = 0; i < listHeroes.length; i++) {
            listObjHeroes.push(new Hero(listHeroes[i].name, listHeroes[i].marbles, listHeroes[i].loss, listHeroes[i].gain));
        }

        return listObjHeroes;

    }

    createEnemies(listEnemies) {
        
        let listObjEnemies = [];

        for (let i = 0; i < listEnemies.length; i++) {
            listObjEnemies.push(new Enemy(listEnemies[i].name, listEnemies[i].marbles, listEnemies[i].age));
        }

        return listObjEnemies;

    }

    selectHero() {

        alert("selection du héro...");
        this.hero = this.listHeroes[Utils.userInput("Choisissez votre héro > (0) Seong Gi-hun, (1) Sae-byeok, (2) Sang-woo", 0, 2)];
        this.hero.sePresenter();

    }

    selectLevel() {
        alert("selection du niveau...");

        let levelIndex = Utils.userInput("Choisissez votre niveau de difficulté > (0) Facile, (1) Difficile, (2) Impossible", 0, 2);
        this.nbrEncounter = this.listLevels[1][levelIndex];

        alert("Vous avez choisis le niveau " + this.listLevels[0][levelIndex] + ", vous devez affronter " + this.nbrEncounter + " ennemies");

        
    }

    startFights() {

        alert("Début des combats...");

        while(this.hero.marbles > 0 && this.nbrEncounter > 0) {
    
            let randomEnemyIndex = Math.floor(Math.random() * (this.listEnemies.length -1));
            let enemy = this.listEnemies[randomEnemyIndex];
        
            alert("Vous affrontez " + enemy.name + ", bon courage pour le combat !");
        
            this.nbrEncounter--;
        
            if(enemy.age >= 70) {
        
                let cheat = this.hero.cheat();
        
                if(cheat) {
        
                    this.hero.marbles += enemy.marbles;
                    this.listEnemies.splice(randomEnemyIndex, 1);
                    alert("Inscassible petite fouine, vous remportez automatiquement " + enemy.marbles + " billes et votre ennemi est éliminé");
                    continue;
                } else {
                    alert("Vous avez choisi de rester loyal, bonne chance pour cette rencontre");
                }
        
            }
        
            let choiceNumber = this.hero.chooseOddOrEven();
        
            this.handleEncounter(enemy, choiceNumber, randomEnemyIndex);
        
        
        }

        this.endGame();

    }

    handleEncounter(enemy, choiceNumber, randomEnemyIndex) {

        // si le user dit pair et que le chiffre est pair => gagné
        // si le user dit impair et que le chiffre est impair => gagné
        // sinon c'est perdu
        if((choiceNumber === 0 && enemy.marbles % 2 === 0) || (choiceNumber === 1 && enemy.marbles % 2 != 0)) {
            this.hero.marbles += enemy.marbles + this.hero.bonus;
            this.listEnemies.splice(randomEnemyIndex, 1);
            alert("Bravo, vous avez vaincu cet ennemi puisqu'il avait " + enemy.marbles + " billes ! il vous reste " + this.hero.marbles + " billes dans vos mains et " + level.nbrEncounters + " ennemis à affronter !");
        } else {
            this.hero.marbles -= (enemy.marbles + this.hero.malus);
            alert("HAHAHAHA, vous avez perdu cette rencontre puisqu'il avait " + enemy.marbles + " il vous reste " + this.hero.marbles + " billes dans vos mains et " + this.nbrEncounter + " ennemis à affronter !");
        }

    }

    endGame() {

        alert("Fin de la partie...");

        if(this.hero.marbles > 0) {
            alert("Félicitations, vous avez remportez le jeu, vous gagnez 46,7 milliards de Won sud corréen !");
        } else {
            alert("See you in Hell you bastard !");
        }
    
    }

    replay() {
        return confirm("Veux-tu rejouer la partie?");
    }

    start() {

        alert("Démarrage du Jeu...");

        this.selectHero();
        this.selectLevel();
        this.startFights();
    }


}

export default Game;