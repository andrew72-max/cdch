# Student Grade Checker

This project contains two main functions for checking the grade of a student based on their marks.

## Functions

### `checkStudentGrade(studentMarks)`

This function is a placeholder for future implementation of a function that checks the student’s grade based on the provided marks. 

### `grading(studentGrade)`

The `grading` function takes a student's grade as input (a number) and prints their letter grade based on the following criteria:
- 80 or above: "A"
- 60 to 79: "B"
- 50 to 59: "C"
- 40 to 49: "D"
- Below 40: "E"

## Example Usage

```javascript
console.log(grading(80)); // Output: "A"
console.log(grading(60)); // Output: "B"
console.log(grading(59)); // Output: "C"
console.log(grading(40)); // Output: "D"
console.log(grading(39)); // Output: "E"




# Speed Limit Demerit Points Calculator

This project defines a function to calculate demerit points based on a driver's speed and determines if their license will be suspended.

## Function: `toCalculateSpeed(speedlevel)`

This function checks the speed level of a driver:
- It compares the driver's speed to the speed limit (70 km/h).
- For every 5 km/h over the limit, 1 demerit point is added.
- If the driver accumulates more than 12 demerit points, their license will be suspended.

### Example Usage:

```javascript
toCalculateSpeed(224); // Output: 30 demerit points and "license suspended"



# Salary Calculator

This project calculates an employee's net salary by considering the gross salary, payee tax, NHIF (National Hospital Insurance Fund) deduction, and NSSF (National Social Security Fund) deduction.

## Functions

### `calculatePayee(grossSalary)`
Calculates the tax payable based on the gross salary:
- <= 24,000: 10% tax
- 24,001 to 48,000: 25% tax
- > 48,000: 30% tax

### `calculateNHIFDeduction(grossSalary)`
Calculates the NHIF deduction based on the gross salary range.

### `calculateNSSFDeduction(grossSalary)`
Calculates the NSSF deduction, assumed to be 6% of the gross salary.

### `calculateNetSalary(basicSalary, benefits)`
Calculates the net salary after deductions. It returns the gross salary, payee tax, NHIF deduction, NSSF deduction, and net salary.

### `main()`
Prompts the user for input (basic salary and benefits), then outputs the calculated salary breakdown.

## Example Usage

```javascript
main(); // Prompts the user to enter basic salary and benefits
