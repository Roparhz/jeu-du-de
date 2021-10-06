let dé = Math.floor(Math.random() * 6 + 1);
let tentative = 0;

document
    .getElementById("guessField")
    .addEventListener("change", function (e) {
        let reponseJoueur = e.target.value;
        console.log(reponseJoueur);
        tentative++;
        console.log(tentative);
        console.log(dé);
        comparaison(reponseJoueur,dé);
    });

function mesEssaie() {
    document
        .getElementById("result")
        .innerHTML = tentative + "tentative(s)";
}

function comparaison(reponseJoueur, dé) {

    if (dé > reponseJoueur) {
        document
            .getElementById("reponse")
            .innerHTML = "Votre nombre est trop petit";
            console.log("trop petit");
    } else if (dé < reponseJoueur) {
        document
            .getElementById("reponse")
            .innerHTML = "Votre nombre est trop grand";
            console.log("trop grand");
    } else {
        document
            .getElementById("reponse")
            .innerHTML = "Bravo! Vous avez deviné en " + tentative+" "+"coups";
            console.log("egale");
    }
}
/*if ( window.addEventListener ) {
    var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";
    window.addEventListener("keydown", function(e){
    kkeys.push( e.keyCode );
    if ( kkeys.toString().indexOf( konami ) >= 0 ) {
        alert("Nous sommes les Anonymous!!");
        document.querySelector(".nimp").classList.add(".destroy");
    }
    }, true);
    }*/