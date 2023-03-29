class UserService{
    sayHi(){
        console.log('Hi!!');
    }
}

class Component{
    constructor(private user: UserService){

    }
}
// angular DI
class Injector{
    private _container = new Map();

    constructor(private _providers: any[] = []){
        this._providers.forEach(service => this._container.set(service, new service()));
    }

    get(service: any){
        const serviceInstance = this._container.get(service);
        if(!serviceInstance){
            throw Error('No provider found');
        }
        return serviceInstance;
    }
}

// somewhere in the application
const _injector = new Injector([UserService]);
const component = new Component(_injector.get(UserService));
component.user.sayHi();

// Injector hierarchy & resolution rules
// Code without DI:->

class Engine{
    constructor(){}
}
class Tires{
    constructor(){}
}
// without DI
class Car{
    engine;
    tires;
    constructor(){
        this.engine = new Engine();
        this.tires = new Tires();
    }
}
// we only need Engine and Tires to create a Car

// lets say engine evolves it can accept new parameters such as petrol and diesal as params


//Anytime the dependencies such as Engine and Tires class change the injectors need to be modified
// this code is not suitable for testing.

// with DI
class Car{
    engine;
    tires;
    constructor(engine, tires){
        this.engine = engine;
        this.tires = tires;
    }
}

var myEngine = new Engine();
var myTiers = new Tires();
var myCar = new Car(myEngine, myTiers);
// even if engine evolves there is no change in how we inject the object
// how we make the car
// Code is much more flexible now

//WHat if car has 10-20 dep we would have to pass each of them 
// no of dependencies grow its difficult to manage
// car has mul dependencies 

// DI Framework has an injector 
// a container of all the dep.
// ask for a car and 


