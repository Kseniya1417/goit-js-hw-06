const input = document.querySelector("#validation-input");
const dataLenght = Number(input.dataset.length);
const onInputBlur = event => {
    if (event.currentTarget.value.length >= dataLenght) {
        input.classList.add("valid");
        input.classList.remove("invalid");
    } else {
        input.classList.add("invalid");
        input.classList.remove("valid");
    }
};
input.addEventListener("blur", onInputBlur);


// const border = document.querySelector(".validation-input");
// const borderValid = document.querySelector("validation-input.valid");
// const borderInValid = document.querySelector("validation-input.invalid");
// input.addEventListener("input", (event) => {
//     if (input.textContent.length === dataLenght) {
//         border = borderValid;
//     }
//     else (border = borderInValid);  
// })