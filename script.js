const showtext = document.querySelector(".showtext"),
button = document.querySelector("button"),
copyBtn = document.querySelector(".far"),
copyActive = document.querySelector(".fas");
let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
button.onclick = () => {
let i,
  randomPassword = "";
copyBtn.style.display = "block";
copyActive.style.display = "none";
for (i = 0; i < 18; i++) {
  randomPassword = randomPassword + chars.charAt(
    Math.floor(Math.random() * chars.length)
  );
}
showtext.value = randomPassword;
}

function copy() {
showtext.select();
document.execCommand("copy");
copyBtn.style.display = "none";
copyActive.style.display = "block";
}