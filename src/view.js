const inputPersonForm = document.querySelector('#inputPersonForm');

inputPersonForm.addEventListener('click', function(event) {
    
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
    }
    if (target.id === 'start') {
        let personsData = personsView.getPersonsData();
        configuration.init(personsData.names,personsData.ages,personsData.isHasPassport,personsData.genders,personsData.payments,personsData.healthies,personsData.quantityPersons);
       }
});


function PersonsView () {
    this.inputQty = document.querySelector("#qty");
    this.inputName = inputPersonForm.querySelector("#name");
    this.inputAge = inputPersonForm.querySelector("#age");
    this.inputPassport = inputPersonForm.querySelector("#passport");
    this.inputGender = inputPersonForm.querySelector("#gender");
    this.inputPayment = inputPersonForm.querySelector("#payment");
    this.inputHealth = inputPersonForm.querySelector("#health");


}
// personsView.getPersonsData()
PersonsView.prototype.getPersonsData = function (){
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

PersonsView.prototype.renderPersonsData = function (data){
    this.inputQty.value = data.quantityPersons;
    this.inputName.value = data.names;
    this.inputAge.value = data.ages;
    this.inputPassport.value = data.isHasPassport;
    this.inputGender.value = data.genders;
    this.inputPayment.value = data.payments;
    this.inputHealth.value = data.healthies;

}

PersonsView.prototype.clearPersonsData = function (){
    this.inputQty.value = '';
    this.inputName.value = '';
    this.inputAge.value = '';
    this.inputPassport.value = '';
    this.inputGender.value = '';
    this.inputPayment.value = '';
    this.inputHealth.value = '';
}

PersonsView.prototype.renderConfigurationData = function (){
    
}


PersonsView.prototype.renderConfigurationData = function (){
    
}