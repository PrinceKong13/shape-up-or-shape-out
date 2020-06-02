let squareBtn = document.getElementById("squareBtn");
let circleBtn = document.getElementById("circleBtn");
let rectangleBtn = document.getElementById("rectangleBtn");
let triangleBtn = document.getElementById("triangleBtn");
let shapeDiv = document.getElementById("shapeDiv");
const MAX = 570;

class Shape {
  constructor(type, width, height) {
    this.type = type;
    this.width = width;
    this.height = height;
    this.reduceToMax();
  }
  
  draw() {
    this.div = document.createElement("div");
    this.div.classList.add(this.type);
    this.div.style.height = `${this.height}px`;
    this.div.style.width = `${this.width}px`;
    let maxHeight = document.getElementById("shapeDiv").offsetHeight - this.height;
    let maxWidth = document.getElementById("shapeDiv").offsetWidth - this.width;
    shapeDiv.appendChild(this.div);
    this.div.style.left = `${((Math.random() * maxWidth))}px`;
    this.div.style.top = `${(Math.random() * maxHeight)}px`;
  }

  reduceToMax() {
    if(this.width || this.height == MAX) {
      this.width = MAX;
      this.height = MAX;
    }
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
    this.div = document.createElement("div");
    this.div.classList.add(this.type);
    this.div.style.borderBottomWidth = `${this.width}px`;
    this.div.style.borderRightWidth = `${this.height}px`;
    this.div.style.borderLeftWidth = `${this.height}px`;
    let maxHeight = document.getElementById("shapeDiv").offsetHeight - this.height;
    let maxWidth = document.getElementById("shapeDiv").offsetWidth - this.width;
    shapeDiv.appendChild(this.div);
    this.div.style.left = `${((Math.random() * maxWidth))}px`;
    this.div.style.top = `${(Math.random() * maxHeight)}px`;
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

function getRandomX() {
  return Math.floor(Math.random() * maxWidth);
}

function getRandomY() {
  return Math.floor(Math.random() * maxHeight);
}