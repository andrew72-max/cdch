function checkStudentGrade(studentMarks){
    

}

function grading(studentgrade ) {
    let studentMarks = 100;
    if (studentgrade >79 ){
        console.log("A");
    } else if (studentgrade >=60 && studentgrade  <=79 ){
        console.log("B");
    } else if(studentgrade   >=49 && studentgrade  <=59){
        console.log("C");
    } else if(studentgrade   >=40 && studentgrade   <= 49){
        console.log('D');
    } else if(studentgrade   <40){
        console.log("E")
    } else{
        console.log("please enter a valid grade")
    }
}
console.log (grading("80"))//should return A
console.log (grading("60"))//should return B
console.log (grading("59"))//should return C
console.log (grading("40"))//should return D
console.log (grading("39"))//should return E
