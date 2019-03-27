const personRestrictions = {
	age: {min: 16, max: 24},
	isHasPassport: {min: false, max: true},
	gender: {min : 'female', max: 'male'},
	payment: {min: 900, max: 1100, step: 100},
	healty: {min: 65, max: 95},
	
	quantityInGroup: {min: 2, max: 5},
}