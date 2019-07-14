let Apple = function () {
    this.weight = 10;
    this.decrease = function () {
        if (this.weight > 0) {
            this.weight--;
        }
    };
    this.isEmpty = function () {
        if (this.weight === 0) {
            return true;
        }
        return false;
    };
    this.getWeight = function () {
        return this.weight;
    };
};
let Human = function (name, gender, weight) {
    this.name = name;
    this.gender = gender;
    this.weight = weight;
    this.isMale = function () {
        if (this.gender === true) {
            return true;
        }
        return false;
    };
    this.setGender = function (gender) {
        this.gender = gender;
    };
    this.checkApple = function (apple) {
        if (!apple.isEmpty()) {
            return true;
        }

        return false;
    };
    this.eat = function (apple) {
        apple.decrease();
        this.weight++;
    };
    this.say = function () {
        alert("Hello!");
    };
    this.getName = function () {
        return this.name;
    };
    this.setName = function (name) {
        this.name = name;
    };
    this.getWeight = function () {
        return this.weight;
    };
    this.setWeight = function (weight) {
        this.weight = weight;
    };
};
