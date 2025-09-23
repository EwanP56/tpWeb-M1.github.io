
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
  this.canvas = canvas;
  this.interactor = interactor;
  this.dragging = true;
  this.startX = 0;
  this.startY = 0;
  this.lastX = 0;
  this.lastY = 0;

	// Developper les 3 fonctions gérant les événements
  this.clicSouris = function(evt) {
    var mousePos = getMousePosition(canvas, evt);
    this.startX = mousePos.x;
    this.startY = mousePos.y;
    this.lastX = mousePos.x;
    this.lastY = mousePos.y;
  }.bind(this);

  this.deplacementSouris = function(evt) {
    if (this.dragging) {
      var mousePos = getMousePosition(canvas, evt);
      this.lastX = mousePos.x;
      this.lastY = mousePos.y;
      this.dragging = true;
    }
  }.bind(this);

  this.relacherSouris = function(evt) {
    var mousePos = getMousePosition(canvas, evt);
    this.lastX = mousePos.x;
    this.lastY = mousePos.y;
    this.dragging = false;
  }.bind(this);

	// Associer les fonctions précédentes aux évènements du canvas.
  canvas.addEventListener('mousedown', this.clicSouris, false);
  canvas.addEventListener('mousemove', this.deplacementSouris, false);
  canvas.addEventListener('mouseup', this.relacherSouris, false);
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



