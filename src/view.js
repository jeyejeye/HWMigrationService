const inputPersonForm = document.querySelector('#inputPersonForm');

inputPersonForm.addEventListener('click', (event) => {
    
    let target = event.target;
    
    if (target.tagName != 'BUTTON') {
        return;
    }
    if (target.id === 'generate') {
        configuration.setDefault();
        let data = configuration.getData();
        personsView.renderPersonsData(data);
    }    
    if (target.id === 'clear') {
        configuration.clear(); 
        personsView.clearPersonsData();
        personsView.renderConfigurationData();
        personsView.renderPersonStatus();
        document.getElementById("start").disabled = true;
    }
    if (target.id === 'add') {
        let personsData = personsView.getPersonsData();
        configuration.init(personsData.names,personsData.ages,personsData.isHasPassport,personsData.genders,personsData.payments,personsData.healthies,personsData.quantityPersons);
        let personArr = configuration.getPersons();
        personsView.renderConfigurationData(personArr);
        personsView.renderPersonStatus(personArr);
        document.getElementById("start").disabled = false;
    }
    if (target.id === 'start') {
        startCheck();
    }
});


class PersonsView {
	constructor() {
	    this.inputQty = document.querySelector("#qty");
    	this.inputName = inputPersonForm.querySelector("#name");
    	this.inputAge = inputPersonForm.querySelector("#age");
    	this.inputPassport = inputPersonForm.querySelector("#passport");
    	this.inputGender = inputPersonForm.querySelector("#gender");
    	this.inputPayment = inputPersonForm.querySelector("#payment");
    	this.inputHealth = inputPersonForm.querySelector("#health");
    	this.configurationData = document.querySelector("#configurationData");
    	this.personStatus = document.querySelector("#personStatus");
	}

// personsView.getPersonsData()
    getPersonsData(){
    return {
        quantityPersons: this.inputQty.value,
		names: this.inputName.value,
		ages: this.inputAge.value,
		isHasPassport: this.inputPassport.value,
		genders: this.inputGender.value,
		payments: this.inputPayment.value,
		healthies: this.inputHealth.value,
    }  
    }

    renderPersonsData(data) {
        this.inputQty.value = data.quantityPersons;
        this.inputName.value = data.names;
        this.inputAge.value = data.ages;
        this.inputPassport.value = data.isHasPassport;
        this.inputGender.value = data.genders;
        this.inputPayment.value = data.payments;
        this.inputHealth.value = data.healthies;
    }

    clearPersonsData() {
        this.inputQty.value = '';
        this.inputName.value = '';
        this.inputAge.value = '';
        this.inputPassport.value = '';
        this.inputGender.value = '';
        this.inputPayment.value = '';
        this.inputHealth.value = '';
    }

    renderConfigurationData(personArr) {
    let htmlData = `<h2>Configuration</h2>
    <div class="table__header">
        <div class="row">
            <div class="col-2">ID</div>
            <div class="col-2">Name</div>
            <div class="col-1">Age</div>
            <div class="col-1">Passport</div>
            <div class="col-2">Gender</div>
            <div class="col-2">Payment</div>
            <div class="col-2">Healty</div>
        </div>
    </div>`;    
    if (personArr){     
        for(let i =0; i < personArr.length; i++){
            htmlData += `<div class="row configurationData__Row">
                <div class="col-2">
                    ${personArr[i].id}
                </div>
                <div class="col-2">
                    ${personArr[i].name}
                </div>
                <div class="col-1">
                    ${personArr[i].age}
                </div>
                <div class="col-1">
                    ${personArr[i].isHasPassport}
                </div>
                <div class="col-2" >
                ${personArr[i].gender}
                </div>
                <div class="col-2" >
                ${personArr[i].payment}$
                </div>
                <div class="col-2" >
                ${personArr[i].healthy}%
                </div>
            </div>`;      
        }
    }
    
    configurationData.innerHTML = htmlData;
    }


    renderPersonStatus(personArr) {
    let htmlData = '';
    this.personStatus.style.visibility = "hidden";

    if (personArr &&  personArr.length > 0){ 
        this.personStatus.style.visibility = "visible";     
        for(let i =0; i < personArr.length; i++){
            htmlData += `<div class="row" id="${personArr[i].id}">
            <div class="col-2 border">
                Id: ${personArr[i].id} <br>
                Name: ${personArr[i].name} <br>
                Age:  ${personArr[i].age} <br>
                Passport: ${personArr[i].isHasPassport} <br>
                Gender: ${personArr[i].gender} <br>
                Payment: ${personArr[i].payment}$ <br>
                Healty: ${personArr[i].healthy}%
            </div>
            <div class="col-10">
                <div class="personStatus__block">
                    <h3>Migration Service</h3>
                </div>
                <div class="row">
                    <div class="col-4 personStatus__block">
                        <h4>Police Department</h4>
                        <div class="row">
                            <div class="col-4">
                                Age
                                <div class="personStatus__status" id="${personArr[i].id}age"></div>
                            </div>
                            <div class="col-4">
                                Gender + Age
                                <div class="personStatus__status" id="${personArr[i].id}genderAge"></div>
                            </div>
                            <div class="col-4">
                                Passport
                                <div class="personStatus__status" id="${personArr[i].id}passport"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-4 personStatus__block">
                        <h4>Medical Department</h4>
                        <div class="row">
                            <div class="col-6">
                                Health
                                <div class="personStatus__status" id="${personArr[i].id}health"></div>
                            </div>
                            <div class="col-6">
                                Health +Gender
                                <div class="personStatus__status" id="${personArr[i].id}healthGender"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-4 personStatus__block">
                        <h4>Bank Department</h4>
                        <div class="row">
                            <div class="col-12">
                                Gender + Payment
                                <div class="personStatus__status" id="${personArr[i].id}payment"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;      
        }
    }
    this.personStatus.innerHTML = htmlData;
    }

    renderStatusApproved(id,name) {
        document.getElementById(id+name).style.backgroundColor = "#5BCF00";
    }

    renderStatusRejected(id,name) {
        document.getElementById(id+name).style.backgroundColor = "#CB1615";
        document.getElementById(id).style.backgroundColor = "rgba(255, 0, 0,0.3)";
    }   

    renderRowApproved(id) {
        document.getElementById(id).style.backgroundColor = "rgba(0, 255, 0,0.3)";
    }

    renderRowRejected(id) {
        document.getElementById(id).style.backgroundColor = "rgba(255, 0, 0,0.3)";
    }  

    renderRowCancelApproved(id) {
        document.getElementById(id).style.backgroundColor = "rgba(0, 255, 0,0.6)";
    }
}