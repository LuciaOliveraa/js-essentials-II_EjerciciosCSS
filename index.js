// 00 - Create a forked repo from this repository and clone it in your local machine.

// 01 - Function
// getTotal(inventory: [{article: '🍔', price: 15, quantity: '1'}, {article: '🍟', price: 10, quantity: '2'}])
function getTotal(inventory) {
    console.log("inventorys", inventory);
    return inventory.reduce((acc, article) => {return acc + article.price * article.quantity}, 0);
    
}
// it should return the total. for the example data 👆 it should be: 35. (15x1 + 10x2)
console.log(getTotal([{article: '🍔', price: 15, quantity: '1'}, {article: '🍟', price: 10, quantity: '2'}]));


// 02 - Function
// countBanana(inventory:['🥑','🍌','🥭', '🍌']})
function countBanana(inventory) {
    let bananas =  inventory.filter((article) => article === '🍌' );
    return bananas.length;
}
console.log(countBanana(['🥑','🍌','🥭', '🍌']));

// 03- Function
//   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   console.log(filterEvenNumbers(numbers)); // Output: [2, 4, 6, 8, 10]
function filterEvenNumbers(numbers) {
    let evenNumbers = numbers.filter((number) => number % 2 == 0);
    return evenNumbers;
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 04 - function
//   const numbers = [1, 2, 3, 4, 5];
//   console.log(squareNumbers(numbers)); // Output: [1, 4, 9, 16, 25]
function squareNumbers(numbers) {
    let square = numbers.map((num) => num*num);
    return square;
}
console.log(squareNumbers([1, 2, 3, 4, 5]));

// 05 - function
//   const numbers = [1, 2, 3, 4, 5];
//   console.log(findMax(numbers)); // Output: 5
function findMax(numbers) {
    return numbers.toSorted()[numbers.length -1];
}
console.log(findMax([1, 2, 6, 4, 5]));

// 06 - function
//   const people = [
//     { name: "Juan", age: 25 },
//     { name: "Carla", age: 30 },
//     { name: "Lucia", age: 35 },
//     { name: "El Chengue", age: 49 }
//   ];
//   console.log(calculateAverageAge(people)); // Output: 32.5
function calculateAverageAge(people) {
    let agesSummedUp = people.reduce((acc, person) => {return acc + person.age}, 0);
    return agesSummedUp / people.length;
}
const people = [
         { name: "Juan", age: 25 },
         { name: "Carla", age: 30 },
         { name: "Lucia", age: 35 },
         { name: "El Chengue", age: 49 }
       ];
console.log(calculateAverageAge(people));


// 07 - function  combinedHobbies(persons)
// Function to combine hobbies from all persons
function combinedHobbies(people) {
    let hobbiess = [];
    people.forEach(element => {
        hobbiess.push(element.hobbies);
    });
    hobbiess = hobbiess.flat();
    return new Set(hobbiess);
}

 const people2 = [
     {
       name: 'Paula',
       hobbies: ['reading 📚', 'gardening 🌱', 'painting 🎨']
     },
     {
       name: 'Martin',
       hobbies: ['cycling 🚴', 'cooking 🍳', 'hiking 🥾']
     },
     {
       name: 'Juan',
       hobbies: ['photography 📸', 'traveling ✈️', 'swimming 🏊‍♂️']
     },
     {
       name: 'Veronica',
       hobbies: ['dancing 💃', 'singing 🎤', 'running 🏃‍♀️']
     }
    ];

console.log(combinedHobbies(people2));
// Expected output:
// [
//   'reading 📚', 'gardening 🌱', 'painting 🎨',
//   'cycling 🚴', 'cooking 🍳', 'hiking 🥾',
//   'photography 📸', 'traveling ✈️', 'swimming 🏊‍♂️',
//   'dancing 💃', 'singing 🎤', 'running 🏃‍♀️'
// ]


// 08 - function printChemicalInfo(chemicals)
function printChemicalInfo(chemicals) {
    chemicals.forEach(element => {
        console.log("+-------------------------------------------------------+");
        console.log(spacedEndings(`| Compound ID: ${element.compoundId}`, 56) + `|`);
        console.log(spacedEndings(`| Name: ${element.name}`, 56)+`|`);
        console.log(spacedEndings(`| Formula: ${element.formula}`, 56) + `|`);
        let descriptionRows = wrapText(`Description: ${element.description}`, 54);
        for (let i = 0; i < descriptionRows.length; i++) {
            console.log(`|` + descriptionRows[i] + ` |`);
        }
        console.log(spacedEndings(`| Molecular weight: ${element.molecularWeight}`, 56) + "|");
        console.log(spacedEndings(`| Melting Point: ${element.meltingPoint}`, 56) + "|");
        console.log(spacedEndings(`| Boiling Point: ${element.boilingPoint}`, 56) + `|`);
        console.log(spacedEndings(`| Solubility: ${element.solubility}`, 56) + `|`);
        console.log("+-------------------------------------------------------+");
    });
}

function wrapText(text, rowLength) {
    let rows = [];
    let row = "";
    let words = text.split(" ");

    words.forEach(word => {
        if ((row.length + word.length + 1) < rowLength) {
            row += " " + word;
        } else {
            row = spacedEndings(row, rowLength);
            rows.push(row);
            row = " ";
        }
    });

    return rows;
}

function spacedEndings(text, rowLength) {
    while (text.length < rowLength) {
        text = text + " ";
    }
    return text;
}


const chemicals = [
    {
      compoundId: 'CHEM001',
      name: 'Aspirin',
      formula: 'C9H8O4',
      description: 'Aspirin is a common medication used to reduce pain and inflammation.',
      molecularWeight: '180.16 g/mol',
      meltingPoint: '135°C',
      boilingPoint: '140°C',
      solubility: 'Slightly soluble in water'
    },
    {
      compoundId: 'CHEM002',
      name: 'Caffeine',
      formula: 'C8H10N4O2',
      description: 'Caffeine is a stimulant found in coffee, tea, and various energy drinks.',
      molecularWeight: '194.19 g/mol',
      meltingPoint: '238°C',
      boilingPoint: '178°C',
      solubility: 'Freely soluble in water'
    },
    {
      compoundId: 'CHEM003',
      name: 'Ethanol',
      formula: 'C2H6O',
      description: 'Ethanol, also known as alcohol, is commonly used as a solvent and in alcoholic beverages.',
      molecularWeight: '46.07 g/mol',
      meltingPoint: '-114.1°C',
      boilingPoint: '78.37°C',
      solubility: 'Miscible with water'
    }
  ];

printChemicalInfo(chemicals)
//Expected output

// +-------------------------------------------------------+
// | Compound ID: CHEM001                                 |
// | Name: Aspirin                                        |
// | Formula: C9H8O4                                      |
// | Description: Aspirin is a common medication used to  |
// | reduce pain and inflammation.                        |
// | Molecular Weight: 180.16 g/mol                       |
// | Melting Point: 135°C                                 |
// | Boiling Point: 140°C                                 |
// | Solubility: Slightly soluble in water                |
// +-------------------------------------------------------+
// +-------------------------------------------------------+
// | Compound ID: CHEM002                                 |
// | Name: Caffeine                                       |
// | Formula: C8H10N4O2                                   |
// | Description: Caffeine is a stimulant found in coffee,|
// | tea, and various energy drinks.                      |
// | Molecular Weight: 194.19 g/mol                       |
// | Melting Point: 238°C                                 |
// | Boiling Point: 178°C                                 |
// | Solubility: Freely soluble in water                  |
// +-------------------------------------------------------+
// +-------------------------------------------------------+
// | Compound ID: CHEM003                                 |
// | Name: Ethanol                                        |
// | Formula: C2H6O                                       |
// | Description: Ethanol, also known as alcohol, is      |
// | commonly used as a solvent and in alcoholic beverages|
// | Molecular Weight: 46.07 g/mol                        |
// | Melting Point: -114.1°C                              |
// | Boiling Point: 78.37°C                               |
// | Solubility: Miscible with water                      |
// +-------------------------------------------------------+

// 09 - function getGetUniqueGuestList(guestList)
// const guestList = ['Alice 🙆🏻‍♀️', 'Bob 🙍🏼', 'Charlie 👨🏼‍🚀', 'Alice 🙆🏻‍♀️', 'David 🤵🏿‍♂️'];
function getGetUniqueGuestList(guestList) {
    return new Set(guestList);
}
// Remove duplicated elements from the  guests list
// Expected getGetUniqueGuestList(guestList)) ['Alice 🙆🏻‍♀️', 'Bob 🙍🏼', 'Charlie 👨🏼‍🚀', 'David 🤵🏿‍♂️']
console.log(getGetUniqueGuestList(['Alice 🙆🏻‍♀️', 'Bob 🙍🏼', 'Charlie 👨🏼‍🚀', 'Alice 🙆🏻‍♀️', 'David 🤵🏿‍♂️']));

// 10 - function showUserProfiles(user)
// User data
function showUserProfile(user) {
    let accounts = "";
    if (user.profile?.social?.twitter) {
        accounts = accounts + user.profile?.social?.twitter;
    }
    if (user.profile?.social?.facebook) {
        accounts = accounts + " " + user.profile?.social?.facebook;
    }
    if (user.profile?.email) {
        accounts = accounts + " " + user.profile?.email;
    }

    return accounts;
}

const user1 = {
    id: 1,
    name: 'Carol Smith',
    profile: {
      social: {
         twitter: 'carol.smith',
         facebook: 'carol.smith77'
     }
   }
};

const user2 = {
    id: 2,
    name: 'Jane Smith',
    profile: {
      email: 'jane.smith@example.com'
    }
};

  console.log(showUserProfile(user1)); // Expected output: 'carol.smith, carol.smith77'
  console.log(showUserProfile(user2)); // Expected output: 'jane.smith@example.com'

// 11 - function sortLeaderBoardByScoreDesc(leaderBoard)
// The function should sort the players by score as it's displayed on the expected output
function sortLeaderBoardByScoreDesc(board) {
    return board.sort((a, b) => b.score - a.score);
}

const leaderBoard = [
  { player: "John", score: 80 },
  { player: "Charlie", score: 20 },
  { player: "Julio", score: 50 },
  { player: "Bob", score: 80 },
  { player: "Bobby", score: 11 },
  { player: "Tommy", score: 43 },
  { player: "Eric", score: 99 },
  { player: "Alice", score: 100 },
  { player: "Alfred", score: 30 },
];

console.log(sortLeaderBoardByScoreDesc(leaderBoard));

// Expected output:
// [
//   { player: 'Alice', score: 100 },
//   { player: 'Eric', score: 99 },
//   { player: 'John', score: 80 },
//   { player: 'Bob', score: 80 },
//   { player: 'Julio', score: 50 },
//   { player: 'Tommy', score: 43 },
//   { player: 'Alfred', score: 30 },
//   { player: 'Charlie', score: 20 },
//   { player: 'Bobby', score: 11 }
// ]

// 12 - function

// function getTopFiveWorstPlayers(leaderBoard)
function getTopFiveWorstPlayers(leaderBoard) {
    let board = [...leaderBoard];
    board.sort((a, b) => a.score -b.score);
    return board.slice(0,5);
}

console.log(getTopFiveWorstPlayers(leaderBoard));
// Expected output:
// [
//   { player: 'Bobby', score: 11 },
//   { player: 'Charlie', score: 20 },
//   { player: 'Alfred', score: 30 },
//   { player: 'Tommy', score: 43 },
//   { player: 'Julio', score: 50 }
// ]

// NOTE: ⚠️ original array shouldn't be modified. or we are missing players.

// 13 - function safeCopy()
// Deep copy function
function safeCopy(obj) {
    //ToDo (complete the function here...)
    return {...obj};
}

let companyHierarchy = {
    name: 'Company',
    departments: [
      {
        name: 'Engineering',
        head: 'Alice',
        subDepartments: [
          {
            name: 'Backend',
            head: 'Bob',
            employees: ['Charlie', 'David']
          },
          {
            name: 'Frontend',
            head: 'Eve',
            employees: ['Frank', 'Grace']
          }
        ]
      },
      {
        name: 'Sales',
        head: 'Henry',
        employees: ['Isaac', 'Jane']
      }
    ]
  };



  // Example usage
  let copiedHierarchy = safeCopy(companyHierarchy);

  // Modify the copied hierarchy
  copiedHierarchy.departments.push({
    name: 'Marketing',
    head: 'Karen',
    employees: ['Liam', 'Mia']
  });

  // Verify independence
  console.log('Original Company Hierarchy:');
  console.log(companyHierarchy);

  console.log('Copied Company Hierarchy with Modifications:');
  console.log(copiedHierarchy);
