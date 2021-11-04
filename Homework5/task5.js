class GeometricFigure{
    getArea(){
        return 0
    }
    toString(){
        return Object.getPrototypeOf(this).constructor.name;
    }
}


class Triangle extends GeometricFigure {
    constructor(b,h){
        super();
        this.b = b;
        this.h = h;
    }

    getArea(){
        return this.b * this.h / 2;
    }  
}

class Square extends GeometricFigure {
    constructor(a){
        super();
        this.a = a;
    }
    getArea(){
        return this.a ** 2;
    }
}

class Circle extends GeometricFigure{
    constructor (r){
    super();
    this.r = r;
    }
    getArea(){
        return Math.PI * this.r ** 2;
    }
}

function handleFigures(figures){
    return figures.reduce(function(sum, figure){
        if (figure instanceof GeometricFigure){
            console.log (`Geometric figure: ${figure.toString()} - area ${figure.getArea()}`);
            return sum + figure.getArea();
        }
        })
}

const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
    	console.log(handleFigures(figures));


