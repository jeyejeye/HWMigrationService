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
    // let inputQty = this.inputQty.value;
    // let inputName = this.inputName.value;
    // let inputAge = inputPersonForm.querySelector("#age").value;
    // let inputPassport = inputPersonForm.querySelector("#passport").value;
    // let inputGender = inputPersonForm.querySelector("#gender").value;
    // let inputPayment = inputPersonForm.querySelector("#payment").value;
    // let inputHealth = inputPersonForm.querySelector("#health").value;
    

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