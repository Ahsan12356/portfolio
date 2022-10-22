const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const msgBox = document.getElementById("msg");

function fired() {
  const strg = {
    name: `${nameField.value}`,
    email: `${emailField.value}`,
    message: `${msgBox.value}`,
  };

  const json = JSON.stringify(strg);
  localStorage.formData = json;

  const stored = localStorage.formData;
  const prsData = JSON.parse(stored);

  if (localStorage.formData) {
    nameField.value = prsData.name;
    emailField.value = prsData.email;
    msgBox.value = prsData.message;
  }
}

if (typeof Storage !== "undefined") {
  const btn = document.getElementById("sbmt");
  btn.addEventListener("click", fired);
}
