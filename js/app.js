// Liste de joueurs
const listPlayers = [
    {
        name: "Seong Gi-hun",
        marbles: 10,
        loss: 3,
        gain: 1
    },
    {
        name: "Kang Sae-byeok",
        marbles: 15,
        loss: 2,
        gain: 2
    },
    {
        name: "Cho Sang-woo",
        marbles: 20,
        loss: 1,
        gain: 3
    }
];

// générer un chiffre aléatoire pour mes billes
function randomMarbles() {
    return Math.floor(Math.random() * 20) + 1;
}

// générer un chiffre aléatoire pour l'âge
function randomAge() {
    return Math.floor(Math.random() * (90 - 40) + 40);
}

// liste d'ennemies
const listEnemies = [
    { name: "Tao Huang", marbles: randomMarbles(), age: randomAge() }
    , { name: "Su He", marbles: randomMarbles(), age: randomAge() }
    , { name: "Tan Ju", marbles: randomMarbles(), age: randomAge() }
    , { name: "Shao Lin", marbles: randomMarbles(), age: randomAge() }
    , { name: "Xing Kang", marbles: randomMarbles(), age: randomAge() }
    , { name: "Jacky Chan", marbles: randomMarbles(), age: randomAge() }
    , { name: "Kang Liuxian", marbles: randomMarbles(), age: randomAge() }
    , { name: " Zhen Xiang ", marbles: randomMarbles(), age: randomAge() }
    , { name: "Ding Bao", marbles: randomMarbles(), age: randomAge() }
    , { name: "Zhong Lei", marbles: randomMarbles(), age: randomAge() }
    , { name: "Xie Cai", marbles: randomMarbles(), age: randomAge() }
    , { name: "Tsing Tsao", marbles: randomMarbles(), age: randomAge() }
    , { name: "Xénon Led", marbles: randomMarbles(), age: randomAge() }
    , { name: "Sushi Man", marbles: randomMarbles(), age: randomAge() }
    , { name: "Chirachi", marbles: randomMarbles(), age: randomAge() }
    , { name: "Changyijunquan Wuhanzhanxinya", marbles: randomMarbles(), age: randomAge() }
    , { name: "Sundong Xionghuo", marbles: randomMarbles(), age: randomAge() }
    , { name: "Li Tchi", marbles: randomMarbles(), age: randomAge() }
]
const levels = [['level1', 'level2', 'level3'], [4, 12, 18]];


//  *1
const LIST_BLOCK_HTML = document.querySelectorAll(".block");  // on nomme les constante en majuscule en js

// *2
const LEVELS =  document.querySelectorAll(".levels");
const HEROES =  document.querySelectorAll(".heroes");
const ENEMIES =  document.querySelectorAll(".enemies");
const ACTION = document.querySelectorAll("#action");



let hero;
let nbrEncounters;
let enemy;
let enemyIndex;

// *2
function handleDisplay(elemHTML, display) { elemHTML.style.display = display}

function updateHTML(elemHTML, content) { elemHTML.innerHTML = content}
// Capter l'évennement sur la class block (les images)

function selectLevels() {};

// gérer le nombre de rencontres suivant le niveau de difficulté sélectionné affiché à l'écran
handleDisplay(LEVELS, "none");
handleDisplay(HEROES, "flex")
updateHTML(ACTION, "Choisissez un ennemi à combattre")


function selectHero() {};

// choisir un héro, mettre à jour à l'écran le nom du héro, le nombre de billes restantes
handleDisplay(LEVELS, "flex");
handleDisplay(HEROES, "none")
updateHTML(ACTION, "Choisissez un niveau de difficulté")




function handleEncounter () {};


for (let i = 0; i < LIST_BLOCK_HTML.length; i++) {
    LIST_BLOCK_HTML[i].addEventListener("click", function () {

        let selectedClass = this.classList[1];
        if (selectedClass.startsWith("l")) { // levels
            selectLevels();
        } else if (selectedClass.startsWith("h")) { // hero
            selectHero()
        } else if (selectedClass.startsWith("e")) { // ennemies
            handleEncounter()
        }}
    )
};


