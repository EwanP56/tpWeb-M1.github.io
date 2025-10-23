
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
		else if(this.currEditingMode === editingMode.rect) {
			shape = new Rectangle(dnd.initX, dnd.initY, dnd.finalX - dnd.initX, dnd.finalY - dnd.initY, this.currLineWidth, this.currColour);
		} else if (this.currEditingMode === editingMode.ellipse) {
            var cx = (dnd.initX + dnd.finalX) / 2;
            var cy = (dnd.initY + dnd.finalY) / 2;
            var rx = Math.abs(dnd.finalX - dnd.initX) / 2;
            var ry = Math.abs(dnd.finalY - dnd.initY) / 2;
            shape = new Ellipse(cx, cy, rx, ry, this.currLineWidth, this.currColour);
        }
		
		shape.paint(ctx);
		
	}

	this.onInteractionEnd = function (dnd) {

		if(this.currEditingMode === editingMode.line) {
			shape = new Line(dnd.initX, dnd.initY, dnd.finalX, dnd.finalY, this.currLineWidth, this.currColour);
		}
		else if(this.currEditingMode === editingMode.rect) {
			shape = new Rectangle(dnd.initX, dnd.initY, dnd.finalX - dnd.initX, dnd.finalY - dnd.initY, this.currLineWidth, this.currColour);
		}
		else if(this.currEditingMode === editingMode.ellipse) {
            var cx = (dnd.initX + dnd.finalX) / 2;
            var cy = (dnd.initY + dnd.finalY) / 2;
            var rx = Math.abs(dnd.finalX - dnd.initX) / 2;
            var ry = Math.abs(dnd.finalY - dnd.initY) / 2;
            shape = new Ellipse(cx, cy, rx, ry, this.currLineWidth, this.currColour);
        }

		drawing.formes.push(shape)

		// Met à jour la liste des formes dans la vue
        if (typeof updateShapeList === 'function') {
          updateShapeList(drawing, ctx, canvas);
        }
	}


	var rectangleButton = document.getElementById("butRect");
	var lineButton = document.getElementById("butLine");
	var ellipseButton = document.getElementById("butEllipse");
	var widthInput = document.getElementById("spinnerWidth");
	var colorInput = document.getElementById("colour");
	
	rectangleButton.addEventListener("click", () => {
		this.currEditingMode = editingMode.rect
	})

	lineButton.addEventListener("click", () => {
		this.currEditingMode = editingMode.line
	})

	ellipseButton.addEventListener("click", () => {
		this.currEditingMode = editingMode.ellipse
	})

	widthInput.addEventListener("change", () => {
		this.currLineWidth = widthInput.value
	})

	colorInput.addEventListener("change", () => {
		this.currColour = colorInput.value
	})
};




