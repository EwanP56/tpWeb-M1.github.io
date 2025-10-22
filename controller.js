
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd

	this.onInteractionStart = function (dnd) {
	}

	this.onInteractionUpdate = function (dnd) {
		

		drawing.paint(ctx, canvas);

		var shape;
		if(this.currEditingMode === editingMode.line) {
			shape = new Line(dnd.initX, dnd.initY, dnd.finalX, dnd.finalY, this.currLineWidth, this.currColour);
		}
		else {
			shape = new Rectangle(dnd.initX, dnd.initY, dnd.finalX - dnd.initX, dnd.finalY - dnd.initY, this.currLineWidth, this.currColour);
		}
		
		shape.paint(ctx);
		
	}

	this.onInteractionEnd = function (dnd) {

		if(this.currEditingMode === editingMode.line) {
			shape = new Line(dnd.initX, dnd.initY, dnd.finalX, dnd.finalY, this.currLineWidth, this.currColour);
		}
		else {
			shape = new Rectangle(dnd.initX, dnd.initY, dnd.finalX - dnd.initX, dnd.finalY - dnd.initY, this.currLineWidth, this.currColour);
		}
		
		drawing.formes.push(shape)

		// Met à jour la liste des formes dans la vue
        if (typeof updateShapeList === 'function') {
          updateShapeList(drawing, ctx, canvas);
        }
	}


	var rectangleButton = document.getElementById("butRect");
	var lineButton = document.getElementById("butLine");
	var widthInput = document.getElementById("spinnerWidth");
	var colorInput = document.getElementById("colour");
	
	rectangleButton.addEventListener("click", () => {
		this.currEditingMode = editingMode.rect
	})

	lineButton.addEventListener("click", () => {
		this.currEditingMode = editingMode.line
	})

	widthInput.addEventListener("change", () => {
		this.currLineWidth = widthInput.value
	})

	colorInput.addEventListener("change", () => {
		this.currColour = colorInput.value
	})
};




