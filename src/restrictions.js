const personRestrictions = {
	age: {min: 16, max: 90},
	isHasPassport: {min: false, max: true},
	gender: {min : 'female', max: 'male'},
	payment: {min: 900, max: 1100, step: 100},
	healty: {min: 65, max: 98},
	quantityInGroup: {min: 2, max: 5},
}

let parametersVisa = {
	minMaleAge: 22,
	minFemaleAge: 18,
	minMaleBank: 75,
	minFemaleBank: 85,
	minMaleHealth: 1000,
	minFemaleHealth: 950,
}