import Game from "./Game.js";
import Utils from "./Utils.js";


 async function loadJson(path) {

    alert("json en chargement...");

    let response = await fetch("./db.json");
    let data = await response.json();

    const game = new Game(data["ListHeroes"], data["ListEnemies"], data["ListLevels"]);
    game.start();

    if(game.replay()) {
        loadJson();
    } else {
        alert("End of the game...");
    }
}

loadJson();