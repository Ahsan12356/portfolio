const viw = document.createElement('section');
const closeBtn = document.createElement('img');
const mblMnu = document.createElement('ul');

function closeView() {
  viw.removeChild(closeBtn);
  viw.removeChild(mblMnu);
  for (let i = 0; i < 3; i += 1) {
    mblMnu.removeChild(mblMnu.querySelector('li'));
  }
  document.body.removeChild(viw);
}

function displayMenuCntnr() {
  viw.id = 'mnubr_viw';
  viw.style.width = '100vw';
  viw.style.height = '100vh';
  viw.style.position = 'fixed';
  viw.style.top = 0;
  viw.style.bottom = 0;
  viw.style.right = 0;
  viw.style.left = 0;
  viw.style.backgroundColor = '#3c3a39';
  document.body.appendChild(viw);

  closeBtn.src = 'images/Icon.png';
  closeBtn.style.position = 'absolute';
  closeBtn.style.top = '5%';
  closeBtn.style.right = '5%';
  closeBtn.addEventListener('click', closeView);
  viw.appendChild(closeBtn);

  mblMnu.className = 'mbl_mnu';
  mblMnu.style.padding = '0';
  mblMnu.style.margin = '0';
  mblMnu.style.marginLeft = '24px';
  mblMnu.style.marginRight = '24px';
  viw.appendChild(mblMnu);
  mblMnu.style.marginTop = '62px';
  mblMnu.style.listStyleType = 'none';
  for (let i = 0; i < 3; i += 1) {
    const mnuItm = document.createElement('li');
    mnuItm.style.marginBottom = '40px';
    mnuItm.className = `menu_item${i}`;
    mnuItm.style.borderBottom = '1px solid #6f6c6b';
    const lnk = document.createElement('a');

    if (i === 0) {
      lnk.appendChild(document.createTextNode('Portfolio'));
      lnk.href = '#';
    } else if (i === 1) {
      lnk.appendChild(document.createTextNode('About'));
      lnk.href = '#abtme';
    } else {
      lnk.appendChild(document.createTextNode('Contact'));
      lnk.href = '#cntct';
    }
    lnk.style.fontFamily = 'Poppins,sans-serif';
    lnk.style.fontStyle = 'normal';
    lnk.style.fontWeight = '600';
    lnk.style.fontSize = '32px';
    lnk.style.textDecoration = 'none';
    lnk.style.color = '#fff';
    lnk.addEventListener('click', closeView);
    mnuItm.appendChild(lnk);
    mblMnu.appendChild(mnuItm);
  }
  viw.appendChild(mblMnu);
}
const hmBtn = document.body.querySelector('#hmbtn');
hmBtn.addEventListener('click', displayMenuCntnr);
