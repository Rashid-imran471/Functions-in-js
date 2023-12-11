function calculateTax(){
    const lowIncomeTax=0.02;
    const mediumIncomeTax=0.05;
    const highIncomeTax=0.10;

    return function(income){
        if(income<=50000){
            return income*lowIncomeTax;
        }
        else if(income>50000 && income<100000)
        {
            return income*mediumIncomeTax;
        }
        else if(income>100000)
        {
            return income*highIncomeTax;
        }
    };
}
const taxCalculator= calculateTax();

const tax1 = taxCalculator(30000);
const tax2 = taxCalculator(50000);
const tax3 = taxCalculator(222000);

console.log(`Tax for income $30,000: $${tax1}`);
console.log(`Tax for income $75,000: $${tax2}`);
console.log(`Tax for income $120,000: $${tax3}`);