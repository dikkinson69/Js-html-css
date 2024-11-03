// IF STATEMENTS

// // sintaksa
// if (condition) {
// 	// ovde kod ide
// } else {
// 	// i ovde ko ide
// }
let customerIsBanned = true;
let soup = "chicken noodle soup";
let crackers = true;
let reply;
if (customerIsBanned) {
	reply = "no soup for you";
}
else if (soup && crackers) {
	reply = 'Heres your order of ${soup} $ crackers';
} else {
	reply = 'Sorry we are out of ${soup} $ crackers';
}
console.log(reply);


// test exam programm
let testScore = 59;
let collegeStudent = true;
let grade;

if (testScore >=90) {
	grade = "A";
} else if (testScore >=80) {
	grade = "B";
} else if (testScore >=70) {
	grade = "C";
} else if (testScore >=60) {
	grade = "D"
} else {
	if (collegeStudent) {
		grade = "U";
	} else {
		grade = "F";
	}
}
console.log(grade);
