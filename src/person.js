class Person {
	constructor(serialNum) {
		const dt = new Date();
    	this.id = `${serialNum}_${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()}`;
    	this.name = null;
    	this.age = null;
    	this.isHasPassport = null;
    	this.gender = null; 
    	this.payment = null;
    	this.healthy = null;
	}
	
	init(name, age, isHasPassport, gender, payment, healthy) {
        this.name = name;
        this.age = age;
        this.isHasPassport = isHasPassport;
        this.gender = gender;
        this.payment = payment;
        this.healthy = healthy;
    }
	
	initDefault() {
    	this.init(
    		getDefaultName(),
    		getDefaultAge(),
    		getDefaultIsHasPassport(),
    		getDefaultGender(),
    		getDefaultPayment(),
    		getDefaultHealthy()
    	);
    }
}