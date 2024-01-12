import Character from "./Character.js";

class Enemy extends Character{

    constructor(name, marbles, age) {
        super(name, marbles);
        this.age = age;
    }

    toString() {

    }

}

export default Enemy;