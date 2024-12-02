function getStudentGrade(marks){
    const studentMarks = 100;
  
}

const grades = 70;


function grading(grades) {
    if (grades >= 80 && grades <= 100) {
        console.log("A")
    } else if (grades >= 60 && grades <= 79) {
        console.log("B")
    } else if (grades >= 50 && grades <= 59) {
        console.log("C")
    } else if (grades >= 40 && grades <= 49) {
        console.log("D")
    } else if (grades < 40) {
        console.log("E")
    } else {
        return 'Please enter a valid grade';
    }
}

console.log(grading(40)); // Should return 'A'
console.log(grading(30));
console.log(grading(50));
console.log(grading(60));
console.log(grading(80));