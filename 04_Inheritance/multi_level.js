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
var Grandfather = /** @class */ (function () {
    function Grandfather() {
    }
    Grandfather.prototype.retired = function () {
        console.log("Not Working");
    };
    return Grandfather;
}());
var Father = /** @class */ (function (_super) {
    __extends(Father, _super);
    function Father() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Father.prototype.employee = function () {
        console.log("Working");
    };
    return Father;
}(Grandfather));
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.student = function () {
        console.log("Studying");
    };
    return Child;
}(Father));
var obj = new Child();
obj.retired();
obj.employee();
obj.student();
