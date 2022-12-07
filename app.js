let blocCouleur = document.getElementById("couleur");
let score = document.getElementById("score");
let reponses = [...document.getElementsByClassName("reponse")];

let rgbADeviner;
let compteurScore = 0;

const genererEntierPourRgb = () => {
    return Math.floor(Math.random() * 256);
};

const genererRgb = () => {
    let r = genererEntierPourRgb();
    let g = genererEntierPourRgb();
    let b = genererEntierPourRgb();

    return `rgb(${r},${g},${b})`;
};

const initialiser = () => {
    score.textContent = compteurScore;
    let reponseCorrecte = Math.floor(Math.random() * 4);

    reponses.forEach((rep) => (rep.textContent = genererRgb()));

    rgbADeviner = reponses[reponseCorrecte].textContent;

    blocCouleur.style.backgroundColor = rgbADeviner;
};

const verifierReponse = (e) => {
    let valeurCliquee = e.target.textContent;

    if (valeurCliquee != rgbADeviner) {
        window.alert(`Vous avez perdu ! La réponse était ${rgbADeviner}`);
        compteurScore = 0;
        return initialiser();
    }

    compteurScore++;
    initialiser();
};

reponses.forEach((rep) => {
    rep.addEventListener("click", verifierReponse);
});

initialiser();
