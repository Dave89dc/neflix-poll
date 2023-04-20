
class Segment{
    constructor(xA, yA, xB, yB) {
        this.xA = xA;
        this.yA = yA;
        this.xB = xB;
        this.yB = yB;
    };

    calculateLength() {
        return Math.sqrt((this.xA - this.xB)**2) + ((this.yA - this.yB)**2);
    };

};

const pippoArray = ['Pippo', 'De Pippis', 20];

const pippo = {
    name: 'Pippo',
    surname: 'De Pippis',
    age: 20
};

console.log('Esempio senza lo stringify: ' + pippo);
console.log('Esempio con JASON.stringify(): ' + JSON.stringify(pippo));

const newSegment1 = new Segment(1,1,4,5);

console.log(newSegment1);
console.log(JSON.stringify(newSegment1));

const string1 = '{"name":"pippo","surname":"de pippis","age":20}';

const stringToObject = JSON.parse(string1);
console.log(stringToObject);

// File collegato da 'config.json:

fetch('./config.json').then(resp => resp.json()).then(config => console.log(config));

// esempio geometry:

class Geometry {

    static PI = 3.14;

    static distanceBetweenTwoPoints(xA, xB, yA, yB) {
        return Math.sqrt(((xA - xB)**2) + ((yA - yB) ** 2));
    };

};

console.log('Esempio Geometry: ', Geometry.distanceBetweenTwoPoints(1,1,4,5));

console.log('Esempio Geometry 2: ', Geometry.PI);