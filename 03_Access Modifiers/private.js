var AccessPrivate = /** @class */ (function () {
    function AccessPrivate(id, name) {
        this.employeeID = id;
        this.employeeName = name;
    }
    AccessPrivate.prototype.display = function () {
        return ("Employee ID: ".concat(this.employeeID, " \nEmployee: ").concat(this.employeeName));
    };
    return AccessPrivate;
}());
var employee = new AccessPrivate(202003050, "Sudeep Poojary");
console.log(employee.display());
