const passwordInput = document.querySelector(".passwordBox input"),
copyIcon = document.querySelector(".passwordBox .copyIcon"),
rangeInput = document.querySelector(".rangeBox input"),
sliderNumber = document.querySelector(".rangeBox .sliderNumber"),
generateButton = document.querySelector(".genrateButton");


// console.log(passwordInput, copyIcon, rangeInput, sliderNumber, generateButton);



//Characters of alphabet(a-z/A-Z), numbers (0-9) and Symbols($%&[]...)
let allCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789^!$%&|[](){}:;.,*+-#@<>~"

const generatPassword = () => {
     let newPassword= "";

     for (let i = 0; i < rangeInput.value; i++) {
            
        let randomNumbers = Math.floor(Math.random() * allCharacters.length );
        newPassword += allCharacters[randomNumbers];
        // console.log(allCharacters[randomNumbers]);
         
     }
    //  console.log(newPassword);
     passwordInput.value = newPassword;
         copyIcon.classList.replace("uil-file-check-alt","uil-copy" )



}

rangeInput.addEventListener("input",()=>{
    sliderNumber.innerText = rangeInput.value;
    generatPassword();
})

copyIcon.addEventListener('click',()=>{
    // console.log(passwordInput.value);
    copyIcon.classList.replace("uil-copy", "uil-file-check-alt")
    navigator.clipboard.writeText(passwordInput.value)
})

 generatPassword();

generateButton.addEventListener('click', generatPassword);


 