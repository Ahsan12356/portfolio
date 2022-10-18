let pupwin = document.createElement('section');
pupwin.className='modlpup'
pupwin.innerHTML = '<h3>Multi-post stories</h3>'
+'<section class="prj1_tch_dtls">'

function addCont() {
    document.body.appendChild(pupwin);
}

let pupbtn = document.querySelector('#prj1btn');
pupbtn.addEventListener('click', addCont);