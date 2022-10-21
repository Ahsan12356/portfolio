const form = document.querySelector('#formspree_form');
const submit = document.querySelector('#sbmt');
const sbmtCntnr = document.querySelector('.sbmt_cntnr')
const errMsg = document.createElement('p');
errMsg.className = 'errMsg'
errMsg.innerHTML='&#9888;<br>email leters should be small'
submit.addEventListener('click', submitted);
sbmtCntnr.before(errMsg)
function submitted() {
    const email = document.getElementById('email');
    var i=0;
    var emailValid;
    while(i<email.value.length) {
        form.addEventListener('click', event => {
            emailValid = /[A-Z]/.test(email.value)
            if(emailValid) {
                errMsg.style.opacity=1
                event.preventDefault()
            }
        })
    i+=1;
    }
}