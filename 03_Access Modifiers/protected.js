var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    function Student(id, name) {
        this.studentID = id;
        this.studentName = name;
    }
    return Student;
}());
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person(id, name, dept) {
        var _this = _super.call(this, id, name) || this;
        _this.department = dept;
        return _this;
    }
    Person.prototype.getInfo = function () {
        return ("Student ID: ".concat(this.studentID, " \nStudent Name: ").concat(this.studentName, " \nBranch: ").concat(this.department));
    };
    return Person;
}(Student));
var student = new Person(202003050, "Sudeep Poojary", "Information Technology");
console.log(student.getInfo());
