class LinearEquation{
    constructor(a,b,c,d,e,f){
        this._a = a;
        this._b = b;
        this._c = c;
        this._d = d;
        this._e = e;
        this._f = f;
    }

    get a(){
        return this._a;
    }
    get b(){
        return this._b;
    }
    get c(){
        return this._c;
    }
    get d(){
        return this._d;
    }
    get e(){
        return this._e;
    }
    get f(){
        return this._f;
    }

    get isSolvable(){
        return this._a*this._d - this._b*this._c != 0 ? true : '';
    }

    get getX(){
        return (this._e*this._d - this._b*this._f)/(this._a*this._d - this._b*this._c);
    }

    get getY(){
        return (this._a*this._f - this._e*this._c)/(this._a*this._d - this._b*this._c);
    }
}



// test function

function solveLinearEquation(a,b,c,d,e,f){
    const LinearEquation1 = new LinearEquation(a,b,c,d,e,f);
    if (LinearEquation1.isSolvable){
        console.log(`x is ${LinearEquation1.getX} and y is ${LinearEquation1.getY}`)
    }
    else {
        console.log('The equation has no solution')
    }
    

}

solveLinearEquation(1,2,2,4,4,5)
solveLinearEquation(9,4,3,-5,-6,-21)