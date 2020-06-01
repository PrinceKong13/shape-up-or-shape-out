let squareBtn = document.getElementById("squareBtn");
let circleBtn = document.getElementById("circleBtn");
let rectangleBtn = document.getElementById("rectangleBtn");
let triangleBtn = document.getElementById("triangleBtn");
let shapeDiv = document.getElementById("shapeDiv");
const MAX = 600;

class Shape {
  constructor(type, width, height) {
    this.type = type;
    this.width = width;
    this.height = height;
  }

  draw() {
    let newShape = document.createElement("div");
    newShape.classList.add(this.type);
    newShape.style.height = `${this.height}px`;
    newShape.style.width = `${this.width}px`;
    newShape.style.right = `${Math.round(Math.random * MAX)}px`;
    newShape.style.left = `${Math.round(Math.random * MAX)}px`;
    newShape.style.top = `${Math.round(Math.random * MAX)}px`;
    newShape.style.bottom = `${Math.round(Math.random * MAX)}px`;
    shapeDiv.appendChild(newShape);
  }
}

class Rectangle extends Shape {
  constructor(type, width = 0, height = 0) {
    super(type, width, height);
    this.draw();
  }
}

class Square extends Rectangle {
  constructor(type, width, height) {
    super(type, width, height);
    this.draw();
  }
}

class Circle extends Shape {
  constructor(type, width, height) {
    super(type, width, height);
    this.draw();
  }
}

class Triangle extends Shape {
  constructor(type, width, height) {
    super(type, width, height);
    this.draw();
  }

  draw() {
    let newShape = document.createElement("div");
    newShape.classList.add(this.type);
    newShape.style.borderBottomWidth = `${this.width}px`;
    newShape.style.borderRightWidth = `${this.height}px`;
    newShape.style.borderLeftWidth = `${this.height}px`;
    shapeDiv.appendChild(newShape);
  }
}

squareBtn.addEventListener("click", () => {
  new Square(
    "square",
    document.querySelector("#squareWidth").value,
    document.querySelector("#squareWidth").value
  );
});

circleBtn.addEventListener("click", () => {
  new Circle(
    "circle",
    document.querySelector("#circleRadius").value * 2,
    document.querySelector("#circleRadius").value * 2
  );
});

rectangleBtn.addEventListener("click", () => {
  new Rectangle(
    "rectangle",
    document.querySelector("#rectangleWidth").value,
    document.querySelector("#rectangleHeight").value
  );
});

triangleBtn.addEventListener("click", () => {
  new Triangle(
    "triangle",
    document.querySelector("#triangleHeight").value,
    document.querySelector("#triangleHeight").value / 2
  );
});
