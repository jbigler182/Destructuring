//***DESTRUCTURING EXERCISE***//

//Question 1

    let facts = {numPlanet: 8, yearNeptuneDiscovered: 1846};
    let {numPlanet, yearNeptuneDiscovered} = facts; //We extract information for the variables value using destructure principles

    console.log(numPlanet); // 8
    console.log(yearNeptuneDiscovered); // 1846

//Question 2

    let planetFacts = {
        numPlanets: 8,
        yearNeptuneDiscovered: 1846,
        yearMarsDiscovered: 1659
    };
  
    let {numPlanets, ...discoveryYears} = planetFacts;
  
    console.log(discoveryYears); // {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

//Question 3
                    //destructuring in the function list and setting a default in the parameter list
  function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
  }
  
  getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // 'your name is Alejandro and you like purple'
  getUserData({firstName: "Melissa"}) // 'your name is Mellisa and you like green'
  getUserData({}) // 'your name is undefined and you like green'

//Question 4
  let [firsts, second, third] = ["Maya", "Marisa", "Chi"];

    console.log(firsts); // Maya
    console.log(second); // Marisa
    console.log(third); // Chi

//Question 5

    let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
        "Raindrops on roses",
        "whiskers on kittens",
        "Bright copper kettles",
        "warm woolen mittens",
        "Brown paper packages tied up with strings"
    ]
    
    console.log(raindrops); // Raindrops on roses
    console.log(whiskers); // whisers on kittens
    console.log(aFewOfMyFavoriteThings); // ['Bright copper kettles', 'warm wollen mittens', 'brown paper packages tied up with strings']

//Question 6

    let numbers = [10, 20, 30];
    [numbers[1], numbers[2]] = [numbers[2], numbers[1]] //I was fooled... Forgot index starts a [0]

    console.log(numbers) // [10, 30, 20]

//Question 7

    var obj = {
        numbers: {
        a: 1,
        b: 2
        }
    };
    
    var a = obj.numbers.a; //"Old" way of extracting data from objects
    var b = obj.numbers.b;
  
    const object = {
        numbers: {
        c: 1,
        d: 2
        }
    };
    
    const {c,d} = object.numbers //ES2015 destructuring // c,d = the object of numbers

//Question 8

    // var arr = [1, 2];
    // var tempp = arr[0];
    // arr[0] = arr[1];
    // arr[1] = tempp;

    let arr = [1, 2];
    [arr[0], arr[1]] = [arr[1], arr[0]] //Again didn't think about the array index. Was trying to directly plug the numbers in haha

//Question 9 

// raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])

/*
  {
    first: "Tom",
    second: "Margaret",
    third: "Allison",
    rest: ["David", "Pierre"]
  }
*/

const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})
//Declaring/defining a variable. giving it the value of an arrow function. Returning an object. The listed parameters are the same as the key names. Thanks to ES2015 we don't have to re-write them






   


















//***MY NOTES */


 //**************ARRAY and OBJECT DESTRUCTURING********************//

//What is DESTRUCTURING?  It is an EXTRACTION process

const teaOrder = {
    variety : "oolong",
    teaName : "winter",
    origin : "taiwan",
    price : 12.99,
    // quantity: 7 in checkOut function if there is no value we can set a default value. I set the default value to two. Two tea minimum in my shop!
    // brewTemp : 180
}

// const price = teaOrder.price;
// const name = teaOrder.teaName;
// const origin = teaOrder.origin;

//The short hand to DESTRUCTURE the above way of extracting information from the object seen below
                            //...(rest) to extract 'the rest' of the values not called for yet
const { price, name, origin, ...others } = teaOrder; //Destructure to define multiple variables at once
const { variety } = teaOrder;


//Destructuring and DEFAULT value
    //If brewTemp can't be found it will set the defualt value (175)
const { brewTemp = 175 } = teaOrder;
            //If I wanted to rename the extracted information I can do that like this
const { teaName: tea } = teaOrder
            //So teaName now won't exsist it will be tea

function checkOut (tea) {
    const {quantity = 2, price} = tea;
    return quantity * price;
}

checkOut(teaOrder) //gives 90.93. Sounds right to me

//ARRAY destructuring 

const students = [
    { name: 'Drake', gpa: 4.6},
    { name: 'Jeremy', gpa: 4.1},
    { name: 'Allie', gpa: 2.6},
    { name: 'Colt', gpa: 3.6},
];

//This is telling JS to extract the FIRST index in the array of students
const [topStudent] = students 
const [topStudents, secondBest,,teachersGPA] = students 
                            //can skip an index by adding another comma
const [first, ...losers] = students //can also use ...
            //collect 'the rest' using the ...rest operator 
const fifth = students[4] //this is a clearer way of extracting the 5th index without a bunch of commas 


//Destructuring FUNCTIONS - by using destructuring in the parameter list

const teaOrderForFunction = {
    variety : "oolong",
    teaName : "winter",
    origin : "taiwan",
    // quantity : 7,
    price : 12.99,
    brewTemp : 180
}
        //Extracting quantity and price in the parameter list
function getTotal({quantity = qty = 1, price }) {
    return quantity * price;        //can add ...rest if I want the rest of the unnamed information from the object
}                           //can rename/set default quantity if we want

const longJumpResults = [ 'jeremy', 'kevin', 'justin']
const swimMeetResults = [ 'jess', 'cook', 'calvin']
function awardMedals([gold, silver, bronze]){
    return {
        gold, silver, bronze
    };
}


//DESTRUCTING nested data structures  (See video#5 wasn't able to follow along with video due to content)

//Destructuring SWAP - swapping variables

let delicious = "Mayonnaise";
let disgusting = 'Whipped Cream';

//"Old way" save a third varible to swap them
let temp = delicious;
delicious = disgusting;
disgusting = temp;

let both = [delicious, disgusting];
[ disgusting, delicious ] = both; //has the effect of swaping them

[disgusting, delicious] = [delicious, disgusting]; //This is fancy swap syntax. Neat

//How destructor? Start with { something, somethingelse }





