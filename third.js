function calculatePayee(grossSalary) {
    let taxRate;
    if (grossSalary <= 24000) {
        taxRate = 0.1; // 10%
    } else if (grossSalary <= 48000) {
        taxRate = 0.25; // 25%
    } else {
        taxRate = 0.3; // 30%
    }
    return grossSalary * taxRate;
}

function calculateNHIFDeduction(grossSalary) {
    if (grossSalary <= 5999) {
        return 150;
    } else if (grossSalary <= 7999) {
        return 300;
    } else if (grossSalary <= 11999) {
        return 400;
    } else if (grossSalary <= 14999) {
        return 500;
    } else if (grossSalary <= 19999) {
        return 600;
    } else if (grossSalary <= 24999) {
        return 750;
    } else if (grossSalary <= 29999) {
        return 850;
    } else if (grossSalary <= 34999) {
        return 900;
    } else if (grossSalary <= 39999) {
        return 950;
    } else if (grossSalary <= 44999) {
        return 1000;
    } else if (grossSalary <= 49999) {
        return 1100;
    } else {
        return 1200;
    }
}

function calculateNSSFDeduction(grossSalary) {
    return grossSalary * 0.06; // Assuming 6% deduction
}

function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const payee = calculatePayee(grossSalary);
    const nhifDeduction = calculateNHIFDeduction(grossSalary);
    const nssfDeduction = calculateNSSFDeduction(grossSalary);
    
    const totalDeductions = payee + nhifDeduction + nssfDeduction;
    const netSalary = grossSalary - totalDeductions;
    
    return { grossSalary, payee, nhifDeduction, nssfDeduction, netSalary };
}

// User Input and Output
function main() {
    const basicSalary = parseFloat(prompt("Enter Basic Salary: "));
    const benefits = parseFloat(prompt("Enter Benefits: "));
    
    if (isNaN(basicSalary) || isNaN(benefits)) {
        alert("Please enter valid numerical values for salazry and benefits.");
        return;
    }
    
    const { grossSalary, payee, nhifDeduction, nssfDeduction, netSalary } = calculateNetSalary(basicSalary, benefits);
    
    alert(`Results:
    Gross Salary: Ksh ${grossSalary.toFixed(2)}
    Payee (Tax): Ksh ${payee.toFixed(2)}
    NHIF Deduction: Ksh ${nhifDeduction.toFixed(2)}
    NSSF Deduction: Ksh ${nssfDeduction.toFixed(2)}
    Net Salary: Ksh ${netSalary.toFixed(2)}`);
}

// Start the program
main();