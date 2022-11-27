import readline from "readline";

function calculateRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
  }

//configurating node utility so that data is requested and displayed on the console.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  

const students = [{
    age: 32,
    examScores: [],
    gender: 'male',
    name: 'edu'
  },
  {
    age: 29,
    examScores: [],
    gender: 'female',
    name: 'silvia'
  },
  {
    age: 27,
    examScores: [],
    gender: 'male',
    name: 'juan'
  },
  {
    age: 21,
    examScores: [],
    gender: 'female',
    name: 'isabel'
  },
  {
    age: 35,
    examScores: [],
    gender: 'female',
    name: 'ana'
  }]
  
const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos'];
const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
const availableGenders = ['male', 'female'];

//#1 Display all students in table format
function showAllStudents () {
    console.table(students)
}

//#2 Show by console the number of students in the class
function studentsInClass() {
    console.log(students.length)
}

//#3 Show all student names by console
function showStudentsNames() {
    for (let i = 0; i < students.length; i++) {
        console.log(students[i].name)
    }
}

//#4 Remove the last student from the class
function removeLastStudent(){
    const studentRemoved = students.pop();
    console.log('%s has been removed.', studentRemoved)
}

//#5 Randomly remove a student from the class
function removeStudentRandomly() {
    const randomIndex = calculateRandomNumber(0, students.length - 1)
    console.log('The random index is %s', randomIndex);
    const studentRemoved = students.splice(randomIndex, 1); 
    console.log('You\'ve removed this student: ', studentRemoved)   
}

//#6 Show by console all data of female students
function showFemaleStudents() {
    for(let i = 0; i < students.length; i++) {
        if(students[i].gender === 'female') {
            console.log(students[i])
        }
    }
}

//#7 Display by console the number of boys and girls in the class
function numberBoysAndGirls() {
  let girls = 0;
  let boys = 0;
  for(let i = 0; i < students.length; i++) {

    if(students[i].gender === 'female') {
      girls += 1;
    } else {
      boys += 1;
    }
  }
  console.log('The number of girls is: %s', girls)
  console.log('The number of boys is: %s', boys)
}

//#8 Show true or false by console if all students in the class are girls
function allStudentsAreGirls() {
  
  let numFemaleStudents = 0;
  for(let i = 0; i < students.length; i++) {
    if(students[i].gender === 'female') {
        numFemaleStudents += 1;
    }   
  }
  
  if(students.length === numFemaleStudents) {
    console.log('true'); 
  } else {
    console.log('false');
  }
}

//#9 Display by console the names of students aged 20 to 25 years old
function studentsAged20to25() {
  for(let i = 0; i < students.length; i++) {
    if(students[i].age >= 20 && students[i].age <= 25) {
        console.log(students[i].name);
    }   
  }
}

//#10 Add a new student with the following data:
// - random name.
// - random age between 20 and 50 years old.
// - random gender.
// - empty list of grades.
function addNewStudent() {
  const randomIndexGenders = calculateRandomNumber(0 , availableGenders.length - 1);
  const randomIndexMaleNames = calculateRandomNumber(0 , availableMaleNames.length - 1);
  const randomIndexFemaleNames = calculateRandomNumber(0 , availableFemaleNames.length - 1);
  
  students.push({
    age: calculateRandomNumber(20, 50),
    examScores: [],
    gender: availableGenders[randomIndexGenders],
    name: ''
  })
  if (students[students.length - 1].gender === 'female') {
    students[students.length - 1].name = availableFemaleNames[randomIndexFemaleNames]
  } else {
    students[students.length - 1].name = availableMaleNames[randomIndexMaleNames]
  }
  console.log('This student has been added: ', students[students.length - 1])
}

