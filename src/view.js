const inputPersonForm = document.querySelector('#inputPersonForm');

inputPersonForm.addEventListener('click', function(event) {
    
    let target = event.target;
    
    if (target.tagName != 'BUTTON') {
        return;
    }
    if (target.id === 'generate') {
        
    }    
});


function PersonsView () {

}

PersonsView.prototype.getPersonsData = function (){

}

PersonsView.prototype.renderPersonsData = function (){
     let persons = Configuration.prototype.getPersons ();   
}

PersonsView.prototype.renderConfigurationData = function (){
    
}


PersonsView.prototype.renderConfigurationData = function (){
    
}