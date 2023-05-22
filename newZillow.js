
class family{
    //family class
    constructor(people,rooms,pets,budget,area,cars ){
        this._people = people;
        this._rooms = rooms;
        this._pets = pets
        this._budget = budget
        this._area = area
        this._cars = cars
    } 
    get people(){
        return this._people;
    }
    set people(newPeople){
        this._people = newPeople;
    }
    get room(){
        return this._room;
    }
    set room(newRoom){
        this._room = newRoom;
    }
    get pets(){
        return this._pets;
    }
    set pets (newPets){
        this.pets = newPets;
    }
    get budget(){
        return this._budget;
    }
    set budget (newBudget){
        this.budget = newBudget;
    }
    get area(){
        return this._area;
    }
    set area(newArea){
        this._area = newArea;
    }
    get cars(){
        return this._cars
    }
    set cars (newCars){
        this._cars = newCars;
    }
}
//
class houses extends family{
    constructor(people,rooms,pets,budget,area,cars, houses, price){
        super(people,rooms,pets,budget,area,cars);
        this._houses = houses
        this._price = prices
        }
    get houses(){
        return this._houses;
    }
    get price(){
        return this._price;
    }

}
if (houses === null) {
    return 0;
  }

function sendText() {
    let id=parseInt(document.getElementById("id").value);
    let name=(document.getElementById("name").value);
    let sn=parseInt(document.getElementById("sn").value);
    let hpr=parseInt(document.getElementById("hpr").value);
    PW = new ProductionWorker(name, id, sn, hpr);
   document.getElementById("pname").innerHTML= PW.name;
   document.getElementById("in").innerHTML= PW.id;
   document.getElementById("shift").innerHTML= PW.sn;
   console.log(PW.hpr);
   document.getElementById("hpr2").innerHTML= PW.hpr;
}
