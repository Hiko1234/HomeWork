// Watchers for scss and html files
import "./index.scss";
import "./scripts/watchers/_pages"

// Import modules
import { Car } from "./scripts/modules/Card";
import { Fraction } from "./scripts/modules/Fraction";
import { Time } from "./scripts/modules/Time";
// Import methods
import { includeHTML } from "./scripts/methods/_includeComponents";

// Bisiness logic
document.addEventListener('DOMContentLoaded', () => {
  // Task 1
    console.log(`---------- Task 1 ----------`);
    const CAR = new Car("Ferrari", "F40", 1992, 140);
    CAR.carInfo();
    console.log(CAR.timeToCoverTheDistance(1000));
  // ------------------------------------------------

  // Task 2
  console.log(`---------- Task 2 ----------`);
  const fraction_one = new Fraction(1, 2);   
  const fraction_two = new Fraction(2, 4); 
  const fraction_three = new Fraction(4, 6); 

  console.log(fraction_one.add(fraction_two));
  console.log(fraction_one.subtract(fraction_two));
  console.log(fraction_one.multiply(fraction_two));
  console.log(fraction_one.divide(fraction_two));
  console.log(fraction_three.reduce());
  // ------------------------------------------------

  // Task 3
  console.log(`---------- Task 3 ----------`);
  const TIME = new Time(19, 31, 56);

  TIME.outputScreen();
  TIME.addSeconds(4);
  TIME.outputScreen();
  TIME.addMinutes(28);
  TIME.outputScreen();
  TIME.addHours(4);
  TIME.outputScreen();
  // ------------------------------------------------
});