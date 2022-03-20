const employee = {
    name: "John",
    streetAddress: "123 Main St."     
}
// 1) returns an employee with the original 
//    key value pairs and the new key value pair
// 2} it does not modify the original employee, 
//    but rather returns a clone with the new data
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee}
    newEmployee[key] = value
    return newEmployee
}
// 1) updates `employee` with the given `key` and `value` 
//    (it is destructive) and returns the entire updated employee
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key]  = value
    return employee
}
// 1) deletes `key` from a clone of employee and returns the 
//    new employee (it is non-destructive)
// 2) does not modify the original employee (it is non-destructive)
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee}
    delete newEmployee[key]
    return newEmployee
}
// 1) returns employee without the deleted key/value pair
// 2) modifies the original employee
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}



