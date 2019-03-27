function Person(serialNum) {
    this.id = `${serialNum}_${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    this.name = null;
    this.age = null;
    this.isHasPassport = null;
    this.gender = null; 
    this.payment = null;
    this.healthy = null;
};

Person.prototype.init = function (name, age, isHasPassport, gender, payment, healthy) {
    this.name = name;
    this.age = age;
    this.isHasPassport = isHasPassport;
    this.gender = gender;
    this.payment = payment;
    this.healthy = healthy;
};

Person.prototype.initDefault = function () {
	this.init(
		getDefaultName(),
		getDefaultAge(),
		getDefaultIsHasPassport(),
		getDefaultGender(),
		getDefaultPayment(),
		getDefaultHealthy()
	);
};