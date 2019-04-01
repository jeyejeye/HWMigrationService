const personRestrictions = {
	age: { min: 16, max: 90 },
	isHasPassport: { min: false, max: true },
	gender: { min: 'female', max: 'male' },
	payment: { min: 900, max: 1100, step: 100 },
	healty: { min: 65, max: 98 },
	quantityInGroup: { min: 2, max: 5 },
}

let parametersVisa = {
	_qtyPersons:8,
	get qtyPersons() {
		return this._qtyPersons;
	},
	set qtyPersons(value) {
		value >= 2 && value <= 100 ?
			this._qtyPersons = value :
			console.log(new Error("ERROR! qtyPersons"))
	},
	_minMaleAge: 22,
	get minMaleAge() {
		return this._minMaleAge;
	},
	set minMaleAge(value) {
		value > 0 && value < 120 ?
			this.__minMaleAge = value :
			console.log(new Error("ERROR! minMaleAge"))
	},
	_minFemaleAge: 18,
	get minFemaleAge() {
		return this._minFemaleAge;
	},
	set minFemaleAge(value) {
		value > 0 && value < 120 ?
			this._minFemaleAge = value :
			console.log(new Error("ERROR! minFemaleAge"))
	},
	_minMaleBank: 1000,
	get minMaleBank() {
		return this._minMaleBank;
	},
	set minMaleBank(value) {
		value > 0 ?
			this._minMaleBank = value :
			console.log(new Error("ERROR! minMaleBank"))
	},
	_minFemaleBank: 950,
	get minFemaleBank() {
		return this._minFemaleBank;
	},
	set minFemaleBank(value) {
		value > 0 ?
			this._minFemaleBank = value :
			console.log(new Error("ERROR! minFemaleBank"))
	},
	_minMaleHealth: 75,
	get minMaleHealth() {
		return this._minMaleHealth;
	},
	set minMaleHealth(value) {
		value > 0 && value < 100 ?
			this._minMaleHealth = value :
			console.log(new Error("ERROR! minMaleHealth"))
	},
	_minFemaleHealth: 85,
	get minFemaleHealth() {
		return this._minFemaleHealth;
	},
	set minFemaleHealth(value) {
		value > 0 && value < 100 ?
			this._minFemaleHealth = value :
			console.log(new Error("ERROR! minFemaleHealth"))
	},
}
 function updateParametersVisa(parametersVisa) {
	parametersVisa.qtyPersons = +document.querySelector('#qtyPersons').value;
	parametersVisa.minMaleAge = +document.querySelector('#minMaleAge').value;
	parametersVisa.minFemaleAge = +document.querySelector('#minFemaleAge').value;
	parametersVisa.minMaleBank = +document.querySelector('#minMaleBank').value;
	parametersVisa.minFemaleBank = +document.querySelector('#minFemaleBank').value;
	parametersVisa.minMaleHealth = +document.querySelector('#minMaleHealth').value;
	parametersVisa.minFemaleHealth = +document.querySelector('#minFemaleHealth').value;
	
 }


//view

function renderParametersVisa(parametersVisa){
	document.querySelector('#qtyPersons').value = parametersVisa.qtyPersons;
	document.querySelector('#minMaleAge').value = parametersVisa.minMaleAge;
	document.querySelector('#minFemaleAge').value = parametersVisa.minFemaleAge;
	document.querySelector('#minMaleBank').value = parametersVisa.minMaleBank;
	document.querySelector('#minFemaleBank').value = parametersVisa.minFemaleBank;
	document.querySelector('#minMaleHealth').value = parametersVisa.minMaleHealth;
	document.querySelector('#minFemaleHealth').value = parametersVisa.minFemaleHealth;
} 

// Control

const updateVisaParametrs = document.querySelector('#updateVisaParametrs');

updateVisaParametrs.addEventListener('click', () => {
	let parametrs = parametersVisa;
	updateParametersVisa(parametrs);
	renderParametersVisa(parametrs);
});
