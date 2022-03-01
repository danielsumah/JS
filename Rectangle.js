class Rectangle {
    constructor(width=1, height=2){
        this._width = width;
        this._height = height;
    }

    get height(){
        return this._height
    }

    set height(height){
        this._height = height;
    }

    get width(){
        return this._width
    }

    set width(width){
        this._width = width;
    }

    get getArea(){
        return this._height * this._width
    }

    get getPerimeter(){
        return 2 * (this._height + this._width)
    }
    
}


function testRectangle(){
    const Rectangle1 = new Rectangle(5,10)
    const Rectangle2 = new Rectangle(3.5,35.7)

    console.log("----------Rectangle 1 ----------------")
    console.log(Rectangle1.width)
    console.log(Rectangle1.height)
    console.log(Rectangle1.getArea.toFixed(2))
    console.log(Rectangle1.getPerimeter)

    console.log("----------Rectangle 2 ----------------")
    console.log(Rectangle2.width)
    console.log(Rectangle2.height)
    console.log(Rectangle2.getArea.toFixed(2))
    console.log(Rectangle2.getPerimeter)
    
}
testRectangle()