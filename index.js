// Write your solution in this file!
const employee = {
    name: "Maria Eduarda",
    streetAddress: "405 N Wabash Ave",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const employeeCopy = {...employee};
    employeeCopy[key] = value;
    return employeeCopy;
}   

// console.log(updateEmployeeWithKeyAndValue(employee, "streetAddress", "123 N Duda St"))

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

// console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Vladimir"));
// console.log(employee);

function deleteFromEmployeeByKey(employee, key) {
    const employeeCopy = {...employee};
    delete employeeCopy[key];
    return employeeCopy;
}

// console.log(deleteFromEmployeeByKey(employee, "name"));
// console.log(employee);

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;    
}

// console.log(destructivelyDeleteFromEmployeeByKey(employee, "streetAddress"));
// console.log(employee);