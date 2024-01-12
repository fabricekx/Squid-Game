class Utils {

    static randomNumber(min, max) {

    }

    static userInput(msg, min, max) {

        while(true) {
    
            let answer = prompt(msg);
    
            if(isNaN(answer)) {
                alert("Veuillez rentrer un chiffre entier !");
                continue;
            }
    
            if(answer >= min && answer <= max) {
                return answer;
            } else {
                alert("Veuillez entre une valeur comprise entre " + min + " et " + max);
            }
    
        }


    }

}

export default Utils;