
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

Rectangle.prototype.paint = function (ctx) {
  //TODO Manager color
  ctx.beginPath();
  console.log()
  ctx.rect(this.getInitX(), this.getInitY(), this.getWidth(), this.getHeight());
  ctx.strokeStyle = this.getColor();
  ctx.lineWidth = this.getThickness();
  ctx.stroke();
};

Line.prototype.paint = function (ctx) {
  //TODO Manager color
  ctx.beginPath();
  ctx.strokeStyle = this.getColor();
  ctx.lineWidth = this.getThickness();
  ctx.moveTo(this.getInitX(), this.getInitY());
  ctx.lineTo(this.getFinalX(), this.getFinalY());
  ctx.stroke();
};

Drawing.prototype.paint = function (ctx, canvas) {
  ctx.fillStyle = '#F0F0F0'; // set canvas' background color
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  this.getForms().forEach(function (eltDuTableau) {
    // now fill the canvas
    eltDuTableau.paint(ctx);
  });

  Shape.prototype.paint = function (ctx) {

  }
};

function updateShapeList(drawing, ctx, canvas) {
  const shapeList = document.getElementById("shapeList");
  shapeList.innerHTML = '';

  drawing.getForms().forEach(function (element, index) {
    const li = document.createElement('li');

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'btn btn-default';
    btn.style.marginRight = '8px';

    const icon = document.createElement('span');
    icon.className = 'glyphicon glyphicon-remove-sign';

    btn.appendChild(icon);
    btn.addEventListener('click', function () {
      drawing.formes.splice(index, 1);
      drawing.paint(ctx, canvas); 
      updateShapeList(drawing, ctx, canvas);
    });

    li.appendChild(btn);

    let labelText = element && element.constructor && element.constructor.name
      ? element.constructor.name
      : String(element);

    if (labelText === 'Line') {
      labelText = `Line: (${element.getInitX()}, ${element.getInitY()}) → (${element.getFinalX()}, ${element.getFinalY()})`;
    } else if (labelText === 'Rectangle') {
      labelText = `Rectangle: (${element.getInitX()}, ${element.getInitY()}) ${element.getWidth()}x${element.getHeight()}`;
    }

    li.appendChild(document.createTextNode(labelText));

    shapeList.appendChild(li);
  });
}