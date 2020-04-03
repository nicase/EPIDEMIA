class Subject {

    constructor (x, y) {
        this.x = x;
        this.y = y;
    }

    start() {
        
    }

    show() {
        d.circle(this.x, this.y, 5, {color: "red"});
    }

    move() {

    }

    update() {
        this.move();


        this.show();
    }

}