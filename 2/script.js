"use strict"

let obj = {data: [
	{ score: 10, name: 'Bob' , age: 18, 
    toString: function() {
    return this.name + " - " + this.age + ": " + this.score;
  }
    },
    { score: 12, name: 'Jack' , age: 22, 
     toString: function() {
    return this.name + " - " + this.age + ": " + this.score;
  }
    },
    { score: 8, name: 'Nick' , age: 16, 
     toString: function() {
    return this.name + " - " + this.age + ": " + this.score;
  }
    },
     { score: 11, name: 'John' , age: 22, 
     toString: function() {
    return this.name + " - " + this.age + ": " + this.score;
  }
    },
    { score: 9, name: 'Notch' , age: 17, 
     toString: function() {
    return this.name + " - " + this.age + ": " + this.score;
  }
    }
]};


let sum = 0;
let membersOld = [];
let membersNames = [];
let membersToString = [];
let membersToStringForAge = [];


function getScores(obj) {
    obj.data.forEach(function(item) {
        sum += item.score;
    })
    return sum;
}


function getMembersAge18(obj) {
    obj.data.forEach(function(item) {
        if (item.age >= 18) {
            membersOld.push(item);
        }
    })
                     return membersOld;
    
}


function getMembersName(obj, firstLetter) {
    obj.data.forEach(function(item) {
        if (item.name.charAt(0) === firstLetter) {
            membersNames.push(item);
        }
    })
    return membersNames;
}


function returnObjectToString(obj) {
    obj.data.forEach(function(item) {
       
        membersToString.push(item);
    })
    return membersToString.toString();
}


function returnSumOfAge(obj) {
    obj.data.forEach(function(item,i) { 
      // console.log(i);
        if (membersToStringForAge[item.age] === undefined) {
             membersToStringForAge[item.age] = item.score.toString();
        } 
        else {
            let a =  membersToStringForAge[item.age];
            a = +a + +item.score;
             membersToStringForAge[item.age] = a.toString(); 
        }
    })
    return membersToStringForAge;
}


    console.log("Сумма всех очков: " + getScores(obj));
    console.log("Массив участников 18+ : " + JSON.stringify(getMembersAge18(obj)));
    console.log("Массив с участниками по первой букве : " + JSON.stringify(getMembersName(obj, "N")));
    console.log(returnObjectToString(obj));
    console.log(returnSumOfAge(obj));









