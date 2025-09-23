// Implémenter ici les 4 functiones du modèle.
// N'oubliez pas l'héritage !

//Drwaning se composant de Formes
function Drawing() {
    this.formesArray = new Map();
}

function Formes(couleur, epaisseur, ) {
    this.couleur = couleur;
    this.epaisseur = epaisseur;
    //Utilisation de Array
    this.listFormes = new Array();
}

function Rectangle(coorHautGaucheX, coorHautGaucheY, largeur, hauteur, epaisseur, couleur) {
    Formes.call(this, couleur, epaisseur);
    this.coorHautGaucheX = coorHautGaucheX;
    this.coorHautGaucheY = coorHautGaucheY;
    this.largeur = largeur;
    this.hauteur = hauteur;
}

function Line(coorPointA, coorPointB, epaisseur, couleur) {
    Formes.call(this, couleur, epaisseur);
    this.coors = [coorPointA, coorPointB];
}

/*
function Femme(poids, taille) {
  Humain.call(this, poids, taille);
};
Femme.prototype = new Humain();
*/