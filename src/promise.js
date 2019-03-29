// Police Department: 
// checking rule of age (age > 18, 5sec);
// checking rule of linking gender with age ( male: age must be more than 22, female: age must be more than 18, 8 sec)
// checking rule of having passport (12sec). 

// Bank Department: 
// checking rule of linking gender with payment (male: payment must be more than 1000$, female: payment must be more then 950$, 40sec)


// Police

function checkAgePolice (person) {
    console.log('start checkAgePolice'+ person.id )
    
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            if (person.age >= 18) {
                resolve("age");
            } else{
                reject("age")
            }                
            }, 5000);
         });
};

function checkGenderAgePolice (person) {
    console.log('start checkGenderAgePolice'+ person.id  )

        return new Promise(function(resolve,reject){
            setTimeout(() => {
                if (person.gender === 'female' && person.age >= 18) {
                    resolve("genderAge");
                } else if (person.gender === 'male' && person.age >= 22) {
                    resolve("genderAge");          
                } else { 
                    reject("genderAge");
                }                 
                }, 8000);
             });        
};

function checkPassportPolice (person) {
    console.log('start checkPassportPolice'+ person.id  )
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            if(person.isHasPassport) {
                resolve("passport");
            } else {
                reject("passport");
            }              
            }, 12000);
         });          
};



let verifyPolicePromice = function (person) {
    return new Promise(function(resolve,reject) {
        checkAgePolice(person)
        .then(response  => personsView.renderStatusApproved(person.id,response))
        .then(response  => checkGenderAgePolice(person))
        .then(response  => personsView.renderStatusApproved(person.id,response))
        .then(response  => checkPassportPolice(person))
        .then(response  => personsView.renderStatusApproved(person.id,response))
        .then(response  => resolve(true))
        .catch(error => {
            personsView.renderStatusRejected(person.id,error)
            reject(person.id+error);
        });  
    });
}

// Medical Department:
// checking rule of healthy (healthy > 75%, 15sec);
// checking rule of linking gender with healthy ( male: healthy must be more than 75%, female: healthy must be more than 85%, 15sec)

function checkHealthy (person) {
    console.log('start checkHealthy'+ person.id  )

    return new Promise(function(resolve,reject){
        setTimeout(() => {
            if (person.healthy > 75){
                resolve("health");
            } else {
                reject("health");
            }             
            }, 15000);
         });          
};

function checkHealthyAge (person) {
    console.log('start checkHealthyAge'+ person.id  )
        return new Promise(function(resolve,reject){
            setTimeout(() => {
                if (person.gender === 'female' && person.healthy > 85) {
                    resolve("healthGender");
                } else if (person.gender === 'male' && person.healthy > 75) {
                    resolve("healthGender");           
                } else {
                    reject("healthGender");
                }                  
                }, 15000);
             });        
};

let verifyMedicalPromice = function (person) {
    return new Promise(function(resolve,reject) {
        checkHealthy(person)
        .then(response  => personsView.renderStatusApproved(person.id,response))
        .then(response  => checkHealthyAge(person))
        .then(response  => personsView.renderStatusApproved(person.id,response))
        .then(response  => resolve(true))
        .catch(error => {
            personsView.renderStatusRejected(person.id,error)
            reject(person.id+error);
        }); 
    });    
}

// Bank Department: 
// checking rule of linking gender with payment (male: payment must be more than 1000$, female: payment must be more then 950$, 40sec)

function checkBank (person) {
    console.log('checkBank'+ person.id  )
  
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            if (person.gender === 'female' && person.payment > 950){
                resolve("payment");
            } 
            if (person.gender === 'male' && person.payment >= 1000){
                resolve("payment");
            }
            reject("payment");
            }, 40000);
         });          
};

let checkBankPromice = function (person) {
    return new Promise(function(resolve,reject) {
    checkBank(person)
   .then(response  => personsView.renderStatusApproved(person.id,response))
   .then(response  => resolve(true))
        .catch(error => {
            personsView.renderStatusRejected(person.id,error)
            reject(person.id + error);
        }); 
});   
}


    // Вызываем промис
const startCheck = function () {
    for(let i =0; i < allPersons.length; i+=2) {
        person1 = allPersons[i];
        person2 = allPersons[i+1];
        let promise1 = Promise.all([verifyPolicePromice(person1), verifyMedicalPromice(person1), checkBankPromice(person1)]);
          let promise2 = Promise.all([verifyPolicePromice(person2), verifyMedicalPromice(person2), checkBankPromice(person2)]);
          Promise.race([promise1, promise2])
                .then(value => console.log(value))
                .catch(error => console.error(error));
                   
    }
};
     






