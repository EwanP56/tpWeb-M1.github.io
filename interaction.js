
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
  // Définir ici les attributs de la 'classe'

  this.initX = 0;
  this.initY = 0;
  this.finalX = 0;
  this.finalY = 0;

  this.interactor = interactor;
  this.canvas = canvas;

  this.isDraging = false

  // Developper les 3 fonctions gérant les événements

  this.onClick = function (evt) {

    
    const { x, y } = getMousePosition(canvas, evt);
    
    this.initX = x;
    this.initY = y;
    
    this.isDraging = true;
    
    console.log(`Pose de base : ${x} ${y}`)
    
    this.interactor.onInteractionStart(this);

  }.bind(this)

  this.move = function (evt) {
    
    if(!this.isDraging) return;
    
    const { x, y } = getMousePosition(canvas, evt);
    
    this.finalX = x;
    this.finalY = y;

    this.interactor.onInteractionUpdate(this);
    console.log(x, y)
    

  }.bind(this)

  this.drop = function (evt) {
    
    const { x, y } = getMousePosition(canvas, evt);
    
    this.finalX = x;
    this.finalY = y;
    
    this.isDraging = false;
    
    console.log(`Pose finale : ${x} ${y}`)

    this.interactor.onInteractionEnd(this);

  }.bind(this)

  // Associer les fonctions précédentes aux évènements du canvas.
  canvas.addEventListener("mousedown", this.onClick, false)
  canvas.addEventListener("mousemove", this.move, false)
  canvas.addEventListener("mouseup", this.drop, false)
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



