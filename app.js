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
    this.radius = "-";
    this.perimeter = this.height * 2 + this.width * 2;
    this.area = this.height * this.width;
    this.reduceToMax();
    this.draw();
  }

  draw() {
    this.div = document.createElement("div");
    this.div.classList.add(this.type);
    this.div.style.height = `${this.height}px`;
    this.div.style.width = `${this.width}px`;
    let maxHeight = document.getElementById("shapeDiv").offsetHeight - this.height;
    let maxWidth = document.getElementById("shapeDiv").offsetWidth - this.width;
    shapeDiv.appendChild(this.div);
    this.div.style.left = `${Math.random() * maxWidth}px`;
    this.div.style.top = `${Math.random() * maxHeight}px`;
    this.div.addEventListener("click", () => this.getInfo());
    this.div.addEventListener("dblclick", () => this.remove());
  }

  reduceToMax() {
    if (this.width >= MAX) {
      this.width = MAX;
    }
    if (this.height >= MAX) {
      this.height = MAX;
    }
  }

  getInfo() {
    let infoDiv = document.getElementById("infoDiv");
    infoDiv.innerHTML = `Shape Info: <br> 
     Shape: ${this.type} <br>
     Width: ${this.width} <br>
     Height: ${this.height} <br>
     Radius: ${this.radius} <br>
     Area: ${this.area} <br>
     Perimeter: ${this.perimeter}`;
  }

  remove() {
    event.target.remove();
    let infoDiv = document.getElementById("infoDiv");
    infoDiv.innerHTML = "";
  }
}

class Rectangle extends Shape {
  constructor(type, width, height) {
    super(type, width, height);
  }
}

//This takes in an extra parameter so that the original draw function will work properly, width and height are identical
class Square extends Rectangle {
  constructor(type, width, height) {
    super(type, width, height);
  }
}

//This works like the square, again so the draw function will work. Width and height are identical
class Circle extends Shape {
  constructor(type, width, height) {
    super(type, width, height);
    this.radius = width / 2;
    this.perimeter = Math.round(2 * Math.PI * this.radius);
    this.area = Math.round(Math.PI * (this.radius * this.radius));
  }
}

//This has its own draw function because it uses different css stylings than the other shapes
class Triangle extends Shape {
  constructor(type, width, height) {
    super(type, width, height);
    this.perimeter = 2 * this.height + Math.sqrt(2) * this.height;
    this.area = 0.5 * this.height * this.height;
  }

  draw() {
    this.div = document.createElement("div");
    this.div.classList.add(this.type);
    this.div.style.borderBottomWidth = `${this.height}px`;
    this.div.style.borderRightWidth = `${this.height}px`;
    let maxHeight = document.getElementById("shapeDiv").offsetHeight - this.height;
    let maxWidth = document.getElementById("shapeDiv").offsetWidth - this.height;
    shapeDiv.appendChild(this.div);
    this.div.style.left = `${Math.random() * maxWidth}px`;
    this.div.style.top = `${Math.random() * maxHeight}px`;
    this.div.addEventListener("click", () => this.getInfo());
    this.div.addEventListener("dblclick", () => this.remove());
  }
}

//Listeners for each button

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
    document.querySelector("#triangleHeight").value
  );
});
