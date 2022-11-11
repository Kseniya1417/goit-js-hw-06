// const input = document.querySelector("#name-input");
// const output = document.querySelector("#name-output");
// input.addEventListener("input", (event) => {
//     input.textContent = event.currentTarget.value;
//     if (input.textContent.length === 0) {
//         event.currentTarget.value === "Anonymous";
//     }
// });

const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
input.addEventListener("input", (event) => {
    input.value === "" 
        ? (output.textContent = "Anonymous")
        : (output.textContent = event.currentTarget.value);
});