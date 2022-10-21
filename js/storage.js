

if(typeof(Storage) !== "undefined") {
var nameField = document.getElementById('name')
var emailField = document.getElementById('email')
var msgBox = document.getElementById('msg')
// nameField.addEventListener('input', changeName);
// emailField.addEventListener('input', changeEmail)
// msgBox.addEventListener('input', changeMessage);

var btn = document.getElementById('sbmt')
btn.addEventListener('click', fired => {
    //object where input data is stored
    var strg = {
        name: `${nameField.value}`,
        email: `${emailField.value}`,
        message: `${msgBox.value}`
    };

    //storing data in local storage
    var json = JSON.stringify(strg);
    localStorage.formData=json;

    //retrieving data from local storage
    var stored = localStorage.formData
    var prsData = JSON.parse(stored)

    if(localStorage.formData) {
        nameField.value=prsData.name;
        emailField.value=prsData.email
        msgBox.value=prsData.message
    }
});
} else {
    console.log('Client-side storage is not available/supported');
}


// function changeName() {
//     localStorage.name=str.value
// }

// function changeEmail() {
//     strg.email = emailField.value
// }

// function changeMessage() {
//     strg.message = msgBox.value
// }

