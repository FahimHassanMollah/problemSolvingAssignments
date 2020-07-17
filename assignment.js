// feet to mile conversation function

function feetToMile(feetValue) {
    if (feetValue>=0)
    {
        return (feetValue/5280).toFixed(6);
    }
    return 'please enter a positive number';

}

// function calling

let convertedValue=feetToMile(2);
console.log(convertedValue);



// woodCalculator function

function woodCalculator(chair,table,bed) {
    if (chair>0 && table>0 && bed>0)
    {
        let numberOfWoodForChair=chair*1;
        let numberOfWoodForTable=table*3;
        let numberOfWoodForBed=bed*5;
        return numberOfWoodForChair+numberOfWoodForTable+numberOfWoodForBed;
    }
    return 'please enter at least 1 amount of chair & table & bed'
}

// function calling

let totalNumberOfWoods =woodCalculator(1, 1, 1);
console.log(totalNumberOfWoods);





// brickCalculator function

function brickCalculator(floorNumber) {
    if (floorNumber<=10){
        return (floorNumber*15)*1000;
    }
    else if (floorNumber<=20){

        return (15*10)*1000+(12*(floorNumber-10))*1000;
    }
    else {

        return (15*10)*1000+(12*20)*1000+((floorNumber-20)*10)*1000;
    }
}

// function calling

let totalbricks=brickCalculator(12);
console.log(totalbricks);





// tiny friend function

function tinyFriend(nameArray) {

   if (nameArray.length>0)
   {
       let tinyFriendNameLength=nameArray[0].length;
       let tinyFriendName=nameArray[0];
       for (let i = 0; i <nameArray.length ; i++) {
           if(tinyFriendNameLength>nameArray[i].length){
               tinyFriendNameLength=nameArray[i].length;
               tinyFriendName=nameArray[i];
           }

       }
       return tinyFriendName;
   }
   else {
       return 'please enter array with value'
   }
}


// function calling

let tinyFriendName=tinyFriend(['him','fahim hassan','rakib','sakib','rahi','saki']);
console.log(tinyFriendName);






















