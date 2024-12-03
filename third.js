// Kenyan Net Salary Calculator

class NetSalaryCalculator {
    // PAYE (Tax) Calculation
    calculatePAYE(monthlyGrossSalary) {
        // 2024 KRA PAYE Rates (Monthly)
        const taxBrackets = [
            { min: 0, max: 24000, rate: 0 },
            { min: 24001, max: 32333, rate: 10 },
            { min: 32334, max: 40000, rate: 15 },
            { min: 40001, max: 48000, rate: 20 },
            { min: 48001, max: 72000, rate: 25 },
            { min: 72001, max: Infinity, rate: 30 }
        ];

        let tax = 0;
        for (let bracket of taxBrackets) {
            if (monthlyGrossSalary > bracket.min) {
                const taxableAmount = Math.min(monthlyGrossSalary, bracket.max) - bracket.min;
                tax += taxableAmount * (bracket.rate / 100);
            }
        }

        return Math.round(tax);
    }

    // NHIF Deduction Calculation
    calculateNHIF(monthlyGrossSalary) {
        // 2024 NHIF Contribution Rates
        const nhifRates = [
            { min: 0, max: 5999, contribution: 150 },
            { min: 6000, max: 7999, contribution: 300 },
            { min: 8000, max: 11999, contribution: 400 },
            { min: 12000, max: 14999, contribution: 500 },
            { min: 15000, max: 19999, contribution: 600 },
            { min: 20000, max: 24999, contribution: 750 },
            { min: 25000, max: 29999, contribution: 850 },
            { min: 30000, max: 34999, contribution: 900 },
            { min: 35000, max: 39999, contribution: 950 },
            { min: 40000, max: 44999, contribution: 1000 },
            { min: 45000, max: 49999, contribution: 1100 },
            { min: 50000, max: 59999, contribution: 1200 },
            { min: 60000, max: 69999, contribution: 1300 },
            { min: 70000, max: 79999, contribution: 1400 },
            { min: 80000, max: 89999, contribution: 1500 },
            { min: 90000, max: 99999, contribution: 1600 },
            { min: 100000, max: Infinity, contribution: 1700 }
        ];

        // Find the correct NHIF contribution
        const nhifContribution = nhifRates.find(
            rate => monthlyGrossSalary >= rate.min && monthlyGrossSalary <= rate.max
        );

        return nhifContribution ? nhifContribution.contribution : 1700;
    }

    // NSSF Deduction Calculation (2013 rates)
    calculateNSSF(monthlyBasicSalary) {
        const tierOne = Math.min(monthlyBasicSalary, 6000);
        const tierTwo = Math.max(0, Math.min(monthlyBasicSalary - 6000, 6000));

        const tierOneContribution = tierOne * 0.06;
        const tierTwoContribution = tierTwo * 0.06;

        return Math.round(tierOneContribution + tierTwoContribution);
    }

    // Calculate Net Salary
    calculateNetSalary(basicSalary, benefits = 0) {
        const grossSalary = basicSalary + benefits;
        
        const payee = this.calculatePAYE(grossSalary);
        const nhifDeduction = this.calculateNHIF(grossSalary);
        const nssfDeduction = this.calculateNSSF(basicSalary);

        const totalDeductions = payee + nhifDeduction + nssfDeduction;
        const netSalary = grossSalary - totalDeductions;

        return {
            basicSalary,
            benefits,
            grossSalary,
            payee,
            nhifDeduction,
            nssfDeduction,
            totalDeductions,
            netSalary
        };
    }
}

// Example Usage
function calculateSalary(basicSalary, benefits = 0) {
    const calculator = new NetSalaryCalculator();
    const salaryBreakdown = calculator.calculateNetSalary(basicSalary, benefits);
    
    console.log('Salary Breakdown:');
    console.log(`Basic Salary: KES ${salaryBreakdown.basicSalary}`);
    console.log(`Benefits: KES ${salaryBreakdown.benefits}`);
    console.log(`Gross Salary: KES ${salaryBreakdown.grossSalary}`);
    console.log(`PAYE (Tax): KES ${salaryBreakdown.payee}`);
    console.log(`NHIF Deduction: KES ${salaryBreakdown.nhifDeduction}`);
    console.log(`NSSF Deduction: KES ${salaryBreakdown.nssfDeduction}`);
    console.log(`Total Deductions: KES ${salaryBreakdown.totalDeductions}`);
    console.log(`Net Salary: KES ${salaryBreakdown.netSalary}`);

    return salaryBreakdown;
}

// Demonstration
calculateSalary(50000, 10000);