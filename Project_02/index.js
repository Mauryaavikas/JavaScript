let inputSlider = document.getElementById('inputSlider')
let sliderValue = document.getElementById('sliderValue')
let passbox = document.getElementById('passBox')
let lowercase = document.getElementById('lowercase')
let uppercase = document.getElementById('uppercase')
let numbers = document.getElementById('numbers')
let symbols = document.getElementById('symbols')
let btngen = document.getElementById('Btngen')
let copyicon = document.getElementById('copyIcon')

/* Yha pr input slidervalue mei inputslider ki value assign ho rhi hai 
   & aur wo show ho rhi hai password length ke samne
*/
sliderValue.textContent = inputSlider.value


// Yha pr value change ho rhi hai slider ki wjh se
inputSlider.addEventListener('input', () => {
  sliderValue.textContent = inputSlider.value

})

btngen.addEventListener('click', () => {
  passbox.value = generatePassword();
})

let upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowerChar = "abcdefghijklmnopqrstuvwxyz"
let number = '0123456789'
let symbol = "~!@#$%^&*':;,./?|"
// function to generate password
function generatePassword() {
  let genPassword = ""
  let allChars = ""
  allChars += lowercase.checked ? lowerChar : ""
  allChars += uppercase.checked ? upperChar : ""
  allChars += numbers.checked ? number : ""
  allChars += symbols.checked ? symbol : ""

  let i = 1;
  while (i <= inputSlider.value) {
    genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length))
    i++
  }
  return genPassword
}
  copyicon.addEventListener('click', () => {
  if (passbox.value != "" || passbox.value.length >= 1) {
    navigator.clipboard.writeText(passbox.value);
    copyicon.innerHTML = "check"
    copyicon.title = "Copy Password"
    setTimeout(() => {
      copyicon.innerHTML = "content_copy"
      copyicon.title = ""
    }, 5000);

  }
})