
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Drawing() {
    this.formes = []
    this.forme;

    this.getForms = function() {
        return this.formes;
    }
}

function Shape(color, thickness) {
    this.color = color;
    this.thickness = thickness;

    this.getColor = function() {
        return this.color;
    }

    this.getThickness = function() {
        return this.thickness;
    }
}

function Rectangle(initX, initY, width, height, thickness, color) {
    this.initX = initX;
    this.initY = initY;
    this.height = height;
    this.width = width;

    Shape.call(this, color, thickness)

    this.getInitX = function() {
        return this.initX;
    }

    this.getInitY = function() {
        return this.initY;
    }

    this.getHeight = function() {
        return this.height;
    }

    this.getWidth = function() {
        return this.width;
    }

}

function Line(initX, initY, finalX, finalY, thickness, color) {
    this.initX = initX;
    this.initY = initY;
    this.finalX = finalX;
    this.finalY = finalY;

    Shape.call(this, color, thickness)

    this.getInitX = function() {
        return this.initX;
    }

    this.getInitY = function() {
        return this.initY;
    }

    this.getFinalX = function() {
        return this.finalX;
    }

    this.getFinalY = function() {
        return this.finalY;
    }
}