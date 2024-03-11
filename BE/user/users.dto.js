"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserDto = void 0;
var class_validator_1 = require("class-validator");
var CreateUserDto = (function () {
    function CreateUserDto() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.MinLength)(2),
        (0, class_validator_1.MaxLength)(32),
        __metadata("design:type", String)
    ], CreateUserDto.prototype, "username", void 0);
    __decorate([
        (0, class_validator_1.IsString)({ message: 'Invalid phone number' }),
        (0, class_validator_1.Matches)(/^\d{9,10}$/, { message: 'Phone number must be 9 or 10 digits long' }),
        __metadata("design:type", String)
    ], CreateUserDto.prototype, "phoneNumber", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.MinLength)(6, { message: 'Password must be at least 6 characters long' }),
        (0, class_validator_1.MaxLength)(12, { message: 'Password cannot be longer than 12 characters' }),
        (0, class_validator_1.Matches)(/^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{6,12}$/, { message: 'Password does not meet requirements' }),
        __metadata("design:type", String)
    ], CreateUserDto.prototype, "password", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], CreateUserDto.prototype, "confirmPassword", void 0);
    return CreateUserDto;
}());
exports.CreateUserDto = CreateUserDto;
//# sourceMappingURL=users.dto.js.map