

function verifyPerson (person) {
        console.log('Обработка заявления...'+ person ) ;
    let promise = new Promise(function(resolve, reject) {
        resolve(person)           
    });
    return promise;
}


function checkAgePolice (person) {
        if (person.age >= 18) {
            setTimeout(() => { return Promise.resolve(person);}, 5000); 
        } else {                
            setTimeout(() => { return Promise.reject('checkAgePolice');}, 5000); 
        }
};

function checkGenderAgePolice (person) {
    let cond = false;

    console.log('checkGenderAgePolice'+ person.id )   
        
        if (person.gender === 'female' && person.age >= 18) {
            cond = true;
        };

        if (person.gender === 'male' && person.age >= 22) {
            cond = true;            
        };

        if(cond) {
           setTimeout(() => { return Promise.resolve(person);}, 8000); 
        } else {
          setTimeout(() => { return Promise.reject('checkGenderAgePolice');}, 8000);   
        }                
};

function checkPassportPolice (person) {
    console.log('checkPassportPolice'+ person.id  )

        if (person.isHasPassport === true) {
            setTimeout(() => { return Promise.resolve(person);}, 12000); 
        } else {
            setTimeout(() => { return Promise.reject('checkPassportPolice');}, 8000);   
        }
};

// Вызываем промис
let person = allPersons[0];
let person2 = allPersons[1];

verifyPerson(person)
        .then(checkAgePolice(person))
        .then(checkGenderAgePolice(person))
        .then(checkPassportPolice(person))
        .catch(error => console.log(error.message)); 

verifyPerson(person2)
        .then(checkAgePolice(person2))
        .then(checkGenderAgePolice(person2))
        .then(checkPassportPolice(person2))
        .catch(error => console.log(error.message)); 




