function Configuration () {
	this.SEPARATOR = ',';
	
	this clear();
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

Configuration.prototype.setDefaultQuantityPersons() {
	this.valQuantityPersons = 2;
	this.quantityPersons = this.valQuantityPersons.toString;
}

Configuration.prototype.setDefaultNames() {
	for (let i = 0; i < this.valQuantityPersons; i++) {
		this.arrNames.push(getDefaultName());
	}
	this.names = this.arrNames.join(this.SEPARATOR);
}

Configuration.prototype.setDefaultAges() {
	for (let i = 0; i < this.valQuantityPersons; i++) {
		this.arrAges.push(getDefaultAge());
	}
	this.ages = this.arrAges.join(this.SEPARATOR);
}

Configuration.prototype.setDefaultIsHasPassport() {
	for (let i = 0; i < this.valQuantityPersons; i++) {
		this.arrIsHasPassport.push(getDefaultIsHasPassport());
	}
	this.isHasPassport = this.arrIsHasPassport.join(this.SEPARATOR);
}

Configuration.prototype.setDefaultGenders() {
	for (let i = 0; i < this.valQuantityPersons; i++) {
		this.arrGenders.push(getDefaultGender());
	}
	this.genders = this.arrGenders.join(this.SEPARATOR);
}

Configuration.prototype.setDefaultPayments() {
	for (let i = 0; i < this.valQuantityPersons; i++) {
		this.arrPayments.push(getDefaultPayment());
	}
	this.payments = this.arrPayments.join(this.SEPARATOR);
}

Configuration.prototype.setDefaultHealthies() {
	for (let i = 0; i < this.valQuantityPersons; i++) {
		this.arrHealthies.push(getDefaultHealthy());
	}
	this.healthies = this.arrHealthies.join(this.SEPARATOR);
}

Configuration.prototype.setDefault() {
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
	
	return true; 
}

Configuration.prototype.verifyPayments = function () {
    this.arrPayments = this.payments.split(this.SEPARATOR);
	
	if (this.arrGenders.length > this.valQuantityPersons) {
		this.errorMessage = `Inputed list of payments "\[${this.arrGenders}\]" contains more elements then specified in "quantity of person" ${this.quantityPersons}`;
		return false;
	}

	if (this.arrGenders.length < this.valQuantityPersons) {
		this.errorMessage = `Inputed list of payments "\[${this.arrGenders}\]" contains less elements then specified in "quantity of person" ${this.quantityPersons}`;
		return false;
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

Configuration.prototype.getPersons () {
	const rez = [];
	
	if (!verify()) {
		return rez;
	}
	
	for (let i = 0; i < this.valQuantityPersons; i++) {
		const person = new Person(allPerson.length + 1);
		
		person.name = this.arrNames[i].trim();
		person.age = this.arrAges[i];
		person.isHasPassport = this.arrIsHasPassport[i];
		person.gender = this.arrGenders[i];
		person.payment = this.arrHealthies[i];
		person.healthy = this.arrHealthie[i];
		
		rez.push(person);
		allPersons.push(person);
	}
	
	return rez;
}