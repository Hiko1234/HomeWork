export class Car{
    constructor(producer, model, graduationYear, averageSpeed){
        this.producer = producer;
        this.model = model;
        this. graduationYear = graduationYear;
        this.averageSpeed = averageSpeed;
    }

    carInfo(){
        console.log(`Producer: ${this.producer}; Model: ${this.model}; Graduation year: ${this.graduationYear}; Average speed: ${this.averageSpeed} km/h`);
    }
    
    timeToCoverTheDistance(distance) {
        let travelTime = distance / this.averageSpeed;
        const REST_TIME = Math.floor(travelTime / 4);
        travelTime += REST_TIME;
        return travelTime;
    }
}