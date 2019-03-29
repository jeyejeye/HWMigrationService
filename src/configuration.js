function Configuration () {
	this.SEPARATOR = ',';
	this.clear();
}

Configuration.prototype.clear = function () {
	//Необработанные строки из инпутов
	this.names = '';
    this.ages = '';
    this.isHasPassport = '';
    this.genders = ''; 
    this.payments = '';
    this.healthies = '';
	this.quantityPersons = '';
	
	//Раcпарсеные на массивы строки из инпутов
	this.arrNames = [];
    this.arrAges = [];
    this.arrIsHasPassport = [];
    this.arrGenders = [] 
    this.arrPayments = [];
    this.arrHealthies = [];
	this.valQuantityPersons = 0;
	
	//текст ошибки при верификаци для юзера, (в каком месте юзер тупанул)
	this.errorMessage = '';
}

Configuration.prototype.init = function (names, ages, isHasPassport, genders, payments, healthies, quantityPersons) {
	this.clear();
	
	this.names = names;
    this.ages = ages;
    this.isHasPassport = isHasPassport;
    this.genders = genders; 
    this.payments = payments;
    this.healthies = healthies;
	this.quantityPersons = quantityPersons;	
}

Configuration.prototype.setDefaultQuantityPersons = function() {
	this.valQuantityPersons = 2;
	this.quantityPersons = this.valQuantityPersons.toString();
}

Configuration.prototype.setDefaultNames= function() {
	for (let i = 0; i < this.valQuantityPersons; i++) {
		this.arrNames.push(getDefaultName());
	}
	this.names = this.arrNames.join(this.SEPARATOR);
}

Configuration.prototype.setDefaultAges =function() {
	for (let i = 0; i < this.valQuantityPersons; i++) {
		this.arrAges.push(getDefaultAge());
	}
	this.ages = this.arrAges.join(this.SEPARATOR);
}

Configuration.prototype.setDefaultIsHasPassport =function() {
	for (let i = 0; i < this.valQuantityPersons; i++) {
		this.arrIsHasPassport.push(getDefaultIsHasPassport());
	}
	this.isHasPassport = this.arrIsHasPassport.join(this.SEPARATOR);
}

Configuration.prototype.setDefaultGenders =function() {
	for (let i = 0; i < this.valQuantityPersons; i++) {
		this.arrGenders.push(getDefaultGender());
	}
	this.genders = this.arrGenders.join(this.SEPARATOR);
}

Configuration.prototype.setDefaultPayments = function() {
	for (let i = 0; i < this.valQuantityPersons; i++) {
		this.arrPayments.push(getDefaultPayment());
	}
	this.payments = this.arrPayments.join(this.SEPARATOR);
}

Configuration.prototype.setDefaultHealthies =function() {
	for (let i = 0; i < this.valQuantityPersons; i++) {
		this.arrHealthies.push(getDefaultHealthy());
	}
	this.healthies = this.arrHealthies.join(this.SEPARATOR);
}

Configuration.prototype.setDefault =function() {
	this.clear();
	this.setDefaultQuantityPersons();
	this.setDefaultNames();
	this.setDefaultAges();
	this.setDefaultIsHasPassport();
	this.setDefaultGenders();
	this.setDefaultPayments();
	this.setDefaultHealthies();
}

Configuration.prototype.verifyQuantityPersons = function () {
	this.valQuantityPersons = +this.quantityPersons;
	
	if (this.valQuantityPersons < personRestrictions.quantityInGroup.min && this.valQuantityPersons > personRestrictions.quantityInGroup.max) {
		this.errorMessage = `Inputed value "${this.quantityPersons}" of "quantity of person" is out of range (\[${personRestrictions.quantityInGroup.min}..${personRestrictions.quantityInGroup.max}\])`;
		return false;
	}
	
	return true;
}

Configuration.prototype.verifyNames = function () {
	this.arrNames = this.names.split(this.SEPARATOR);
	
	if (this.arrNames.length > this.valQuantityPersons) {
		this.errorMessage = `Inputed list of names "\[${this.arrNames}\]" contains more elements then specified in "quantity of person" ${this.quantityPersons}`;
		return false;
	}

	if (this.arrNames.length < this.valQuantityPersons) {
		this.errorMessage = `Inputed list of names "\[${this.quantityPersons}\]" contains less elements then specified in "quantity of person" ${this.quantityPersons}`;
		return false;
	}
	
	return true; 
}

Configuration.prototype.verifyAges = function () {
    this.arrAges = this.ages.split(this.SEPARATOR);
	
	if (this.arrAges.length > this.valQuantityPersons) {
		this.errorMessage = `Inputed list of ages "\[${this.ages}\]" contains more elements then specified in "quantity of person" ${this.quantityPersons}`;
		return false;
	}

	if (this.arrAges.length < this.valQuantityPersons) {
		this.errorMessage = `Inputed list of ages "\[${this.ages}\]" contains less elements then specified in "quantity of person" ${this.quantityPersons}`;
		return false;
	}
	
	for (let i = 0; i < this.arrAges.length; i++) {
		if (!(this.arrAges[i] >= personRestrictions.age.min && this.arrAges[i] <= personRestrictions.age.max)) {
			this.errorMessage = `Inputed persons age value "${this.arrAges[i]}" is out of range \[${personRestrictions.age.min}..${personRestrictions.age.max}\]`;
			return false;
		}
	}
	
	return true; 
}

