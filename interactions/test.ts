"use strict"; // not Necessary if enabled by NodeJS

// Variables

let characterName: string = "John";
let characterScore: number = 54642;

let highScore: BigInt = 150n; 
let maxAmmo: BigInt = BigInt(54626);

let treasureChest: boolean = true;
treasureChest = false;

let playerOne: null= null;
let playerTwo: undefined = undefined;

let playerCar: object= {
    "Name": "car",
    "Color": "blue",
    "wheels": 4
}

// UNKNOW & ANY

let playerWeapon: any;
let playerItem: unknown;

let test: void; // utilisé uniquement dans les fonctions

// readonly
// optional (?)

interface Vehicle {
    name: string;
    wheels: number;
    score: BigInt;
    // readonly
    readonly power: number;
    // optional
    brand?: string; // "Volkswagen"
}

const newVehicle: Vehicle = {
    name: "test",
    wheels:4,
    score:4654n,
    power: 3,

    brand: "Audi"
}

// Arrays

let playerList: string[] = ["player 1", "player 2"];

let weaponList:string[] = []

// Tuples
let playerItems: [string, number, BigInt];

const players: string[] = ["Joe", "Jonesy", "Haven"];
players.push("Victoria");

let fruit: Array<string> = ["appel", "orange", "banana"]

enum Monsters {
    OGRE = 15,
    DEVIL = 160,
    ORC = 180
}

console.log(Monsters.DEVIL)


// CUSTOM TYPES

type Truck = 
{
    id: number,
    name:string,
    color: string[],
    wheels:number,
    isAvailable: boolean,
    price: BigInt
}

const newTruck: Truck = {
    id:154,
    name: "truck name",
    color: ["blue", "red"],
    wheels:8,
    isAvailable:true,
    price:189738775n

}

interface IVehicle {
    type:string;
    power: number;
}

interface ICar extends IVehicle {
    name: string;
    readonly colors: string[];
    wheels?: number;
}

const myCar: ICar = {
    type: "Car",
    power: 3043,
    name: 'My Car',
    colors: ["color", ""],
    wheels:4
}

// CLASSES

class Animal {
    // Properties
    public type: string;
    public name: string;
    protected color: string;
    // Static Properties
    public static animalInstances: number = 0;
    public static animalTypes:string[] = ["Cat","Dog","Dinosaur"];
    // Constructor
    public constructor (type: string,name: string, color: string){
        this.type = type;
        this.name = name;
        this.color = color;
    }
}
class Dog extends Animal {
    public constructor (type: string, name:string, color:string){
        super(type,name,color)
    }
}
// New instance
const Hubert = new Animal("Dog", "Hubert", "Beige");

// static property reading
console.log(Animal.animalInstances)
