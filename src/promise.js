// Police Department: 
// checking rule of age (age > 18, 5sec);
// checking rule of linking gender with age ( male: age must be more than 22, female: age must be more than 18, 8 sec)
// checking rule of having passport (12sec). 

// Bank Department: 
// checking rule of linking gender with payment (male: payment must be more than 1000$, female: payment must be more then 950$, 40sec)


// Police

function checkAgePolice (person) {
    console.log('start checkAgePolice'+ person.id )
    let cond = false;
            if (person.age >= 18) {
                cond = true;
            }     
    return new Promise(function(resolve){
        setTimeout(() => {
              resolve(cond);
            }, 5000);
         });
};

function checkGenderAgePolice (person) {
    let cond = false;
    console.log('start checkGenderAgePolice'+ person.id  )
        if (person.gender === 'female' && person.age >= 18) {
            cond = true;
        };

        if (person.gender === 'male' && person.age >= 22) {
            cond = true;            
        };
        return new Promise(function(resolve){
            setTimeout(() => {
                  resolve(cond);
                }, 8000);
             });        
};

function checkPassportPolice (person) {
    console.log('start checkPassportPolice'+ person.id  )
    return new Promise(function(resolve){
        setTimeout(() => {
              resolve(person.isHasPassport);
            }, 12000);
         });          
};




let verifyPolicePromice = function (person) {
         checkAgePolice(person)
        .then(response  => console.log("checkAgePolice " + person.name + " " + response ))
        .then(response  => checkGenderAgePolice(person))
        .then(response  => console.log("checkGenderAgePolice "+ person.name + " " + response ))
        .then(response  => checkPassportPolice(person))
        .then(response  => console.log("checkPassportPolice "+ person.name + " " + response ))
        .catch(error => console.log(error.message));   
        return Promise.resolve(true);     
    }

// Medical Department:
// checking rule of healthy (healthy > 75%, 15sec);
// checking rule of linking gender with healthy ( male: healthy must be more than 75%, female: healthy must be more than 85%, 15sec)

function checkHealthy (person) {
    console.log('start checkHealthy'+ person.id  )
    let cond = false;
    if (person.healthy > 75){
        cond = true;
    }
    return new Promise(function(resolve){
        setTimeout(() => {
              resolve(cond);
            }, 15000);
         });          
};

function checkHealthyAge (person) {
    let cond = false;
    console.log('start checkHealthyAge'+ person.id  )
        if (person.gender === 'female' && person.healthy > 85) {
            cond = true;
        };

        if (person.gender === 'male' && person.healthy > 75) {
            cond = true;            
        };
        return new Promise(function(resolve){
            setTimeout(() => {
                  resolve(cond);
                }, 15000);
             });        
};

let verifyMedicalPromice = function (person) {
    checkHealthy(person)
   .then(response  => console.log("checkHealthy " + person.name + " " +response ))
   .then(response  => checkHealthyAge(person))
   .then(response  => console.log("checkGenderAgePolice "+ person.name + " " + response ))
   .catch(error => console.log(error.message));   
   return Promise.resolve(true);     
}

// Bank Department: 
// checking rule of linking gender with payment (male: payment must be more than 1000$, female: payment must be more then 950$, 40sec)

function checkBank (person) {
    console.log('checkBank'+ person.id  )
    let cond = false;
    if (person.gender === 'female' && person.payment > 950){
        cond = true;
    } 
    if (person.gender === 'male' && person.payment > 1000){
        cond = true;
    }
    return new Promise(function(resolve){
        setTimeout(() => {
              resolve(cond);
            }, 40000);
         });          
};

let checkBankPromice = function (person) {
    checkBank(person)
   .then(response  => console.log("checkBank " + person.name + " " + response ))
   return Promise.resolve(true);     
}


    // Вызываем промис
const startCheck = function () {
    for(let i =0; i < allPersons.length; i++) {
        person = allPersons[i];
        console.log(person.name);
        verifyPolicePromice(person);
        verifyMedicalPromice(person);
        checkBankPromice(person);              
    }
};
     






