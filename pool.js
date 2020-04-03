class Pool {

    constructor (n) {
        this.subjects = [];
        this.n = n;
        for (let i = 0; i < n; ++i) this.subjects.push(new Subject(i*10, i*10));
    }
 
    updateSubjects() {
        for (let i = 0; i < this.n; ++i) 
        this.subjects[i].update();

    }


    update() {
        d.clearAll();
        this.updateSubjects();
    }



}