//#11 Display by console the name of the youngest person in the class.
//If several people in the class share the lowest age, any one of them is a valid answer.
function showYoungestStudent() {
  let minAge = students[0].age;
  for(let i = 0; i < students.length; i++) {
    if(minAge > students[i].age) {
      minAge = students[i].age;
    }     
  }
  students.filter(student => student.age === minAge);
  const indice = students.findIndex((elemento, indice) => {
    if (elemento.age === minAge) {
      return true;
    }
  });
  const youngestStudentName = students[indice].name;
  console.log('The youngest person in the class is: ', youngestStudentName);
}

//#12 Show by console the average age of all students in the class
function showAverageAge() {
  
  let totalOfAges = 0;
  for(let i = 0; i < students.length; i++) {
    totalOfAges += students[i].age;
    }  
    const averageAge = totalOfAges / students.length;
    console.log('The average age of the class is:' , averageAge);   
  } 

//#13 Show by console the average age of the girls in the class
function femaleAverageAge() {
  let totalFemaleAges = 0;
  let numGirls = 0;
  for(let i = 0; i < students.length; i++) {
    if(students[i].gender === 'female') {
      totalFemaleAges += students[i].age;
      numGirls += 1;
    }   
  }
  const averageFemaleAge = totalFemaleAges / numGirls;
  console.log('The average age of girls in the class is:' , averageFemaleAge); 
}

//#14 Add a new grade for the students. For each student in the class, 
//we will have to calculate a random grade (number between 0 and 10) and add it to the list of grades
function addNewGrade(){
  for(let i = 0; i < students.length; i++) {
    students[i].examScores = calculateRandomNumber(0, 10);
    console.log('Random grade added: ',students[i]. name, students[i].examScores)
  }
}

//#15 Sort the array of students alphabetically according to their name
function sortStudentsByName() {
  students.sort(function(a, b) {
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0;
  });
  console.log(students)
}

function showAllOptions() {
  console.log('#1 Display all students in table format')
  console.log('#2 Show by console the number of students in the class')
  console.log('#3 Show all student names by console')
  console.log('#4 Remove the last student from the class')
  console.log('#5 Randomly remove a student from the class')
  console.log('#6 Show by console all data of female students')
  console.log('#7 Display by console the number of boys and girls in the class')
  console.log('#8 Show true or false by console if all students in the class are girls')
  console.log('#9 Display by console the names of students aged 20 to 25 years old')
  console.log('#10 Add a new student')
  console.log('#11 Display by console the name of the youngest person in the class')
  console.log('#12 Show by console the average age of all students in the class')
  console.log('#13 Show by console the average age of the girls in the class')
  console.log('#14 Add a new grade for the students')
  console.log('#15 Sort the array of students alphabetically according to their name')  
}
showAllOptions();

function isInt(str) {
  // returns a boolean
  return /^[0-9]+$/.test(str);
}

function getNumberFromUser() {
  const promise = new Promise((resolve, reject) => {
      rl.question('Choose an option number: ', (option) => {
        rl.pause();
        if (isInt(option)) {
          option = Number.parseInt(option);
          resolve(option);
        } else {
          reject("You must enter a number!");
        }
      });
    });
  return promise;
}

async function main() {
try {
  const numberFromUser = await getNumberFromUser()
  console.log(numberFromUser)
} catch {
  console.log('You must enter a number between 1 and 15')
}
console.log('fin de script')
}

main();

function userChoosesOption(option) {
  switch (option) {
    case 1:
      showAllStudents ();  
      break;
    case 2:
      studentsInClass();  
      break;
    case 3:
      showStudentsNames();  
      break;
    case 4:
      removeLastStudent();  
      break;
    case 5:
      removeStudentRandomly();  
      break;
    case 6:
      showFemaleStudents();  
      break;
    case 7:
      numberBoysAndGirls();  
      break;
    case 8:
      allStudentsAreGirls();  
      break;
    case 9:
      studentsAged20to25();  
      break;
    case 10:
      addNewStudent();  
      break;
    case 11:
      showYoungestStudent();  
      break;
    case 12:
      showAverageAge();  
      break;
    case 13:
      femaleAverageAge();  
      break;
    case 14:
      addNewGrade();  
      break;
    default:
      sortStudentsByName();
      break;
  }
}
