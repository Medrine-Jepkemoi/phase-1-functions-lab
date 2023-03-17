// Code your solution in this file!

//define the function distanceFromHqInBlocks and assign the parameter customerlocation to it
function distanceFromHqInBlocks(customerLocation) {

    const hqLocation = 42; //Declare a variable and assign the value of the Scuber's HQ location to it 

    let blocksFromHq = customerLocation - hqLocation;  //calculate the distance in blocks from a customer's location to the HQ
    

    return Math.abs(blocksFromHq);  //return the expected output as a positive value
}

//call the function and assign various values to it
let returnedValueBlocks = distanceFromHqInBlocks(43);
console.log(returnedValueBlocks)

returnedValueBlocks = distanceFromHqInBlocks(50);
console.log(returnedValueBlocks)

returnedValueBlocks = distanceFromHqInBlocks(34);
console.log(returnedValueBlocks)


//define the function distanceFromHqInFeet and assign the parameter customerlocation to it
function distanceFromHqInFeet(customerLocation){

    let oneBlock = 264; // declare a variable and assign the value of one block in feet 

    let feetFromHQ = distanceFromHqInBlocks(customerLocation) * oneBlock; //declare a variable to store the result of calculating the distance in blocks of the previous function<distanceFromHqInBlocks()> in feet

    return feetFromHQ; //return the expected output

}

//call the function and pass arguments to it

let returnedValueFeet = distanceFromHqInFeet(43);
console.log(returnedValueFeet)

returnedValueFeet = distanceFromHqInFeet(50);
console.log(returnedValueFeet)

returnedValueFeet = distanceFromHqInFeet(34);
console.log(returnedValueFeet)

//declare the function distanceTravelledInFeet() and assign start and destination paramaters to it
function distanceTravelledInFeet(start, destination){

    let oneBlock = 264; // declare a variable and assign the value of one block in feet

    let distanceCovered = Math.abs((destination - start) * oneBlock); //declare a variable to store the calculation of the distance covered to it

    return distanceCovered; //return the expected output
}

//call the function and pass arguments to it
let returnedTravelFeet = distanceTravelledInFeet(43, 48);
console.log(returnedTravelFeet)

returnedTravelFeet = distanceTravelledInFeet(50, 60);
console.log(returnedTravelFeet)

returnedTravelFeet = distanceTravelledInFeet(34, 28);
console.log(returnedTravelFeet)


//declare a function calculateFarePrice() and assign start and destination to it
function calculatesFarePrice(start, destination){
    
    let distanceCovered = distanceTravelledInFeet(start, destination); //declare a variable to store calculating the distance covered in the previous function <distance in feet from start to destination>

    let minimalDistance = 400; //declare a variable to store the minimal distance that when covered, it qualifies for a free trip

    let centsPerFoot = 0.02  //declare a variable to store the amount charged per foot to be used on condition 2 in the if...else statement


    //Conditions that have to be met so as to return something
    if(distanceCovered <= 400){
        return 0;
    }

    else if (distanceCovered > 400 && distanceCovered < 2000){

        //calculate the new distance price from the remaining dustance coveredafter the free distance has been exhausted
        let newDistancePrice = ((distanceCovered - minimalDistance) * centsPerFoot);
        return newDistancePrice;
    }

    else if (distanceCovered > 2000 && distanceCovered < 2500){
        return 25;
    }

    else if (distanceCovered > 2500){
        return `cannot travel that far`;
    }

}

//calling the function and passing arguments to it

let returnedFare = calculatesFarePrice(43, 44);
console.log(returnedFare)

returnedFare = calculatesFarePrice(34, 32);
console.log(returnedFare)

returnedFare = calculatesFarePrice(50, 58);
console.log(returnedFare)

returnedFare = calculatesFarePrice(34, 24);
console.log(returnedFare)