Configuration.prototype.verifyIsHasPassport = function () {
    this.arrIsHasPassport = this.isHasPassport.split(this.SEPARATOR);
	
	if (this.arrIsHasPassport.length > this.valQuantityPersons) {
		this.errorMessage = `Inputed list of passports presence "\[${this.arrIsHasPassport}\]" contains more elements then specified in "quantity of person" ${this.quantityPersons}`;
		return false;
	}

	if (this.arrIsHasPassport.length < this.valQuantityPersons) {
		this.errorMessage = `Inputed list of passports presence "\[${this.arrIsHasPassport}\]" contains less elements then specified in "quantity of person" ${this.quantityPersons}`;
		return false;
	}
	
	for (let i = 0; i < this.arrIsHasPassport.length; i++) {
		if (this.arrIsHasPassport[i] === 'false') {
			this.arrIsHasPassport[i] = false;
		} else if (this.arrIsHasPassport[i] === 'true') {
			this.arrIsHasPassport[i] = true;			
		} else {
			this.errorMessage = `Inputed persons passport existance "${this.arrIsHasPassport[i]}" is unknown. Passport existance for person must be ${personRestrictions.isHasPassport.min} or ${personRestrictions.isHasPassport.max}`;
			return false;
		}
	}
	
	return true; 
}

Configuration.prototype.verifyGenders = function () {
    this.arrGenders = this.genders.split(this.SEPARATOR);
	
	if (this.arrGenders.length > this.valQuantityPersons) {
		this.errorMessage = `Inputed list of persons gender "\[${this.arrGenders}\]" contains more elements then specified in "quantity of person" ${this.quantityPersons}`;
		return false;
	}

	if (this.arrGenders.length < this.valQuantityPersons) {
		this.errorMessage = `Inputed list of persons gender "\[${this.arrGenders}\]" contains less elements then specified in "quantity of person" ${this.quantityPersons}`;
		return false;
	}
	
	for (let i = 0; i < this.arrGenders.length; i++) {
		if (!(this.arrGenders[i] == personRestrictions.gender.min || this.arrGenders[i] == personRestrictions.gender.max)) {
			this.errorMessage = `Inputed persons gender "${this.arrGenders[i]}" is unknown. Gender must be ${personRestrictions.gender.min} or ${personRestrictions.gender.max}`;
			return false;
		}
	}	
	
	return true; 
}

Configuration.prototype.verifyPayments = function () {
    this.arrPayments = this.payments.split(this.SEPARATOR);
	
	if (this.arrPayments.length > this.valQuantityPersons) {
		this.errorMessage = `Inputed list of payments "\[${this.arrPayments}\]" contains more elements then specified in "quantity of person" ${this.quantityPersons}`;
		return false;
	}

	if (this.arrPayments.length < this.valQuantityPersons) {
		this.errorMessage = `Inputed list of payments "\[${this.arrPayments}\]" contains less elements then specified in "quantity of person" ${this.quantityPersons}`;
		return false;
	}

	for (let i = 0; i < this.arrPayments.length; i++) {
		if (!(this.arrPayments[i] >= personRestrictions.payment.min && this.arrPayments[i] <= personRestrictions.payment.max)) {
			this.errorMessage = `Inputed persons payment "${this.arrPayments[i]}" is out of range \[${personRestrictions.payment.min}..${personRestrictions.payment.max}\]`;
			return false;
		}
	}
	
	return true; 
}

Configuration.prototype.verifyHealthies = function () {
    this.arrHealthies = this.healthies.split(this.SEPARATOR);
	
	if (this.arrHealthies.length > this.valQuantityPersons) {
		this.errorMessage = `Inputed list of persons healsy "\[${this.arrHealthies}\]" contains more elements then specified in "quantity of person" ${this.quantityPersons}`;
		return false;
	}

	if (this.arrHealthies.length < this.valQuantityPersons) {
		this.errorMessage = `Inputed list of persons healsy "\[${this.arrHealthies}\]" contains less elements then specified in "quantity of person" ${this.quantityPersons}`;
		return false;
	}
	
	for (let i = 0; i < this.arrHealthies.length; i++) {
		if (!(this.arrHealthies[i] >= personRestrictions.healty.min && this.arrHealthies[i] <= personRestrictions.healty.max)) {
			this.errorMessage = `Inputed persons health value "${this.arrHealthies[i]}" is out of range \[${personRestrictions.healty.min}..${personRestrictions.healty.max}\]`;
			return false;
		}
	}
	
	return true; 
}

Configuration.prototype.verify = function() {	
	this.errorMessage = ''; //Пока ошибок нет.
	
	if (!this.verifyQuantityPersons()) {
		return false;
	}	
	if (!this.verifyNames()) {
		return false;
	}
	if (!this.verifyAges()) {

		return false;
	}
	if (!this.verifyIsHasPassport()) {
		return false;
	}
	if (!this.verifyGenders()) {
		return false;
	}
	if (!this.verifyPayments()) {
		return false;
	}
	if (!this.verifyHealthies()) {
		return false;
	}
	
	return true;	
}

Configuration.prototype.getPersons = function() {
	const rez = [];
	
	if (!this.verify()) {
		return rez;
	}
	
	for (let i = 0; i < this.valQuantityPersons; i++) {
		const person = new Person(allPersons.length + 1);
		person.name = this.arrNames[i].trim();
		person.age = this.arrAges[i];
		person.isHasPassport = this.arrIsHasPassport[i];
		person.gender = this.arrGenders[i];
		person.payment = this.arrPayments[i];
		person.healthy = this.arrHealthies[i];
		
		rez.push(person);
		allPersons.push(person);
	}
	
	return rez;
}

Configuration.prototype.getData = function() {
	return {
		quantityPersons: configuration.quantityPersons,
		names: configuration.names,
		ages: configuration.ages,
		isHasPassport: configuration.isHasPassport,
		genders: configuration.genders,
		payments: configuration.payments,
		healthies: configuration.healthies,
	}
}