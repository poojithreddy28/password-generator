const inputSlider = document.getElementById("inputSlider");
const sliderValue = document.getElementById("sliderValue");
const passBox = document.getElementById("passBox");
const lowercaseEl = document.getElementById("lowercase");
const uppercaseEl = document.getElementById("uppercase");
const numberEl = document.getElementById("numbers");
const symbolEl = document.getElementById("specialcharacters");
const generteBttn = document.getElementById("getBttn");
const copy = document.getElementById("copy");
const lowercaseletters = "abcdefghijklmnopqrstuvwxyz";
const uppercaselettters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}\\|;':\",./<>?";

inputSlider.addEventListener("click",()=>{
    sliderValue.textContent = inputSlider.value;
})


generteBttn.addEventListener("click",()=>{
    passBox.value= generatePassword();
})

function generatePassword(){

    const length =inputSlider.value;
    let password = "";
    let characters="";

    characters+=lowercaseEl.checked ? lowercaseletters : "";
    characters+=uppercaseEl.checked ? uppercaselettters : "";
    characters+=numberEl.checked ? numbers : "";
    characters+=symbolEl.checked ? symbols : "";

    for(let i =0;i<length;i++){
        password += characters.charAt(Math.floor(Math.random()*characters.length));

        console.log(password);
        }

        return password;
}

copy.addEventListener("click",()=>{
    if(passBox.value !="" || passBox.value.length >6){
        navigator.clipboard.writeText(passBox.value);
        copy.innerHTML="check";

        setTimeout(()=>{
            copy.innerHTML="content_copy";
            passBox.value="";
        },3000)
    }
})
