// Exo 98
let compteur = document.getElementById('interval-div');
let variableChiffre = 50;

function tiniTime (){
    let timeOut = setTimeout(function (){
        if (variableChiffre <= 60) {
            compteur.innerHTML = variableChiffre;
            variableChiffre++;
            tiniTime();
        }
    }, 1000);

    document.getElementById('interval-stop').addEventListener('click', function (){
        clearTimeout(timeOut);
    })
}

//Start:
document.getElementById('interval-start').addEventListener('click', tiniTime);
