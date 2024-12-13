let btn = document.querySelectorAll(".btn");
let input = document.querySelector(".input");
let result = document.querySelector(".result");
let equal = document.querySelector(".equal");
let cancel = document.querySelector(".cancel");
let numbers = "";

btn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let num = e.target.innerText;
    numbers += num;
    input.innerText += num;
    result.innerText = "";
  });
});

equal.addEventListener("click", () => {
  input.innerText = input.innerText;
  result.innerText = `${eval(numbers)}`;
});

cancel.addEventListener("click", () => {
  numbers = "";
  input.innerText = "";
  result.innerText = "";
});
