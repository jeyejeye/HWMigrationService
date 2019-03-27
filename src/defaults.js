function getDefaultName() {
	return faker.name.lastName() + ' ' + faker.name.firstName();
};

function getDefaultAge() {
	return getRandomInt(personRestrictions.age.min, personRestrictions.age.max);
};

function getDefaultIsHasPassport() {
	if (getRandomInt(0, 1)) {
		return personRestrictions.isHasPassport.min;
	} else {
		return personRestrictions.isHasPassport.max;
	}
};

function getDefaultGender() {
	if (getRandomInt(0, 1)) {
		return personRestrictions.gender.min;
	} else {
		return personRestrictions.gender.max;
	}
};

function getDefaultPayment() {
	return personRestrictions.payment.step
		* getRandomInt(
			personRestrictions.payment.min / personRestrictions.payment.step,
			personRestrictions.payment.max / personRestrictions.payment.step);
};

function getDefaultHealthy() {
	return getRandomInt(personRestrictions.healty.min, personRestrictions.healty.max);
};

function getRandomInt(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}